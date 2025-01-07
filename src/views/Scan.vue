<template>
  <div id="Scan">
    <main>
      <h1>QRコードをスキャン</h1>

      <!-- QRコードスキャナーのコンポーネント -->
      <qrcode-stream
        v-if="scanning"
        @detect="onDetect"
        class="scanner"
      ></qrcode-stream>

      <!-- スキャン開始 / 停止 ボタン -->
      <button @click="toggleScanning">
        {{ scanning ? 'スキャン停止' : 'スキャン開始' }}
      </button>
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
      scanning: false, // スキャン中かどうかのフラグ
    };
  },
  methods: {
    // QRコードが検出されたときの処理
    onDetect(decodedText) {
      // スキャン結果を親に伝える
      this.$emit('scan-complete', decodedText);
      // スキャンを停止
      this.scanning = false;
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

h1 {
  margin-top: 20px;
  color: #333;
}

/* スキャナーのスタイル */
.scanner {
  width: 100%; /* 幅を100%に設定して親要素に合わせる */
  max-width: 500px; /* 最大幅を500pxに設定 */
  height: 500px; /* 高さも500pxに設定して正方形にする */
  margin: 20px auto;
  border: 2px dashed #cccccc;
  position: relative;
}

/* ビデオ要素（カメラ映像）のスタイル */
.scanner video {
  width: 100%; /* ビデオ要素の幅を100%に設定 */
  height: 100%; /* 高さも100%に設定して正方形にフィットさせる */
  object-fit: cover; /* 縦横比を維持しながら、要素を埋める */
}

/* スキャナーの枠線を点滅させるアニメーション */
.scanner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #4CAF50;
  box-sizing: border-box;
  animation: blink 1.5s infinite;
  display: block;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
