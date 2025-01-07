import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RegisterLayout from './layouts/RegisterLayout.vue';

const app = createApp(App);

// グローバルコンポーネントの登録
app.component('RegisterLayout', RegisterLayout);

// Vue Router の使用
app.use(router);

// アプリのマウント
app.mount('#app');
