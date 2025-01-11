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
  const userDoc = await getDoc(doc(db, "organizations/app_creator/members", user.uid));
  if (!userDoc.exists() || userDoc.data().role !== "admin") {
    router.push('/'); // 管理者でない場合、ホームページにリダイレクト
  }
}