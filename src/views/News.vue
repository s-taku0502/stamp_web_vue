<template>
  <main class="info-box">
    <h3 class="title">お知らせ</h3>
    <br>
    <div v-if="validNewsList.length > 0">
      <div class="news-box">
        <div v-for="news in validNewsList" :key="news.id" class="news-item">
          <p class="content">{{ news.content }}</p>
          <p class="organization">投稿団体: {{ news.organization }}</p>
          <p class="period">終了日: {{ formatDate(news.endDate) }}</p>
        </div>
      </div>
    </div>
    <p v-else>最新の情報はありません。</p>
  </main>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  name: "LatestInfo",
  data() {
    return {
      newsList: []
    };
  },
  async created() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "news"));
    this.newsList = querySnapshot.docs.map(doc => {
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
      // 終了日がその日の24時を過ぎていないニュースのみ表示
      return this.newsList.filter(news => {
        const endDate = news.endDate instanceof Date ? news.endDate : new Date(news.endDate);
        endDate.setHours(23, 59, 59, 999); // 終了日をその日の23:59:59に設定
        return endDate >= now;
      });
    }
  },
  methods: {
    formatDate(date) {
      return date instanceof Date ? date.toLocaleDateString() : new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>

.info-box {
  align-items: center;
  border: 1px solid #444;
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  border-radius: 10px; /* 角を丸くする */
  padding-top: 20px; /* 上部にスペースを追加 */
  z-index: 1; /* z-indexを追加 */
}

.news-box {
  align-items: center;
  border: 1px solid #444;
  width: 75%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  border-radius: 10px; /* 角を丸くする */
  padding: 20px; /* 内部にスペースを追加 */
  z-index: 1; /* z-indexを追加 */
}

.title {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 0 10px;
  font-weight: bold;
}

.news-item {
  margin: 20px 0;
}

.content {
  text-align: center;
}

.organization, .period {
  text-align: center;
  font-size: 0.9em;
  color: #666;
}
</style>
