import { createRouter, createWebHistory } from 'vue-router';
import { QrcodeStream } from 'vue-qrcode-reader';

import RegisterLayout from '@/layouts/RegisterLayout.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Scan from '@/views/Scan.vue';
import Coupons from '@/views/Coupons.vue';
import Stores from '@/views/Stores.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import AllStamps from '@/views/AllStamps.vue';
import CurrentStamps from '@/views/CurrentStamps.vue';
import UserProfile from '@/views/UserProfile.vue';
import Admin from '@/views/Admin.vue'; // 管理者画面のインポート
const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/', name: 'UserProfile', component: UserProfile },
  { path: '/admin', name: 'Admin', component: Admin }, // 管理者画面のルート
  { path: '/login', name: 'Login', component: Login },
  { path: '/scan', 
    name: 'スキャン画面', 
    component: Scan,
    props: (route) => ({ onScanComplete: route.query.onScanComplete }) },
  { path: '/current-stamps', name: '開催中のスタンプ', component: CurrentStamps },
  { path: '/all-stamps', name: '過去のスタンプ', component: AllStamps },
  { path: '/coupons', name: 'クーポン画面', component: Coupons },
  { path: '/stores', name: '店舗一覧', component: Stores },
  { path: '/contact', name: 'お問い合わせ', component: Contact },
  { path: '/special', name: '特別ページ', component: Mypage},
  {
    path: '/register',
    name: '新規登録',
    component: Register,
    meta: { layout: RegisterLayout },
  },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound } // 404ページのルート
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
