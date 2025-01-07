<template>
  <div class="register" id="register">
    <h1>登録画面</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
        <p v-if="password && password.length > 0 && password.length < 6" class="warning">
          6文字以上のパスワードを入力してください。
        </p>
      </div>

      <button type="submit" :disabled="isLoading || password.length < 6">
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

<style scoped>
#register {
  margin-bottom: 10px;
  text-align: center;
}

div {
  margin-bottom: 10px;
}
</style>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    async register() {
      this.isLoading = true;
      try {
        this.errorMessage = null;
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("登録成功:", userCredential.user);
        alert("登録が成功しました！");
        // 必要であればFirestoreなどにデータを保存
        this.$router.push('/login');
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("登録エラー:", error);
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
        this.isLoading = false;
      }
    },
  },
};
</script>
