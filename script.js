const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll("#mobile-menu a");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");

    overlay.classList.remove("hidden");

});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    })
})
setTimeout(() => {
    closeMenu()
},100);
function closeMenu() {

    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");

    overlay.classList.add("hidden");

}

