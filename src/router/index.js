import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Scan from '@/views/Scan.vue';
import Stamps from '@/views/Stamps.vue';
import Coupons from '@/views/Coupons.vue';
import Stores from '@/views/Stores.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', name: 'ログイン画面', component: Login }, // 初期表示をログイン画面に設定
  { path: '/home', name: 'ホーム', component: Home },
  { path: '/scan', name: 'スキャン画面', component: Scan },
  { path: '/stamps', name: 'スタンプ画面', component: Stamps },
  { path: '/coupons', name: 'クーポン画面', component: Coupons },
  { path: '/stores', name: '店舗一覧', component: Stores },
  { path: '/contact', name: 'お問い合わせ', component: Contact },
  { path: '/register', name: '登録画面', component: Register },
  { path: '/:pathMatch(.*)*', name: '404NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ナビゲーションガードで認証状態をチェック
router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')); // ログイン状態の確認

  if (to.name === 'ログイン画面' && isAuthenticated) {
    // ログイン済みならホーム画面へリダイレクト
    next({ name: 'ホーム' });
  } else if (to.name !== 'ログイン画面' && !isAuthenticated) {
    // 未ログインで他のページにアクセスした場合はログイン画面へ
    next({ name: 'ログイン画面' });
  } else {
    // 問題がなければそのまま進む
    next();
  }
});

export default router;
