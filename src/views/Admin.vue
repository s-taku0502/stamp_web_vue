<template>
  <div class="admin">
    <h1>管理者画面</h1>
    <div v-if="contacts.length > 0">
      <h2>お問い合わせ内容</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <p><strong>名前:</strong> {{ contact.name }}</p>
          <p><strong>メールアドレス:</strong> {{ contact.email }}</p>
          <p><strong>お問い合わせの種類:</strong> {{ contact.inquiryType }}</p>
          <p><strong>メッセージ:</strong> {{ contact.message }}</p>
          <p><strong>日時:</strong> {{ contact.timestamp.toDate().toLocaleString() }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>お問い合わせ内容はありません。</p>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { checkAdminAndRedirect } from "@/utils/auth";

export default {
  name: "Admin",
  data() {
    return {
      contacts: []
    };
  },
  async created() {
    await checkAdminAndRedirect(this.$router);
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "contacts"));
    this.contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
</script>

<style scoped>
.admin {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>