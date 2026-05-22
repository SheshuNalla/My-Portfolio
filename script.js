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

function copyEmail(){
    const email = document.querySelector("#email").innerText;
    const alert = document.querySelector(".copy-email")
    navigator.clipboard.writeText(email);
    alert.classList.remove("opacity-0");
    setTimeout(()=>{
        alert.classList.add("opacity-0", "transition", "duration-300")
    },2500)
}
function copyNumber(){
    const number = document.querySelector("#number").innerText;
    const alert = document.querySelector(".copy-number")
    navigator.clipboard.writeText(number);
    alert.classList.remove("opacity-0");
    setTimeout(()=>{
        alert.classList.add("opacity-0", "transition", "duration-300")
    },2500)
}

