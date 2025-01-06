<template>
  <div class="register">
    <h1>登録画面</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
        <p v-if="password && password.length < 8" class="warning">
          パスワードは6文字以上でなければなりません
        </p>
      </div>

      <button type="submit" :disabled="isLoading">
        <span v-if="isLoading">登録中...</span>
        <span v-else>登録</span>
      </button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <p>
      すでにアカウントをお持ちですか？ <router-link to="/login">ログインはこちら</router-link>
    </p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoading: false, // ローディング状態
    };
  },
  methods: {
    async register() {
      this.isLoading = true;  // ローディング開始
      try {
        this.errorMessage = null;
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("登録成功:", userCredential.user);
        alert("登録が成功しました！");
        this.$router.push('/login'); // 登録後にログイン画面へ遷移
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("登録エラー:", error);
        // エラーコードに応じたメッセージを表示
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = "このメールアドレスはすでに登録されています。";
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage = "無効なメールアドレスです。";
        } else if (error.code === 'auth/weak-password') {
          this.errorMessage = "パスワードは6文字以上である必要があります。";
        } else {
          this.errorMessage = "予期しないエラーが発生しました。";
        }
      } finally {
        this.isLoading = false;  // ローディング終了
      }
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fafafa;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  border-color: #4CAF50; /* フォーカス時に緑色の枠線を追加 */
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

.error {
  color: red;
  margin-top: 10px;
}

.warning {
  color: orange;
  font-size: 0.8em;
}

p {
  text-align: center;
}

a {
  color: #4CAF50;
}
</style>