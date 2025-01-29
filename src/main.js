import { createApp } from 'vue';
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import App from './App.vue';
import router from './router';
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

// Pinia の初期化
const pinia = createPinia();

// プラグインの登録
app.use(router);
app.use(store); // Vuex を登録

// Pinia を登録
app.use(pinia);

// アプリケーションのマウント
app.mount('#app');
