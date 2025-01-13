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
          <button v-if="contact.status !== 'resolved'" @click="markAsResolved(contact.id)">対応済みにする</button>
        </li>
      </ul>
    </div>
    
    <div v-else>
      <p>お問い合わせ内容はありません。</p>
    </div>
    <div>
      <h2>マイアカウント情報</h2>
      <div v-if="currentUser">
        <p><strong>名前:</strong> {{ currentUser.name }}</p>
        <p><strong>メールアドレス:</strong> {{ currentUser.email }}</p>
        <p v-if="currentUser.password"><strong>パスワード:</strong> {{ currentUser.password }}</p>
        <button @click="deleteUser(currentUser.uid)">アカウント削除</button>
      </div>
    </div>

    <!-- <div> // 重要なので残す
      <h2>ユーザー管理</h2>
      <ul>
        <li v-for="user in users" :key="user.uid">
          <p><strong>名前:</strong> {{ user.name }}</p>
          <p><strong>メールアドレス:</strong> {{ user.email }}</p>
          <p v-if="user.password"><strong>パスワード:</strong> {{ user.password }}</p>
          <button @click="deleteUser(user.uid)">アカウント削除</button>
        </li>
      </ul>
    </div> -->

    <button id="logout" @click="logout">ログアウト</button>
    <button @click="deleteAccount" class="delete-button">アカウント削除</button>
  </div>
</template>

<script>
import { getAuth, signOut, deleteUser as firebaseDeleteUser } from "firebase/auth";
import { getFirestore, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { checkAdminAndRedirect } from "@/utils/auth";

export default {
  name: "Admin",
  data() {
    return {
      contacts: [],
      filter: "unresolved",
      filteredContacts: [],
      users: []
    };
  },
  async created() {
    await checkAdminAndRedirect(this.$router);
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "contacts"));
    this.contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.applyFilter();

    // ユーザーリストを取得
    const usersSnapshot = await getDocs(collection(db, "users"));
    this.users = usersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
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
    // async deleteUser(uid) {
    //   const auth = getAuth();
    //   const db = getFirestore();
    //   try {
    //     // Firestoreからユーザードキュメントを削除
    //     await deleteDoc(doc(db, "users", uid));
    //     // Firebase Authenticationからユーザーを削除
    //     const user = await auth.getUser(uid);
    //     await firebaseDeleteUser(user);

    //     // ユーザーリストを更新
    //     this.users = this.users.filter(user => user.uid !== uid);
    //     alert("アカウントが削除されました");
    //   } catch (error) {
    //     alert("アカウントの削除に失敗しました: " + error.message);
    //   }
    // },

    async deleteAccount() {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const db = getFirestore();
          // Firestoreからユーザードキュメントを削除
          await deleteDoc(doc(db, "users", currentUser.uid));
          // Firebase Authenticationからユーザーを削除
          await deleteUser(currentUser);
          alert("アカウントが削除されました");
          this.$router.push("/login");
        } catch (error) {
          alert("アカウントの削除に失敗しました: " + error.message);
        }
      }
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

button {
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

#logout {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#logout:hover {
  background-color: #d32f2f;
}
</style>