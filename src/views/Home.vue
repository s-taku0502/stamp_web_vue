<!-- filepath: /src/components/Home.vue -->
<template>
  <main>
    こちらは額地区デジタルスタンプ～のホームページです。
  </main>
</template>
  
<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
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