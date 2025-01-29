import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from "firebase/app";
import store from './store';

// Firebaseの設定
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Firebaseの初期化
initializeApp(firebaseConfig);

// アプリケーションの作成
const app = createApp(App);

// プラグインの登録
app.use(router);
app.use(store); // Vuex を登録

// アプリケーションのマウント
app.mount('#app');
