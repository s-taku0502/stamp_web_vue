<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="logo">
          <img id="icon" src="./src/assets/images/circle_app_icon.png" alt="Logo">
          <p>額地区スタンプらり～</p>
        </div>
        <div class="menu-toggle" ref="menuToggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav-links" ref="navLinks" :class="{'active': isMenuActive}">
          <li><router-link to="/home">ホーム</router-link></li>
          <li><router-link to="/scan">スキャナー</router-link></li>
          <li><router-link to="/stamps">スタンプ</router-link></li>
          <li><router-link to="/coupons">クーポン</router-link></li>
          <li><router-link to="/stores">店舗情報</router-link></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      こちらは額地区デジタルスタンプらり～のホームページです。
    </main>
    <footer>
      <div class="footer">
        <p>© 2024-2025 額地区スタンプらり～</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false, // メニューの開閉状態を管理
    };
  },
  methods: {
    // メニューを開閉するメソッド
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    // メニューアイテムがクリックされた時にメニューを閉じる
    closeMenu() {
      this.isMenuActive = false;
    },
  },
  mounted() {
    // メニューアイテムのクリックイベントを追加
    const navItems = this.$refs.navLinks.querySelectorAll("li");

    navItems.forEach((item) => {
      item.addEventListener("click", this.closeMenu);
    });
  },
  beforeDestroy() {
    // コンポーネントが破棄される際にイベントリスナーをクリーンアップ
    const navItems = this.$refs.navLinks.querySelectorAll("li");

    navItems.forEach((item) => {
      item.removeEventListener("click", this.closeMenu);
    });
  },
};
</script>

<style scoped>
@charset "utf-8";
main {
  text-align: center;
}

/* 基本リセット */
/* ヘッダーとナビゲーションバー */
header {
  background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
  padding: auto;
  animation: gradientShift 8s infinite;
  background-size: 300% 300%;
}

header .p {
  margin: 0;
  padding: 0;
  color: #000;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 25px;
}

.logo img {
  width: 50px; /* 横幅を50pxに設定 */
  height: auto; /* 縦横比を保ちながら自動調整 */
  object-fit: contain; /* 必要に応じて画像を収める方法を指定 */
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

/* ハンバーガーメニューアイコン */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 4px 0;
}

/* ハンバーガーメニューの背景色 */
.nav-links.active {
  background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-links.active li {
  margin: 20px 0;
}

li now {
  background-color: transparent; /* 背景を透明に */
  color: #f0a500; /* テキストの色をオレンジに */
  padding: auto;
  border: 2px solid #f0a500; /* 枠をオレンジ色に */
  border-radius: 5px;
  display: inline-block; /* インラインブロック要素にする */
}

li now a {
  color: #f0a500; /* リンクのテキストの色をオレンジに */
  text-decoration: none; /* リンクの下線を削除 */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 全体の高さを確保 */
}

main {
  flex: 1; /* メインコンテンツ部分を伸縮可能に */
}

.footer {
  text-align: center;
  background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
  padding: 10px 0; /* 高さ調整 */
  color: #000;
}

/* メディアクエリ */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
