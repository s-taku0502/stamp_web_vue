<template>
  <main>
    <h2>こちらは額地区デジタルスタンプらり～のホームページです。</h2>
    <News />
    <!-- <p>スタンプらり～を利用するには<router-link to="/">こちら</router-link>よりログインしてください。</p> -->
    <!-- <p class="attendance">※ログインユーザーはマイページを開きます。</p> -->
  </main>
</template>
  
<script>
import { checkAuthAndRedirect } from "@/utils/auth";
import News from "@/views/News.vue";

export default {
  name: 'Home',
  created() {
    checkAuthAndRedirect(this.$router);
  },
  components: {
    News
  }
};
</script>

<style scoped>
* {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.attendance {
  text-align: center;
  color: red;
}

footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>