<template>
  <div id="Stamps">
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
      <div v-if="currentTab === '期間中のスタンプ'">
        <CurrentStamps />
      </div>
      <div v-if="currentTab === 'これまでの含めてすべての期間のスタンプ'">
        <AllStamps />
      </div>
    </div>
  </div>
</template>

<script>
import CurrentStamps from '@/views/CurrentStamps.vue';
import AllStamps from '@/views/AllStamps.vue';

export default {
  components: {
    CurrentStamps,
    AllStamps
  },
  data() {
    return {
      tabs: ['期間中のスタンプ', 'これまでの含めてすべての期間のスタンプ'],
      currentTab: '期間中のスタンプ'
    };
  }
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
</style>