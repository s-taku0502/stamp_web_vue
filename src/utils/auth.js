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
  // if (!user) {
  //   router.push('/login'); // ユーザーが認証されていない場合、ログインページにリダイレクト
  //   return;
  // }

  const db = getFirestore();
  const adminEmailDoc = await getDoc(doc(db, "adminEmails", user.email));

  if (adminEmailDoc.exists() && adminEmailDoc.data().role === "admin") {
    router.push('/admin'); // 管理者の場合、管理者ページにリダイレクト
  } else {
    router.push('/'); // 管理者でない場合、ホームページにリダイレクト
  }
}