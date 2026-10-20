
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
