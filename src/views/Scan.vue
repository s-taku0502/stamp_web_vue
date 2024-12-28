<template>
  <div id="Scan>">
  <main>
    <h1>QRコードをスキャン</h1>

    <!-- QRコードスキャナーのコンポーネント -->
    <qrcode-stream @decode="onDecode" @init="onInit" :paused="!scanning" />

    <!-- スキャン開始 / 停止 ボタン -->
    <button @click="toggleScanning">{{ scanning ? 'スキャン停止' : 'スキャン開始' }}</button>

    <!-- スキャン結果の表示 -->
    <p v-if="decodedText">QRコードの内容: {{ decodedText }}</p>
  </main>
  </div>
</template>

<script>
// vue-qrcode-reader から QrcodeStream コンポーネントをインポート
import { QrcodeStream } from 'vue-qrcode-reader';

export default {
  components: {
    QrcodeStream, // QRコード読み取り用のコンポーネントを登録
  },
  data() {
    return {
      decodedText: '', // 読み取ったQRコードの内容を保存
      scanning: false, // スキャン中かどうかのフラグ
    };
  },
  methods: {
    // QRコードが正常に読み取られたときの処理
    onDecode(decodedText) {
      // QRコードのデータを decodedText として受け取る
      this.decodedText = decodedText;
      // スキャンを停止する
      this.scanning = false;
    },
    
    // QRコードリーダーの初期化時に呼ばれるメソッド
    onInit(promise) {
      promise
        .then(() => {
          console.log('QRコードリーダーの初期化が完了しました。');
        })
        .catch((err) => {
          console.error('QRコードリーダーの初期化エラー:', err);
        });
    },
    
    // スキャンの開始・停止を切り替えるメソッド
    toggleScanning() {
      this.scanning = !this.scanning;
    },
  },
};
</script>

<style scoped>
/* スキャンボタンのスタイル */
button {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* スキャンボタンが無効な場合のスタイル */
button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

/* QRコードのスキャン結果を表示するテキストのスタイル */
p {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}

h1 {
  margin-top: 20px;
  color: #333;
}
</style>
