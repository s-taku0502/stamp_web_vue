<template>
  <div>
    <h1>Stamps Page</h1>

    <!-- Scanコンポーネントを表示するページで表示 -->
    <router-link to="/scan">QRコードをスキャン</router-link>

    <!-- スキャン結果の表示 -->
    <p v-if="scannedText">スキャン結果: {{ scannedText }}</p>
  </div>
</template>

<script>
export default {
  name: "Stamps",
  data() {
    return {
      scannedText: '', // スキャン結果を保存
    };
  },
  methods: {
    // スキャン結果を受け取って更新するメソッド
    updateScannedText(decodedText) {
      this.scannedText = decodedText;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
</style>
