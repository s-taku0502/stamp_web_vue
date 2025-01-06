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
        isLoading: false, // ローディング状態
      };
    },
    methods: {
      async login() {
        this.isLoading = true;  // ローディング開始
        try {
          this.errorMessage = null;
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log("ログイン成功:", userCredential.user);
          alert("ログインが成功しました！");
          this.$router.push('/home'); // ログイン成功後にホーム画面へ遷移
          this.email = "";
          this.password = "";
        } catch (error) {
          console.error("ログインエラー:", error);
          // エラーコードに応じたメッセージを表示
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
          this.isLoading = false;  // ローディング終了
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
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
  
  p {
    text-align: center;
  }
  
  a {
    color: #4CAF50;
  }
  </style>
  