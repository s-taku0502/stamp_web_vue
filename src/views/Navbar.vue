<template>
    <header>
      <nav class="navbar">
        <div class="logo">
          <img id="icon" src="./images/circle_app_icon.png" alt="Logo">
          <p>額地区スタンプらり～</p>
        </div>
        <div class="menu-toggle" id="menu-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">ホーム</router-link></li>
          <li><router-link to="/scan">スキャナー</router-link></li>
          <li><router-link to="/stamps">スタンプ</router-link></li>
          <li><router-link to="/coupons">クーポン</router-link></li>
          <li><router-link to="/stores">店舗情報</router-link></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  /* 必要に応じてスタイルを記述 */
  </style>
  