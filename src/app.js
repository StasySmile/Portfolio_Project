let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let move = document.querySelector(".move");
function toggleMenu() {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    move.classList.remove("scroll");
    toggle.querySelector("a").innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menu.classList.add("open");
    move.classList.add("scroll");
    toggle.querySelector("a").innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
}

toggle.addEventListener("click", toggleMenu, false);
