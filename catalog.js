"use strict";
let menu = document.getElementById("MENU");
let bars = document.getElementById("BARS");
let menuClose = document.querySelector(".xmark");

function toggleMenu() {
  menu.classList.toggle("hidden");
}

bars.addEventListener("click", function () {});

bars.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
