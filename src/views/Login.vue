<template>
  <div class="login">
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" v-model="email" required autocomplete="email" />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>

    <!-- パスワードを忘れた場合 -->
    <p class="full-width">
      パスワードを忘れた場合は、<router-link to="/contact">こちら</router-link>
      より再設定の申請をしてください。（再設定メールの送信に時間がかかる場合があります。）
    </p>

    <p class="full-width">
      アカウントをお持ちでない場合は、<router-link to="/register">こちら</router-link>
      より登録してください。
    </p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/home"); // ログイン成功後にホームページにリダイレクト
      } catch (error) {
        alert("ログインに失敗しました: " + error.message);
      }
    }
  }
};
</script>

<style scoped>
* {
  text-align: center;
}

.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.login h1 {
  text-align: center;
}

.full-width {
  width: 100%;
}

form div {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
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
