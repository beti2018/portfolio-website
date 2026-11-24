
// ===============================
// MOBILE NAVIGATION
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-link");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// ===============================
// DARK / LIGHT THEME
// ===============================
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle-icon");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialTheme =
  savedTheme || (systemPrefersDark ? "dark" : "light");

applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem("portfolio-theme", newTheme);
  applyTheme(newTheme);
});
