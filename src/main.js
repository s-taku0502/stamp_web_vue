import { createApp } from 'vue';
import App from '../App.vue';
import router from './router';
import './assets/css/home.css';
import './assets/css/template.css';
import './assets/css/scan.css';

/*
import './assets/css/stamps.css';
import './assets/css/coupons.css';
import './assets/css/stores.css'; */
import './assets/css/contact.css';

createApp(App).use(router).mount('#app');