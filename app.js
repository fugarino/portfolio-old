// Selectors
const menuToggleButton = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const menuListItems = document.querySelectorAll(".menu-item");
const heroName = document.querySelector(".hero-name");
const darkModeToggle = document.getElementById("darkModeBtn");

const aboutBtn = document.getElementById("aboutBtn");
const projectsBtn = document.getElementById("projectsBtn");
const skillsBtn = document.getElementById("skillsBtn");
const contactBtn = document.getElementById("contactBtn");

const aboutSection = document.getElementById("aboutMe");
const projectsSection = document.getElementById("projects");
const skillsSection = document.getElementById("skills");
const contactSection = document.getElementById("contact");

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

const switchToLight = () => {
  document.body.classList.remove("darkmode");
  document.documentElement.classList.remove("scroll-bar");
  darkModeToggle.textContent = "Dark Mode";
  localStorage.setItem("theme", "light");
};

const switchToDark = () => {
  document.body.classList.add("darkmode");
  document.documentElement.classList.add("scroll-bar");
  darkModeToggle.textContent = "Light Mode";
  localStorage.setItem("theme", "dark");
};

const switchTheme = () => {
  document.body.classList.contains("darkmode") ? switchToLight() : switchToDark();
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
const scrollFromTo = (button, section) => {
  button.addEventListener("click", () => {
    closeMenu();
    section.scrollIntoView({ behavior: "smooth" });
  });
};

scrollFromTo(aboutBtn, aboutSection);
scrollFromTo(projectsBtn, projectsSection);
scrollFromTo(skillsBtn, skillsSection);
scrollFromTo(contactBtn, contactSection);

menuToggleButton.addEventListener("click", () => {
  menu.classList.toggle("menu-expanded");
  menuToggleButton.classList.toggle("open");
  menu.classList.contains("menu-expanded") ? openMenu() : closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) closeMenu();
});

darkModeToggle.addEventListener("click", switchTheme);
