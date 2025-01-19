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
import { QrcodeStream } from 'vue-qrcode-reader';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase";
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
  components: {
    QrcodeStream,
  },
  data() {
    return {
      scanning: false,
    };
  },
  async created() {
    await checkAuthAndRedirect(this.$router);
  },
  methods: {
    async onDetect(decodedText) {
      this.scanning = false;
      const db = getFirestore();
      const storage = getStorage();
      const user = auth.currentUser;
      if (user) {
        const stampId = "sample"; // 例として "sample" を使用
        const storageRef = ref(storage, `stamps/${stampId}.png`);
        const imageUrl = await getDownloadURL(storageRef);

        const stampData = {
          scannedText: decodedText,
          timestamp: new Date(),
          imageUrl: imageUrl
        };

        const stampsCollection = collection(db, "stamps", user.uid, "userStamps");
        await addDoc(stampsCollection, stampData);

        this.$router.push({ name: "CurrentStamps" });
      } else {
        alert("無効なQRコードです");
      }
    },
    toggleScanning() {
      this.scanning = !this.scanning;
    },
  },
};
</script>

<style scoped>
main {
  align-items: center;
  text-align: center;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
}

button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

h1 {
  margin-top: 20px;
  color: #333;
  text-align: center;
}

#Scan {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scanner {
  width: 100%;
  max-width: 500px;
  height: 500px;
  margin: 20px 0;
  border: 2px dashed #cccccc;
  position: relative;
}

.scanner video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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
