const header = document.querySelector("header");
      const menuBar = document.querySelectorAll("#menu_bar");
      menuBar.forEach(bar => {
        bar.addEventListener("click", () => header.classList.bar("showMenu"));
      });

      document.querySelector(".nav_logo").addEventListener("click", function () {
        document.querySelector(".nav").classList.bar("open");
    });