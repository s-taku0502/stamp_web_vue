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
        <form @submit.prevent="saveNews">
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
          <button type="submit">{{ isEditing ? '更新' : '追加' }}</button>
        </form>
        <ul>
          <li v-for="news in validNewsList" :key="news.id">
            <p><strong>内容:</strong> {{ news.content }}</p>
            <p><strong>終了日:</strong> {{ formatDate(news.endDate) }}</p>
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
      newsList: [],
      isEditing: false,
      editingNewsId: null
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
    this.newsList = newsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        endDate: data.endDate.toDate ? data.endDate.toDate() : new Date(data.endDate)
      };
    });
  },
  computed: {
    validNewsList() {
      const now = new Date();
      return this.newsList.filter(news => {
        const endDate = news.endDate instanceof Date ? news.endDate : new Date(news.endDate);
        endDate.setHours(23, 59, 59, 999); // 終了日をその日の23:59:59に設定
        return endDate >= now;
      });
    }
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    applyFilter() {
      if (this.filter === "all") {
        this.filteredContacts = this.contacts;
      } else {
        this.filteredContacts = this.contacts.filter(contact => contact.status === this.filter);
      }
    },
    markAsResolved(contactId) {
      const db = getFirestore();
      const contactRef = doc(db, "contacts", contactId);
      updateDoc(contactRef, { status: "resolved" }).then(() => {
        this.applyFilter();
      });
    },
    saveNews() {
      const db = getFirestore();
      if (this.isEditing) {
        const newsRef = doc(db, "news", this.editingNewsId);
        updateDoc(newsRef, {
          content: this.newNews.content,
          endDate: this.newNews.endDate,
          organization: this.newNews.organization
        }).then(() => {
          this.resetForm();
        });
      } else {
        addDoc(collection(db, "news"), {
          content: this.newNews.content,
          endDate: this.newNews.endDate,
          organization: this.newNews.organization
        }).then(() => {
          this.resetForm();
        });
      }
    },
    editNews(news) {
      this.newNews = { ...news };
      this.isEditing = true;
      this.editingNewsId = news.id;
    },
    deleteNews(newsId) {
      const db = getFirestore();
      const newsRef = doc(db, "news", newsId);
      deleteDoc(newsRef).then(() => {
        this.newsList = this.newsList.filter(news => news.id !== newsId);
      });
    },
    deleteUser(uid) {
      const auth = getAuth();
      const db = getFirestore();
      firebaseDeleteUser(auth.currentUser)
        .then(() => {
          const userRef = doc(db, "users", uid);
          deleteDoc(userRef);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    resetForm() {
      this.newNews = {
        content: "",
        endDate: "",
        organization: ""
      };
      this.isEditing = false;
      this.editingNewsId = null;
    },
    formatDate(date) {
      return date instanceof Date ? date.toLocaleDateString() : new Date(date).toLocaleDateString();
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
  background-color: #cfcfcf;
  color: #000;
  /* border: #000; */
  /* border-color: black; */
  font: bold;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
