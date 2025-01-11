<template>
  <div class="user-profile">
    <h1>マイページ</h1>
    <div class="profile-info" v-if="user">
      <p><strong>ユーザー名:</strong> {{ user.name }}</p>
      <p><strong>メールアドレス:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>ユーザー情報を取得できませんでした。</p>
    </div>
    <div class="update-username">
      <input type="text" v-model="newDisplayName" placeholder="新しいユーザー名" />
      <button @click="updateDisplayName">ユーザー名を変更</button>
    </div>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { checkAuthAndRedirect, checkAdminAndRedirect } from "@/utils/auth";

export default {
  name: "UserProfile",
  data() {
    return {
      user: null,
      newDisplayName: ""
    };
  },
  async created() {
    await checkAuthAndRedirect(this.$router);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      const db = getFirestore();
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (userDoc.exists()) {
        this.user = userDoc.data();
        // 管理者権限のチェック
        await checkAdminAndRedirect(this.$router);
      } else {
        console.error("ユーザードキュメントが存在しません");
      }
    }
  },
  methods: {
    async updateDisplayName() {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser && this.newDisplayName) {
        try {
          const db = getFirestore();
          const userRef = doc(db, "users", currentUser.uid);
          await updateDoc(userRef, { name: this.newDisplayName });
          this.user.name = this.newDisplayName;
          alert("ユーザー名が更新されました");
        } catch (error) {
          alert("ユーザー名の更新に失敗しました: " + error.message);
        }
      }
    },
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.$router.push("/login");
      } catch (error) {
        alert("ログアウトに失敗しました: " + error.message);
      }
    }
  }
};
</script>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.profile-info {
  margin-bottom: 20px;
}

.update-username {
  margin-bottom: 20px;
}

.update-username input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>