<template>
  <div class="admin">
    <div class="header">
      <h1>管理者画面</h1>
      <button id="logout" @click="logout" class="logout-button">ログアウト</button>
    </div>
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <div v-if="currentTab === 'お問い合わせ内容'">
        <h2>お問い合わせ内容</h2>
        <div>
          <label for="filter">表示フィルター:</label>
          <select v-model="filter" @change="applyFilter">
            <option value="all">全て</option>
            <option value="unresolved">未対応</option>
            <option value="resolved">対応済み</option>
          </select>
        </div>
        <div v-if="filteredContacts.length > 0">
          <ul>
            <li v-for="contact in filteredContacts" :key="contact.id">
              <p><strong>名前:</strong> {{ contact.name }}</p>
              <p><strong>メールアドレス:</strong> {{ contact.email }}</p>
              <p><strong>お問い合わせの種類:</strong> {{ contact.inquiryType }}</p>
              <p><strong>メッセージ:</strong> {{ contact.message }}</p>
              <p><strong>日時:</strong> {{ contact.timestamp.toDate().toLocaleString() }}</p>
              <p><strong>対応状況:</strong> {{ contact.status }}</p>
              <p v-if="contact.resolvedBy">
                <strong>対応者:</strong> {{ contact.resolvedBy }}
              </p>
              <button
                v-if="contact.status !== 'resolved'"
                @click="markAsResolved(contact.id)"
              >
                対応済みにする
              </button>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>お問い合わせ内容はありません。</p>
        </div>
      </div>
      <div v-if="currentTab === 'お知らせ入力欄'">
        <h2>お知らせ入力欄</h2>
        <form @submit.prevent="addNews">
          <div>
            <label for="content">内容</label>
            <textarea id="content" v-model="newNews.content" required rows="5" cols="40"></textarea>
          </div>
          <div>
            <label for="endDate">終了日</label>
            <input type="date" id="endDate" v-model="newNews.endDate" required />
          </div>
          <div>
            <label for="organization">投稿団体</label>
            <input type="text" id="organization" v-model="newNews.organization" required />
          </div>
          <button type="submit">追加</button>
        </form>
        <ul>
          <li v-for="news in validNewsList" :key="news.id">
            <p><strong>内容:</strong> {{ news.content }}</p>
            <p><strong>終了日:</strong> {{ news.endDate.toDate().toLocaleDateString() }}</p>
            <p><strong>投稿団体:</strong> {{ news.organization }}</p>
            <button @click="editNews(news)">編集</button>
            <button @click="deleteNews(news.id)">削除</button>
          </li>
        </ul>
      </div>
      <div v-if="currentTab === 'マイページ'">
        <h2>マイアカウント情報</h2>
        <div class="profile-info" v-if="currentUser">
          <p><strong>ユーザー名:</strong> {{ currentUser.name }}</p>
          <p><strong>メールアドレス:</strong> {{ currentUser.email }}</p>
          <p v-if="currentUser.password"><strong>パスワード:</strong> {{ currentUser.password }}</p>
          <button @click="deleteUser(currentUser.uid)">アカウント削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut, deleteUser as firebaseDeleteUser } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { checkAdminAndRedirect } from "@/utils/auth";

export default {
  data() {
    return {
      tabs: ["お問い合わせ内容", "お知らせ入力欄", "マイページ"],
      currentTab: "お問い合わせ内容",
      contacts: [],
      filter: "unresolved",
      filteredContacts: [],
      currentUser: null,
      newNews: {
        content: "",
        endDate: "",
        organization: ""
      },
      newsList: []
    };
  },
  async created() {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      this.$router.push("/login");
      return;
    }

    await checkAdminAndRedirect(this.$router);
    const db = getFirestore();

    if (currentUser) {
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (userDoc.exists()) {
        this.currentUser = { uid: currentUser.uid, ...userDoc.data() };
      }
    }

    const querySnapshot = await getDocs(collection(db, "contacts"));
    this.contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.applyFilter();

    const newsSnapshot = await getDocs(collection(db, "news"));
    this.newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  computed: {
    validNewsList() {
      const now = new Date();
      return this.newsList.filter(news => news.endDate.toDate() >= now);
    }
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
    async addNews() {
      const db = getFirestore();
      const endDate = new Date(this.newNews.endDate);
      endDate.setDate(endDate.getDate() + 1); // 終了日を1日進める

      await addDoc(collection(db, "news"), {
        content: this.newNews.content,
        endDate: endDate,
        organization: this.newNews.organization
      });
      this.newNews = {
        content: "",
        endDate: "",
        organization: ""
      };
      const newsSnapshot = await getDocs(collection(db, "news"));
      this.newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async editNews(news) {
      const db = getFirestore();
      const newsRef = doc(db, "news", news.id);
      const newContent = prompt("内容を入力してください", news.content);
      const newEndDate = new Date(prompt("終了日を入力してください", news.endDate.toDate().toISOString().split('T')[0]));
      const newOrganization = prompt("投稿団体を入力してください", news.organization);

      if (newContent && newEndDate && newOrganization) {
        await updateDoc(newsRef, {
          content: newContent,
          endDate: newEndDate,
          organization: newOrganization
        });
        const newsSnapshot = await getDocs(collection(db, "news"));
        this.newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }
    },
    async deleteNews(newsId) {
      const db = getFirestore();
      await deleteDoc(doc(db, "news", newsId));
      this.newsList = this.newsList.filter(news => news.id !== newsId);
    },
    async deleteUser(uid) {
      const auth = getAuth();
      const db = getFirestore();
      try {
        // Firestoreからユーザードキュメントを削除
        await deleteDoc(doc(db, "users", uid));
        // Firebase Authenticationからユーザーを削除
        const user = await auth.getUser(uid);
        await firebaseDeleteUser(user);

        // ユーザー情報をクリア
        this.currentUser = null;
        alert("アカウントが削除されました");
        this.$router.push("/login");
      } catch (error) {
        alert("アカウントの削除に失敗しました: " + error.message);
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
* {
  text-align: center;
  align-items: center;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  margin: 0 auto;
  margin-left: 43%;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.tabs button.active {
  background-color: #4caf50;
  color: white;
}

.tab-content {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px; /* 角を丸くする */
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

.logout-button {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
