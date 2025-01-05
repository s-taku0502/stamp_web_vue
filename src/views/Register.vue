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
        </div>
        <button type="submit">登録</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
      };
    },
    methods: {
      async register() {
        try {
          this.errorMessage = null;
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log("登録成功:", userCredential.user);
          alert("登録が成功しました！");
          this.email = "";
          this.password = "";
        } catch (error) {
          console.error("登録エラー:", error);
          this.errorMessage = error.message;
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
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  