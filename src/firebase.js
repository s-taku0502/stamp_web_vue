// 必要なライブラリをインポート
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyCX-MwBvHlOe8hKVWFq4CrisV0MKUHwJfY",
  authDomain: "kanazawa-nuka2024.firebaseapp.com",
  projectId: "kanazawa-nuka2024",
  storageBucket: "kanazawa-nuka2024.firebasestorage.app",
  messagingSenderId: "729877460278",
  appId: "1:729877460278:web:3e388b308f1d6ad0192f97",
  measurementId: "G-WZ2GHT12EV",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// Firebase Authenticationの初期化
const auth = getAuth(app);

// Firestoreの初期化
const db = getFirestore(app);

// Firebase Storageの初期化
const storage = getStorage(app);

// 非同期処理の例
const fetchUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
};

// 必要なオブジェクトをエクスポート
export { auth, db, storage, fetchUsers };
