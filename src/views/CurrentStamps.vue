<template>
  <div id="CurrentStamps">
    <h1>取得したスタンプ</h1>
    <div v-if="isLoading">
      <p>読み込み中...</p>
    </div>
    <div v-else-if="stamps.length > 0" class="stamps-container">
      <div v-for="stamp in stamps" :key="stamp.id" class="stamp">
        <img :src="stamp.imageUrl" :alt="`スタンプ: ${stamp.description}`" />
        <p>{{ stamp.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>スタンプは所持していません。</p>
    </div>
  </div>
</template>

<script>
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "CurrentStamps",
  data() {
    return {
      stamps: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchStampData(id) {
      try {
        const db = getFirestore();
        const storage = getStorage();

        // スタンプデータ取得
        const stampRef = doc(db, "stamps", id);
        const stampSnap = await getDoc(stampRef);
        if (stampSnap.exists()) {
          const stampData = stampSnap.data();
          // console.log("取得したスタンプデータ:", stampData); // デバッグ用
          const imageUrl = await getDownloadURL(storageRef(storage, `stamps/${id}.webp`));
          // console.log("取得した画像 URL:", imageUrl); // デバッグ用
          return { id, ...stampData, imageUrl };
        } else {
          console.error(`スタンプデータが見つかりません: ${id}`); // デバッグ用
          return null;
        }
      } catch (error) {
        console.error(`Error fetching stamp data for ID ${id}:`, error);
        return null;
      }
    },
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore();
        const userStampRef = doc(db, "users", user.uid);

        try {
          const userStampSnap = await getDoc(userStampRef);
          if (userStampSnap.exists()) {
            const stampIds = userStampSnap.data().stamps || [];
            // console.log("取得したスタンプID:", stampIds); // デバッグ用
            const stamps = await Promise.all(
              stampIds.map((id) => this.fetchStampData(id))
            );
            this.stamps = stamps.filter((stamp) => stamp !== null);
            console.log("取得したスタンプ:", this.stamps); // デバッグ用
          } else {
            // console.warn("スタンプ情報が見つかりません。"); // デバッグ用
          }
        } catch (error) {
          console.error("Error fetching user stamps:", error);
        } finally {
          this.isLoading = false; // ローディング終了
        }
      } else {
        console.error("ユーザーが認証されていません。"); // デバッグ用
        this.$router.push('/login'); // ログイン画面にリダイレクト
        this.isLoading = false; // ローディング終了
      }
    });
  },
};
</script>

<style scoped>
#CurrentStamps {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
}

.stamps-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.stamp {
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stamp:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stamp img {
  inline-size: 100px;
  block-size: 100px;
  border-radius: 4px;
  margin-block-end: 8px;
}

.stamp p {
  margin: 0;
  font-size: 14px;
  color: #333;
}
</style>
