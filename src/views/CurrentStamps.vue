<template>
  <div>
    <h1>イベント期間中のスタンプ</h1>

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
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../firebase";
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
  name: "CurrentStamps",
  data() {
    return {
      stamps: [], // 取得したスタンプのリスト
      eventStartDate: new Date('2025-01-01'), // イベント開始日
      eventEndDate: new Date('2025-12-31'), // イベント終了日
    };
  },
  methods: {
    // スタンプのデータを取得するメソッド
    async fetchStamps() {
      const db = getFirestore();
      const user = auth.currentUser;
      if (user) {
        const stampsCollection = collection(db, "stamps", user.uid, "userStamps");
        const q = query(stampsCollection, where("timestamp", ">=", this.eventStartDate), where("timestamp", "<=", this.eventEndDate));
        const stampDocs = await getDocs(q);
        this.stamps = stampDocs.docs.map(doc => doc.data());
      }
    },
  },
  async created() {
    await checkAuthAndRedirect(this.$router);
    // コンポーネントが作成されたときにスタンプのデータを取得
    this.fetchStamps();
  }
};
</script>

<style scoped>
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