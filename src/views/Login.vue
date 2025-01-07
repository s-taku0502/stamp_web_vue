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
      アカウントをお持ちでない場合は、<router-link to="/register">こちら</router-link>
      より登録してください。
    </p>
  </div>
</template>

<style>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.login h1 {
  text-align: center;
}

.login form {
  display: flex;
  flex-direction: column;
}

.login form div {
  margin-bottom: 10px;
}

.login form label {
  font-weight: bold;
}

.login form input {
  padding: 5px;
  font-size: 1rem;
}

.login form button {
  padding: 10px;
  font-size: 1rem;
  background-color: #f0a500;
  color: #fff;
  border: none;
  cursor: pointer;
}

.login form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

p,
.login p {
  max-width: "device-width";
  margin-top: 10px;
  text-align: center;
}

.login p a {
  color: #f0a500;
}

.login p a:hover {
  text-decoration: underline;
}

.login p.error,
.login p.warning{
  color: red;
  text-align: center;
}

.login p.success {
  color: green;
  text-align: center;
}

.login p.info {
  color: blue;
  text-align: center;
}
</style>

<script>
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";

  export default {
      async login() {
      this.isLoading = true;
      try {
        this.errorMessage = null;
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log("ログイン成功:", userCredential.user);
        alert("ログインが成功しました！");

        // トークンをローカルストレージに保存
        const token = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', token);

        this.$router.push('/home');
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("ログインエラー:", error);
        this.handleAuthError(error);
      } finally {
        this.isLoading = false;
      }
    },
    handleAuthError(error) {
      if (error.code === 'auth/user-not-found') {
        this.errorMessage = "このメールアドレスのユーザーは見つかりません。";
      } else if (error.code === 'auth/wrong-password') {
        this.errorMessage = "パスワードが間違っています。";
      } else if (error.code === 'auth/invalid-email') {
        this.errorMessage = "無効なメールアドレスです。";
      } else if(password.length < 6){
        this.errorMessage = "パスワードは6文字以上で入力してください。";
      }else if(error.code === 'auth/too-many-requests'){
        this.errorMessage = "アクセスが制限されています。しばらくしてから再度お試しください。";
      }else{
        this.errorMessage = "予期しないエラーが発生しました。";
      }
    }
  }
</script>
