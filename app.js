// Selectors
const menuToggleButton = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const menuListItems = document.querySelectorAll(".menu-item");
const heroName = document.querySelector(".hero-name");
const darkModeToggle = document.getElementById("darkModeBtn");

// State
let isMenuOpen = false;

// Typewriter
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

// Functions
const detectInitialTheme = () => {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") theme = "dark";
  } else if (!window.matchMedia) return false;
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";

  if (theme === "dark") {
    document.body.classList.add("darkmode");
    document.documentElement.classList.add("scroll-bar");
    darkModeToggle.textContent = "Light Mode";
  }
};
detectInitialTheme();

const switchTheme = () => {
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.remove("darkmode");
    document.documentElement.classList.remove("scroll-bar");
    darkModeToggle.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("darkmode");
    document.documentElement.classList.add("scroll-bar");
    darkModeToggle.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
  closeMenu();
};

const openMenu = () => {
  menuList.classList.remove("menu-list__hidden");
  menuList.classList.add("menu-list__expanded");
  menuListItems.forEach((item) => {
    item.classList.add("menu-list-item__visible");
  });
  isMenuOpen = true;
};

const closeMenu = () => {
  menuList.classList.remove("menu-list__expanded");
  menuList.classList.add("menu-list__hidden");
  menuListItems.forEach((item) => {
    item.classList.remove("menu-list-item__visible");
  });
  menu.classList.remove("menu-expanded");
  menuToggleButton.classList.remove("open");
  isMenuOpen = false;
};

// EventListeners
menuToggleButton.addEventListener("click", () => {
  menu.classList.toggle("menu-expanded");
  menuToggleButton.classList.toggle("open");
  menu.classList.contains("menu-expanded") ? openMenu() : closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) closeMenu();
});

darkModeToggle.addEventListener("click", switchTheme);
