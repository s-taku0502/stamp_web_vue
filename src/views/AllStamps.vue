<template>
  <div>
    <h1>全てのスタンプ</h1>
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
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { auth } from "../firebase";
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
  name: "AllStamps",
  data() {
    return {
      stamps: [],
    };
  },
  methods: {
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
  async created() {
    await checkAuthAndRedirect(this.$router);
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