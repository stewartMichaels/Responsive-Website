const mobileMenu = document.querySelector("nav .mobile-menu");
const mobileClose = document.querySelector("nav .mobile-close");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLiAll = document.querySelector("nav.mobile-nav ul li");
const socials = document.querySelectorAll(".socials a img")
const desktopNavLiAll = document.querySelectorAll("nav ul li")

mobileMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
    mobileClose.classList.add("active");
})

mobileClose.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    mobileClose.classList.remove("active");
})

mobileNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 400 + i * 140 + "ms";
})

socials.forEach((li, i) => {
    li.style.animationDelay = 1400 + i * 120 + "ms";
})

desktopNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 2000 + i * 140 + "ms";
})