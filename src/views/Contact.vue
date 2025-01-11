<template>
  <div>
    <h1>お問い合わせフォーム</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">名前</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" v-model="email" required />
      </div>
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
      <div v-if="inquiryType === 'パスワード再設定'">
        <label for="email">メールアドレス<span style="color: red;"> *</span><p>主催団体より連絡させていただく場合がございます。</p></label>
        <input type="email" id="email" name="email" placeholder="例）nuka@sample.com" required />
      </div>
      <div v-else-if="inquiryType === 'その他'">
        <label for="inquiry-details">お問い合わせ内容をお書きください。<span style="color: red;"> *</span></label>
        <p style="color: red;"><a href="https://www4.city.kanazawa.lg.jp/soshikikarasagasu/zeimuka/gyomuannai/2/6/4325.html" target="_blank">>>金沢市へのお問い合わせはこちら<<</a></p>
        <textarea id="inquiry-details" name="inquiry-details" rows="4" required></textarea>
        <label for="urgent">
          至急の内容の場合は☑を入れてください。
          <input type="checkbox" id="urgent" name="urgent" value="至急">
        </label>
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      inquiryType: "",
      message: ""
    };
  },
  methods: {
    async submitForm() {
      const db = getFirestore();
      try {
        await addDoc(collection(db, "contacts"), {
          name: this.name,
          email: this.email,
          inquiryType: this.inquiryType,
          message: this.message,
          timestamp: new Date(),
          visibleTo: ["app_creator", "org_123", "org_456"] // 両団体のIDを指定
        });
        alert("お問い合わせ内容が送信されました。");
        this.name = "";
        this.email = "";
        this.inquiryType = "";
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