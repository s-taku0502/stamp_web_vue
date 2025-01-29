import { createRouter, createWebHistory } from 'vue-router';
import { QrcodeStream } from 'vue-qrcode-reader';
import { store } from '@/store';

import RegisterLayout from '@/layouts/RegisterLayout.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Scan from '@/views/Scan.vue';
import Coupons from '@/views/Coupons.vue';
import Stores from '@/views/Stores.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import Stamps from '@/views/Stamps.vue';
import AllStamps from '@/views/AllStamps.vue';
import CurrentStamps from '@/views/CurrentStamps.vue';
import UserProfile from '@/views/UserProfile.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import Dummy from '@/views/Dummy.vue';

const routes = [
  // Home
  { path: '/home', name: 'Home', component: Home },
  // Profile
  { path: '/', name: 'UserProfile', component: UserProfile },
  // Scan
  { path: '/scan', 
    name: 'スキャン画面', 
    component: Scan,
    props: (route) => ({ onScanComplete: route.query.onScanComplete }) },
  // Stamps
  { path: '/stamps', name:'スタンプ画面', component: Stamps },
  // Current stamps
  { path: '/current-stamps', name: 'CurrentStamps', component: CurrentStamps },
  // All stamps
  { path: '/all-stamps', name: '過去のスタンプ', component: AllStamps },
  // Coupons
  { path: '/coupons', name: 'クーポン画面', component: Coupons },
  // Stores
  { path: '/stores', name: '店舗一覧', component: Stores },
  // Contact
  { path: '/contact', name: 'お問い合わせ', component: Contact },

  // Register
  {
    path: '/register',
    name: '新規登録',
    component: Register,
    meta: { layout: RegisterLayout },
  },
  // Login
  { path: '/login', name: 'Login', component: Login },
  // Not Found
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  // Dummy
  { path: '/dummy', name: 'Dummy', component: Dummy },
  // Privacy Policy
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
