<template>
  <div>
    <h1>Stores Page</h1>
    
    <!-- SearchBar コンポーネントのインポート -->
    <SearchBar :searchQuery="searchQuery" @update:searchQuery="updateSearchQuery" />

    <!-- 検索結果 -->
    <div v-if="filteredStores.length > 0">
      <div v-for="(store, index) in filteredStores" :key="index" class="store-info">
        <h2>{{ store.name }}</h2>
        <p><strong>住所:</strong> {{ store.address }}</p>
        <p><strong>営業時間:</strong> {{ store.hours }}</p>
        <p><strong>連絡先:</strong> {{ store.contact }}</p>
        <p><strong>特徴:</strong> {{ store.features }}</p>
        <p><strong>スタンプラリー特典:</strong> {{ store.reward }}</p>
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
          ...doc.data(),
          keywords: doc.data().keywords || [] // keywordsが存在しない場合は空配列
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
        const storeName = (store.name || "").toLowerCase();
        const storeAddress = (store.address || "").toLowerCase();
        const storeKeywords = (store.keywords || []).map(keyword => 
          keyword.toLowerCase()
        );
        
        return (
          storeName.includes(query) ||
          storeAddress.includes(query) ||
          storeKeywords.some(keyword => keyword.includes(query))
        );
      });
    }
  }
};
</script>

<style scoped>
.store-info {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
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
