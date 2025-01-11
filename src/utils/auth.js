import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export async function checkAuthAndRedirect(router) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    router.push('/login'); // ユーザーが認証されていない場合、ログインページにリダイレクト
  }
}

export async function checkAdminAndRedirect(router) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    router.push('/login'); // ユーザーが認証されていない場合、ログインページにリダイレクト
    return;
  }

  const db = getFirestore();
  const appCreatorDoc = await getDoc(doc(db, "organizations/app_creator/members", user.uid));
  const org01Doc = await getDoc(doc(db, "organizations/org_01/members", user.uid));
  const org02Doc = await getDoc(doc(db, "organizations/org_02/members", user.uid));

  if (
    (appCreatorDoc.exists() && appCreatorDoc.data().role === "admin") ||
    (org01Doc.exists() && org01Doc.data().role === "admin") ||
    (org02Doc.exists() && org02Doc.data().role === "admin")
  ) {
    // 管理者として認識
    return;
  } else {
    router.push('/'); // 管理者でない場合、ホームページにリダイレクト
  }
}