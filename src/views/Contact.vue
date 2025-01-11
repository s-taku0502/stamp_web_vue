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

      <div>
        <label for="name">ユーザー名</label>
        <input type="text" v-model="name" required />
      </div>

      <div>
        <label for="email">メールアドレス</label>
        <input type="email" v-model="email" required />
      </div>

      <div v-if="inquiryType !== 'パスワード再設定'">
        <label for="message">お問い合わせ内容</label>
        <textarea v-model="message" rows="4" required></textarea>
      </div>

      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, addDoc, collection } from "firebase/firestore";

export default {
  data() {
    return {
      inquiryType: "",
      name: "",
      email: "",
      message: ""
    };
  },
  async created() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
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
      try {
        await addDoc(collection(db, "contacts"), {
          inquiryType: this.inquiryType,
          name: this.name,
          email: this.email,
          message: this.message,
          timestamp: new Date(),
          visibleTo: ["app_creator", "org_01", "org_02"] // 両団体のIDを指定
        });
        alert("お問い合わせ内容が送信されました。");
        this.inquiryType = "";
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        alert("送信中にエラーが発生しました: " + error.message);
      }
    }
  }
};
</script>

<style scoped>
attendance {
  font-size: 12px;
  text-align: start;
}

form {
  max-inline-size: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

label {
  display: block;
  margin-block-end: 8px;
  font-weight: bold;
}

label .p {
  font-weight: lighter;
}

select, input, textarea {
  inline-size: 100%;
  padding: 10px;
  margin-block-end: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  resize: none;
}

input[type="checkbox"] {
  margin-inline-end: 8px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-block-start: -15px;
  margin-block-end: 20px;
}

button {
  background-color: #6200ea;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #4500b0;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.urgent-button {
  align-self: flex-end;
}
</style>