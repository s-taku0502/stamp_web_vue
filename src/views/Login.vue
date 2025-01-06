<template>
  <div class="login">
    <h1>ログイン画面</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" :disabled="isLoading">
        <span v-if="isLoading">ログイン中...</span>
        <span v-else>ログイン</span>
      </button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <p>
      アカウントをお持ちでない場合は、<router-link to="/register">登録はこちら</router-link>
    </p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      try {
        this.errorMessage = null;
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log("ログイン成功:", userCredential.user);
        alert("ログインが成功しました！");
        // 必要であればセッション管理にユーザー情報を格納
        this.$router.push('/home');
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("ログインエラー:", error);
        if (error.code === 'auth/user-not-found') {
          this.errorMessage = "このメールアドレスのユーザーは見つかりません。";
        } else if (error.code === 'auth/wrong-password') {
          this.errorMessage = "パスワードが間違っています。";
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage = "無効なメールアドレスです。";
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
