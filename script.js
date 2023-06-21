"use strict";
let darkMenu = document.querySelector(".darkMenu");
let menu = document.getElementById("MENU");
let bars = document.getElementById("BARS");
let menuClose = document.querySelector(".xmark");

function toggleMenu() {
  darkMenu.classList.toggle("hidden");
  menu.classList.toggle("hidden");
}

bars.addEventListener("click", function () {});

bars.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
