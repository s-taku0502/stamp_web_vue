import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Scan from '@/views/Scan.vue';
import Stamps from '@/views/Stamps.vue';
import Coupons from '@/views/Coupons.vue';
import Stores from '@/views/Stores.vue';
import Contact from '@/views/Contact.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/',name:'ホーム', component: Home },
  { path: '/scan',name:'スキャン画面', component: Scan },
  { path: '/stamps',name:'スタンプ画面', component: Stamps },
  { path: '/coupons',name:'クーポン画面', component: Coupons },
  { path: '/stores',name:'店舗一覧', component: Stores },
  { path: '/contact',name:'お問い合わせ', component: Contact },
  { path: '/:pathMatch(.*)*',name:'404NotFound', redirect: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
