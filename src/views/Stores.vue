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
      <p>店舗が見つかりませんでした。</p>
    </div>
  </div>
</template>

<script>
// SearchBar コンポーネントをインポート
import SearchBar from './SearchBar.vue';

export default {
  name: "Stores",
  components: {
    SearchBar
  },
  data() {
    return {
      searchQuery: "", // 検索用のクエリ
      stores: [
        {
          name: "店舗A",
          address: "東京都渋谷区1-2-3",
          hours: "10:00～18:00（定休日：水曜日）",
          contact: "03-1234-5678",
          features: "オリジナル商品を取り扱い",
          reward: "スタンプ1つで10%割引",
          keywords: ["てんぽえー", "てんぽA", "とうきょうとしぶやく"]
        },
        {
          name: "店舗B",
          address: "大阪府大阪市北区4-5-6",
          hours: "9:00～17:00（定休日：火曜日）",
          contact: "06-9876-5432",
          features: "地元の特産品を販売",
          reward: "スタンプ1つで無料ドリンク",
          keywords: ["おおさか", "おおさかしきた"]
        }
      ]
    };
  },
  computed: {
    filteredStores() {
      // searchQuery が文字列でない場合、空文字列に変換
      const query = (this.searchQuery || "").toLowerCase();
      
      if (query === "") {
        return this.stores;
      }
      
      // 店舗名または住所、さらにキーワード（部分一致）で検索
      return this.stores.filter(store => {
        const storeName = store.name.toLowerCase();
        const storeAddress = store.address.toLowerCase();
        const storeKeywords = store.keywords.map(keyword => keyword.toLowerCase());
        
        // 店舗名、住所、キーワードに部分一致する場合
        return (
          storeName.includes(query) ||
          storeAddress.includes(query) ||
          storeKeywords.some(keyword => keyword.includes(query))
        );
      });
    }
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query;
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
  color: #333;
}

.store-info p {
  margin: 5px 0;
  font-size: 1rem;
}

p {
  color: red; /* エラーメッセージを目立たせる */
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
