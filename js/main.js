const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-link");

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isMenuOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isMenuOpen);
    });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (mainNav) {
            mainNav.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});