<template>
  <div>
    <h1>Stamps Page</h1>

    <!-- Scanコンポーネントを表示するページで表示 -->
    <router-link to="/scan">QRコードをスキャン</router-link>

    <!-- スキャン結果の表示 -->
    <p v-if="scannedText">スキャン結果: {{ scannedText }}</p>

    <!-- スタンプの表示 -->
    <div v-if="stamps.length > 0">
      <h2>取得したスタンプ</h2>
      <div class="stamps-container">
        <div v-for="stamp in stamps" :key="stamp.id" class="stamp">
          <img :src="stamp.imageUrl" alt="Stamp Image" />
          <p>{{ stamp.timestamp.toDate().toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, doc, setDoc, collection, getDocs } from "firebase/firestore";
import { auth } from "../firebase";

export default {
  name: "Stamps",
  props: ["qrData"], // ルートパラメータからデータを受け取る
  data() {
    return {
      scannedText: '', // スキャン結果を保存
      stamps: [], // 取得したスタンプのリスト
    };
  },
  methods: {
    // スキャン結果を受け取って更新するメソッド
    async updateScannedText(decodedText) {
      this.scannedText = decodedText;

      // Firestoreにスキャン結果を保存
      const db = getFirestore();
      const user = auth.currentUser;
      if (user) {
        const stampRef = doc(db, "stamps", user.uid);
        await setDoc(stampRef, {
          scannedText: decodedText,
          timestamp: new Date()
        }, { merge: true });

        // スタンプのデータを取得
        this.fetchStamps();
      }
    },
    // スタンプのデータを取得するメソッド
    async fetchStamps() {
      const db = getFirestore();
      const user = auth.currentUser;
      if (user) {
        const stampsCollection = collection(db, "stamps", user.uid, "userStamps");
        const stampDocs = await getDocs(stampsCollection);
        this.stamps = stampDocs.docs.map(doc => doc.data());
      }
    },
  },
  watch: {
    qrData(newVal) {
      if (newVal) {
        this.updateScannedText(newVal);
      }
    }
  },
  created() {
    // コンポーネントが作成されたときにスタンプのデータを取得
    this.fetchStamps();
  }
};
</script>

<style scoped>
p {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}

.stamps-container {
  display: flex;
  flex-wrap: wrap;
}

.stamp {
  margin: 10px;
  text-align: center;
}

.stamp img {
  width: 100px;
  height: 100px;
}
</style>
