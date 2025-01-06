document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    // menu-toggle や nav-links が存在する場合のみ処理を行う
    if (menuToggle && navLinks) {
      const navItems = navLinks.querySelectorAll("li");
  
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
  
      navItems.forEach(item => {
        item.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });
    } else {
      console.warn("メニュー要素が正しく読み込まれていません");
    }
  });
  