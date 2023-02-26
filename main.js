const mobileMenu = document.querySelector("nav .mobile-menu");
const mobileClose = document.querySelector("nav .mobile-close");
const mobileNav = document.querySelector("nav .mobile-nav");

mobileMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
    mobileClose.classList.add("active");
})

mobileClose.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    mobileClose.classList.remove("active");
})