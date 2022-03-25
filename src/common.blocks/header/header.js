/* eslint-disable */
let btnMenu = document.querySelector(".hamburger");
let ulMenu = document.querySelector(".menu__main");

btnMenu.addEventListener("click", function () {
    ulMenu.classList.toggle("show-menu");
    btnMenu.classList.toggle("btn-show-menu")
})