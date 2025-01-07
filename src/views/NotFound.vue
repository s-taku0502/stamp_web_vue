<template>
    <!-- <div>
      <header>
        <nav class="navbar">
          <div class="logo">
            <img id="icon" src="@/assets/images/circle_app_icon.png" alt="アプリアイコン">
            <p>額地区スタンプらり～</p>
          </div>
          <!-- ナビゲーションリンク
          <ul class="nav-links" id="nav-links">
            <li><router-link to="/home">ホーム</router-link></li>
            <li><router-link to="/scan">スキャナー</router-link></li>
            <li><router-link to="/stamps">スタンプ</router-link></li>
            <li><router-link to="/coupons">クーポン</router-link></li>
            <li><router-link to="/stores">店舗情報</router-link></li>
            <li><router-link to="/contact">お問い合わせ</router-link></li>
          </ul>
        </nav>
      </header> -->
      <main>
        <h1>404 Not Found</h1>
        <p>お探しのページが見つかりませんでした。</p>
      </main>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  /* 基本リセット */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    color: #333;
    text-align: center;
    padding: 20px;
  }
  
  header {
    background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
    padding: 15px 25px;
    animation: gradientShift 8s infinite;
    background-size: 300% 300%;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .logo img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
  }
  
  .nav-links li {
    margin: 0 10px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  
  .nav-links a:hover {
    color: #f0a500;
  }
  
  main {
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
  }
  
  /* メディアクエリ */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
    }
  
    .nav-links {
      flex-direction: column;
      width: 100%;
    }
  
    .nav-links li {
      margin: 10px 0;
    }
  }
  </style>