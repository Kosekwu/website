console.log("hello");
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

function toggleMenu(){
  menuNav.classList.toggle("menu-toggle");
    console.log("called toggleMenu");
}

menuToggle.addEventListener("click", toggleMenu);
