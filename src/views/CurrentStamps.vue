<template>
  <div id="CurrentStamps">
    <h1>スタンプ画像</h1>
    <img v-if="imageUrl" :src="imageUrl" :alt="description" />
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: 'CurrentStamps',
  data() {
    return {
      imageUrl: null,
      description: null,
    };
  },
  async created() {
    const text = this.$route.query.text; // QRコードから読み取った文字列
    if (!text) {
      console.error("QRコードの内容が無効です。");
      return;
    }
    console.log("読み取った文字列:", text); // デバッグ情報を出力

    const user = auth.currentUser;
    if (!user) {
      console.error("ユーザーが認証されていません。");
      return;
    }

    const userStampRef = doc(db, "currentStamps", user.uid);
    const userStampSnap = await getDoc(userStampRef);

    if (userStampSnap.exists() && userStampSnap.data()[text]) {
      const docRef = doc(db, "stamps", text);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.description = docSnap.data().description;
        console.log("Document data:", docSnap.data());
        this.imageUrl = `https://firebasestorage.googleapis.com/v0/b/kanazawa-nuka2024.firebasestorage.app/o/stamps%2F${text}.webp?alt=media`;
        console.log("成功");
      } else {
        console.error("No such document!");
        console.error(`反映先：${`https://firebasestorage.googleapis.com/v0/b/kanazawa-nuka2024.firebasestorage.app/o/stamps%2F${text}.webp?alt=media`}`);
      }
    } else {
      console.error("スタンプ情報が見つかりません。");
    }
  }
};
</script>

<style scoped>
#CurrentStamps {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
}

img {
  max-width: 100px;
  height: auto;
}
</style>
