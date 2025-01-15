<template>
    <main class="info-box">
      <h3 class="title">お知らせ</h3>
      <p class="content">最新の情報をお届けします。</p>
    </main>
  </template>
  
  <script>
  export default {
    name: "LatestInfo",
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
  
  .content {
    margin: 50px 20px;
    text-align: center;
  }
  </style>
  