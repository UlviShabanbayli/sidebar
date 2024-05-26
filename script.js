"use strict";

const menu = document.querySelector(".menu");
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");

const span = document.querySelectorAll("span");

menu.addEventListener("mouseenter", () => {
  menu.nextElementSibling.classList.remove("hide");
  menu.nextElementSibling.classList.add("absoluted");
});

menu.addEventListener("mouseleave", () => {
  menu.nextElementSibling.classList.add("hide");
  menu.nextElementSibling.classList.remove("absoluted");
});

btnOpen.addEventListener("click", () => {
  span.forEach((el) => el.classList.remove("hide"));
  btnOpen.style.visibility = "hidden";
  btnClose.classList.remove("hide");
  menu.classList.add("hide");
  menu.nextElementSibling.classList.remove("hide");
});

btnClose.addEventListener("click", () => {
  span.forEach((el) => el.classList.add("hide"));
  btnOpen.style.visibility = "visible";
  btnClose.classList.add("hide");
  menu.classList.remove("hide");
  menu.nextElementSibling.classList.add("hide");
});
