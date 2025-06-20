<template>
  <div>
    <h1>お問い合わせフォーム</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="inquiryType">お問い合わせの種類</label>
        <select v-model="inquiryType" required>
          <option value="" disabled selected>選択</option>
          <option value="パスワード再設定">パスワードを忘れた</option>
          <option value="スタンプらり～情報">スタンプらり～に関するお問い合わせ</option>
          <option value="出店情報">会員の出店について</option>
          <option value="活動情報">活動に関するお問い合わせ</option>
          <option value="個人情報">個人情報に関するお問い合わせ</option>
          <option value="意見・要望">当ウェブサイトへのご意見・ご要望</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div v-if="inquiryType !== 'パスワード再設定'">
        <div>
          <label for="name">ユーザー名</label>
          <input 
            type="text" 
            v-model="name" 
            required 
            :disabled="isLoggedIn"
            :class="{ 'disabled-input': isLoggedIn }"
          />
        </div>
      </div>

      <div>
        <label for="email">メールアドレス</label>
        <a v-if="!isLoggedIn" style="color: red;">登録したメールアドレスを入力してください。</a>
        <input 
          type="email" 
          v-model="email" 
          required 
          :disabled="isLoggedIn"
          :class="{ 'disabled-input': isLoggedIn }"
        />
      </div>

      <div v-if="inquiryType !== 'パスワード再設定'">
        <label for="message">お問い合わせ内容</label>
        <div v-if="inquiryType === 'その他'">
          <a href="https://www4.city.kanazawa.lg.jp/soshikikarasagasu/zeimuka/gyomuannai/2/6/4325.html"> 金沢市へのお問い合わせはこちら </a>
        </div>
        <textarea v-model="message" rows="4" required></textarea>
      </div>

      <button type="submit"><submit>送信</submit></button>
    </form>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, getDoc, addDoc, collection } from "firebase/firestore";

export default {
  data() {
    return {
      inquiryType: "",
      name: "",
      email: "",
      message: "",
      isLoggedIn: false // ログイン状態を追加
    };
  },
  async created() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      this.isLoggedIn = true; // ログイン状態を設定
      const db = getFirestore();
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        this.name = userData.name;
        this.email = userData.email;
      } else {
        console.error("ユーザードキュメントが存在しません");
      }
    }
  },
  methods: {
    async submitForm() {
      const db = getFirestore();
      const auth = getAuth();
      try {
        if (this.inquiryType === "パスワード再設定") {
          await sendPasswordResetEmail(auth, this.email);
          alert("パスワード再設定メールが送信されました。");
        } else {
          await addDoc(collection(db, "contacts"), {
            inquiryType: this.inquiryType,
            name: this.name,
            email: this.email,
            message: this.message,
            timestamp: new Date(),
            visibleTo: ["app_creator", "org_01", "org_02"] // 両団体のIDを指定
          });
          alert("お問い合わせ内容が送信されました。");
        }
      } catch (error) {
        if (this.inquiryType === "パスワード再設定" && error.code === 'auth/user-not-found') {
          alert("メールアドレスに不備があります");
        } else {
          alert("送信中にエラーが発生しました: " + error.message);
        }
      }
      this.inquiryType = "";
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  max-inline-size: 600px;
  margin: auto;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
}

label {
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  font-size: 15px;
  padding: 10px 25px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.disabled-input {
  background-color: #f5f5f5;
  color: #666;
  cursor: not-allowed;
  border: 1px solid #ddd;
  opacity: 0.7;
}

input:disabled {
  -webkit-text-fill-color: #666; /* Safari対応 */
  color: #666;
}
</style>
