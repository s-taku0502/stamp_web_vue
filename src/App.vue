<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">
          <img id="icon" src="/assets/images/circle_app_icon.png" alt="Logo" />
          <p>額地区スタンプらり～</p>
        </div>
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav-links" ref="navLinks" :class="{ active: isMenuActive }">
          <li><router-link to="/">マイページ</router-link></li>
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
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer">
        <p>© 2024-2025 額地区スタンプらり～</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const isMenuActive = ref(false);
    const navLinks = ref(null);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const closeMenu = () => {
      isMenuActive.value = false;
    };

    onMounted(() => {
      const navItems = navLinks.value.querySelectorAll("li");
      navItems.forEach((item) => {
        item.addEventListener("click", closeMenu);
      });
    });

    onBeforeUnmount(() => {
      const navItems = navLinks.value.querySelectorAll("li");
      navItems.forEach((item) => {
        item.removeEventListener("click", closeMenu);
      });
    });

    return {
      isMenuActive,
      navLinks,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
/* CSSはそのまま維持 */
@charset "utf-8";
/* 省略 */

/* 基本リセット */
/* 全てのフォントをリセット */
html {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 16px;
}

/* ヘッダーとナビゲーションバー */
header {
  background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
  padding: 0;
  width: 100%; /* 横幅を100%に設定 */
  box-sizing: border-box; /* ボックスのサイズにパディングを含める */
  z-index: 1000; /* z-indexを追加 */
  position: relative; /* z-indexを有効にするためにpositionを追加 */
}

header .p {
  margin: 0;
  padding: 0;
  color: #000;
  box-sizing: border-box;
}

.navbar {
  position: relative;
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
  pointer-events: auto;
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
  margin: 4px;
  margin-right: 10px;
  margin-left: 3px;
}

/* ハンバーガーメニューの背景色 */
.nav-links.active {
  background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3);
  position: absolute;
  top: 8px;
  width: 80%;
  /* height: calc(100vh - 60px); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1001; /* 他の要素より前面に */
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
  color: #f0a500; /* linkのテキストの色をオレンジに */
  text-decoration: none; /* linkの下線を削除 */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  text-align: center;
  /* background: linear-gradient(90deg, #c7f1fb, #d7f7ff, #94d2f3); */
  background-color: #333;
  padding: 0 0;
  color: #000;
  width: 100%; /* 横幅を100%に設定 */
  box-sizing: border-box; /* ボックスのサイズにパディングを含める */
}

.footer p {
  margin: 0;
  padding: 5px 0;
  color: #fff;
  box-sizing: border-box;
}

main {
  flex: 1; /* メインコンテンツ部分を伸縮可能に */
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

a {
  color: #000; /* linkの色 */
  text-decoration: none; /* 下線を削除 */
}

a:hover {
  text-decoration: underline; /* ホバー時に下線を追加 */
}

</style>