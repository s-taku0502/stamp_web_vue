<template>
  <div id="Stamps">
    <div class="tabs">
      <!-- <button @click="currentTab = 'current'">開催期間中に取得したスタンプ</button> -->
      <!-- <button @click="currentTab = 'all'">過去に取得したスタンプ</button> -->
    </div>
    <div class="tab-content">
      <CurrentStamps v-if="currentTab === 'current'" />
      <!-- <AllStamps v-if="currentTab === 'all'" /> -->
    </div>
  </div>
</template>

<script>
import CurrentStamps from '@/views/CurrentStamps.vue';
// import AllStamps from '@/views/AllStamps.vue';

export default {
  components: {
    CurrentStamps,
    // AllStamps
  },
  data() {
    return {
      currentTab: 'current',
    };
  },
};
</script>

<style scoped>
#Stamps {
  text-align: center;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  margin: 0 5px;
}

.tabs button.active {
  background-color: #4caf50;
  color: white;
}

.tab-content {
  display: flex;
  justify-content: center;
}
</style>