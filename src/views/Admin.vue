<template>
  <div class="admin">
    <h1>管理者画面</h1>
    <div>
      <label for="filter">表示フィルター:</label>
      <select v-model="filter" @change="applyFilter">
        <option value="all">全て</option>
        <option value="unresolved">未対応</option>
        <option value="resolved">対応済み</option>
      </select>
    </div>
    <div v-if="filteredContacts.length > 0">
      <h2>お問い合わせ内容</h2>
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <p><strong>名前:</strong> {{ contact.name }}</p>
          <p><strong>メールアドレス:</strong> {{ contact.email }}</p>
          <p><strong>お問い合わせの種類:</strong> {{ contact.inquiryType }}</p>
          <p><strong>メッセージ:</strong> {{ contact.message }}</p>
          <p><strong>日時:</strong> {{ contact.timestamp.toDate().toLocaleString() }}</p>
          <p><strong>対応状況:</strong> {{ contact.status }}</p>
          <p v-if="contact.resolvedBy"><strong>対応者:</strong> {{ contact.resolvedBy }}</p>
          <button id="stauts" v-if="contact.status !== 'resolved'" @click="markAsResolved(contact.id)">対応済みにする</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>お問い合わせ内容はありません。</p>
    </div>
    <button id="logout" @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { checkAdminAndRedirect } from "@/utils/auth";

export default {
  name: "Admin",
  data() {
    return {
      contacts: [],
      filter: "unresolved",
      filteredContacts: []
    };
  },
  async created() {
    await checkAdminAndRedirect(this.$router);
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "contacts"));
    this.contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.applyFilter();
  },
  methods: {
    applyFilter() {
      if (this.filter === "all") {
        this.filteredContacts = this.contacts;
      } else if (this.filter === "unresolved") {
        this.filteredContacts = this.contacts.filter(contact => contact.status !== "resolved");
      } else if (this.filter === "resolved") {
        this.filteredContacts = this.contacts.filter(contact => contact.status === "resolved");
      }
    },
    async markAsResolved(contactId) {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        alert("ユーザーが認証されていません");
        return;
      }

      const db = getFirestore();
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, { status: "resolved", resolvedBy: currentUser.displayName });
      const contact = this.contacts.find(contact => contact.id === contactId);
      if (contact) {
        contact.status = "resolved";
        contact.resolvedBy = currentUser.displayName;
      }
      this.applyFilter();
    },
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.$router.push("/login");
      } catch (error) {
        alert("ログアウトに失敗しました: " + error.message);
      }
    }
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

#logout {
  padding: 10px 20px;
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