import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RegisterLayout from './layouts/RegisterLayout.vue';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebaseの設定 (Firebase Console からコピー)
const firebaseConfig = {
    apiKey: "AIzaSyCX-MwBvHlOe8hKVWFq4CrisV0MKUHwJfY",
    authDomain: "kanazawa-nuka2024.firebaseapp.com",
    projectId: "kanazawa-nuka2024",
    storageBucket: "kanazawa-nuka2024.firebasestorage.app",
    messagingSenderId: "729877460278",
    appId: "1:729877460278:web:7b9f69c6ae2ad402192f97",
    measurementId: "G-WS29TRGLJ6"
};

// Firebaseの初期化
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Vueアプリケーションの初期化
const app = createApp(App);

// グローバルコンポーネントの登録
app.component('RegisterLayout', RegisterLayout);

// Vue Router の使用
app.use(router);

// アプリのマウント
app.mount('#app');