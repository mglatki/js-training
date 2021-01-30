let closeMenuButton = document.querySelector(".close_menu__button");
let openMenuButton = document.querySelector(".open_menu__button");
let menuSec = document.querySelector(".menu");
let headerEl = document.querySelector("header");
let footerEl = document.querySelector("footer");

/* let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("Hello !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
}); */

openMenuButton.addEventListener('click', () => {
  toggleMobileMenu();
})

closeMenuButton.addEventListener('click', () => {
  toggleMobileMenu();
})

function toggleMobileMenu() {
  headerEl.classList.toggle('header--expanded');
  menuSec.classList.toggle('menu--visible');
  footerEl.classList.toggle('footer--invisible');
  closeMenuButton.classList.toggle('close_menu__button--visible');
  openMenuButton.classList.toggle('open_menu__button--invisible');
}
