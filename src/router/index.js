import { createRouter, createWebHistory } from 'vue-router';
import { QrcodeStream } from 'vue-qrcode-reader'

import RegisterLayout from '@/layouts/RegisterLayout.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Scan from '@/views/Scan.vue';
import Stamps from '@/views/Stamps.vue';
import Coupons from '@/views/Coupons.vue';
import Stores from '@/views/Stores.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', name: 'ログイン画面', component: Login },
  { path: '/home', name: 'ホーム', component: Home },
  { path: '/scan', 
    name: 'スキャン画面', 
    component: Scan,
    props: (route) => ({ onScanComplete: route.query.onScanComplete }) },
  { path: '/stamps', name: 'スタンプ画面', component: Stamps },
  { path: '/coupons', name: 'クーポン画面', component: Coupons },
  { path: '/stores', name: '店舗一覧', component: Stores },
  { path: '/contact', name: 'お問い合わせ', component: Contact },
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
  { path: '/:pathMatch(.*)*', name: '404NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
