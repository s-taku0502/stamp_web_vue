<template>
  <div class="user-profile">
    <h1>マイページ</h1>
    <div class="profile-info" v-if="user">
      <p><strong>ユーザー名:</strong> {{ user.displayName }}</p>
      <p><strong>メールアドレス:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>ユーザー情報を取得できませんでした。</p>
    </div>
    <div class="update-username">
      <input type="text" v-model="newDisplayName" placeholder="新しいユーザー名" />
      <button @click="updateDisplayName">ユーザー名を変更</button>
    </div>
    <!-- <p>再ログイン・他ページからの遷移でユーザー名の表示が更新されます。</p> -->
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut, updateProfile } from "firebase/auth";

export default {
  name: "UserProfile",
  data() {
    return {
      user: null,
      newDisplayName: ""
    };
  },
  created() {
    const auth = getAuth();
    this.user = auth.currentUser;
    if (!this.user) {
      this.$router.push('/login'); // ユーザーが認証されていない場合、ログインページにリダイレクト
    }
  },
  methods: {
    async updateDisplayName() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user && this.newDisplayName) {
        try {
          await updateProfile(user, { displayName: this.newDisplayName });
          // ユーザー情報を手動で更新して即時反映
          this.user = { ...user, displayName: this.newDisplayName };
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