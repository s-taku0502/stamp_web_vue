<template>
    <div id="Stamps">
      <div class="tabs">
        <button @click="currentTab = 'current'">Current Stamps</button>
        <button @click="currentTab = 'all'">All Stamps</button>
      </div>
      <div class="tab-content">
        <CurrentStamps v-if="currentTab === 'current'" :imageUrl="imageUrl" />
        <AllStamps v-if="currentTab === 'all'" />
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
        currentTab: 'current',
        imageUrl: '' // 初期値を設定
      };
    },
    methods: {
      setImageUrl(url) {
        this.imageUrl = url;
      }
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