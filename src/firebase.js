// 必要なライブラリをインポート
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// 必要なオブジェクトをエクスポート
export { auth, db };
