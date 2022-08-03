// Selectors
const menuToggleButton = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const menuListItems = document.querySelectorAll(".menu-item");
const heroName = document.querySelector(".hero-name");

// State
let isMenuOpen = false;
let isDarkMode = false;

// Functions
menuToggleButton.addEventListener("click", () => {
  menu.classList.toggle("menu-expanded");
  menuToggleButton.classList.toggle("open");
  if (menu.classList.contains("menu-expanded")) {
    menuList.classList.remove("menu-list__hidden");
    menuList.classList.add("menu-list__expanded");
    menuListItems.forEach((item) => {
      item.classList.add("menu-list-item__visible");
    });
    isMenuOpen = true;
  } else {
    menuList.classList.remove("menu-list__expanded");
    menuList.classList.add("menu-list__hidden");
    menuListItems.forEach((item) => {
      item.classList.remove("menu-list-item__visible");
    });
    isMenuOpen = false;
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) {
    menu.classList.remove("menu-expanded");
    menuToggleButton.classList.remove("open");
    console.log("hello world");
    menuList.classList.remove("menu-list__expanded");
    menuList.classList.add("menu-list__hidden");
    menuListItems.forEach((item) => {
      item.classList.remove("menu-list-item__visible");
    });
    isMenuOpen = false;
  }
});

const typewriter = new Typewriter(heroName, {
  loop: false,
  delay: "natural",
});

typewriter
  .typeString("Christian Fugraino")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString("arino")
  .start();
