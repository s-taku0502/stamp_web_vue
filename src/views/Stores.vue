<template>
  <div>
    <h1>Stores Page</h1>
    
    <!-- SearchBar コンポーネントのインポート -->
    <SearchBar :searchQuery="searchQuery" @update:searchQuery="updateSearchQuery" />

    <!-- 検索結果 -->
    <div v-if="filteredStores.length > 0">
      <div v-for="store in filteredStores" :key="store.id" class="store-info">
        <img v-if="store.imageUrl" :src="store.imageUrl" :alt="store.name" class="store-image">
        <h2>{{ store.name }}</h2>
        <p><strong>住所:</strong> {{ store.address }}</p>
        <p><strong>業種:</strong> {{ store.industry }}</p>
        <p><strong>特徴:</strong> {{ store.company_features }}</p>
        <p><strong>説明:</strong> {{ store.description }}</p>
        <p v-if="store.website_url">
          <strong>Webサイト:</strong> 
          <a :href="store.website_url" target="_blank" rel="noopener noreferrer">
            {{ store.website_url }}
          </a>
        </p>
      </div>
    </div>
    
    <!-- 店舗が見つからない場合のエラーメッセージ -->
    <div v-else>
      <p class="error-message">店舗が見つかりませんでした。</p>
    </div>
  </div>
</template>

<script>
// SearchBar コンポーネントをインポート
import SearchBar from './SearchBar.vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase'; // Firebaseの設定ファイルからdbをインポート

export default {
  name: "Stores",
  components: {
    SearchBar
  },
  data() {
    return {
      searchQuery: "",
      stores: []  // 空の配列として初期化
    };
  },
  created() {
    // コンポーネント作成時にFirestoreからデータを取得
    this.fetchStores();
  },
  methods: {
    async fetchStores() {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        this.stores = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    }
  },
  computed: {
    filteredStores() {
      const query = (this.searchQuery || "").toLowerCase();
      
      if (query === "") {
        return this.stores;
      }
      
      return this.stores.filter(store => {
        return (
          (store.name || "").toLowerCase().includes(query) ||
          (store.address || "").toLowerCase().includes(query) ||
          (store.industry || "").toLowerCase().includes(query) ||
          (store.description || "").toLowerCase().includes(query)
        );
      });
    }
  }
};
</script>

<style scoped>
.store-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
}

.store-info {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.store-info h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333; /* 見出しの色を濃いグレーに */
}

.store-info p {
  margin: 5px 0;
  font-size: 1rem;
  color: #000; /* 本文のテキストを黒に */
}

.store-info a {
  color: #2196F3;
  text-decoration: none;
}

.store-info a:hover {
  text-decoration: underline;
}

/* エラーメッセージ用のスタイルを修正 */
div > p {
  color: #000; /* 通常のテキストを黒に */
}

/* エラーメッセージ特有のスタイル */
.error-message {
  color: #d32f2f; /* エラーメッセージは赤色を維持 */
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
