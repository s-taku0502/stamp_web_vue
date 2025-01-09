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

const routes = [
  { path: '/', name: 'ログイン画面', component: Login },
  { path: '/home', name: 'ホーム', component: Home },
  { path: '/scan', 
    name: 'スキャン画面', 
    component: Scan,
    props: (route) => ({ onScanComplete: route.query.onScanComplete }) },
  { path: '/current-stamps', name: '開催中のスタンプ', component: CurrentStamps },
  { path: '/all-stamps', name: '過去のスタンプ', component: AllStamps },
  { path: '/coupons', name: 'クーポン画面', component: Coupons },
  { path: '/stores', name: '店舗一覧', component: Stores },
  { path: '/contact', name: 'お問い合わせ', component: Contact },
  { path: '/user-profile', name: 'マイページ', component: UserProfile },
  {
    path: '/register',
    name: '新規登録',
    component: Register,
    meta: { layout: RegisterLayout },
  },
  {
    path: '/login',
    name: 'ログイン画面',
    component: Login,
    meta: { layout: RegisterLayout },
  },
  { path: '/:catchAll(.*)', name: '404NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
