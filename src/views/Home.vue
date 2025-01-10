<!-- filepath: /src/components/Home.vue -->
<template>
  <main>
    <p>こちらは額地区デジタルスタンプらり～のホームページです。</p>
    <p>スタンプらり～を利用するには<router-link to="/">こちら</router-link>よりログインしてください。</p>
    <p class="attendance">※ログインユーザーはマイページを開きます。</p>
  </main>
</template>
  
<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
p{
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

.attendance{
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