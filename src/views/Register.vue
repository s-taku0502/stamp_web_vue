<template>
  <div class="register" id="register">
    <h1>ユーザー登録</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required autocomplete="email" />
      </div>

      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required autocomplete="new-password" />
        <p v-if="password && password.length > 0 && password.length < 6" class="warning">
          6文字以上のパスワードを入力してください。
        </p>
      </div>

      <div>
        <label for="name">名前</label>
        <input type="text" v-model="name" required />
      </div>

      <button type="submit" :disabled="isLoading || password.length < 6">
        <span v-if="isLoading">登録中...</span>
        <span v-else>登録</span>
      </button>
    </form>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

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

.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.register h1 {
  text-align: center;
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

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    async register() {
      const auth = getAuth();
      const db = getFirestore();
      this.isLoading = true;
      try {
        this.errorMessage = null;
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Firestoreにユーザー情報を保存
        await setDoc(doc(db, "users", user.uid), {
          email: this.email,
          name: this.name
        });

        this.$router.push("/home"); // 登録成功後にホームページにリダイレクト
        this.email = "";
        this.password = "";
        this.name = "";
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
