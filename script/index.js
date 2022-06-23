const hamburger = document.querySelector('.mobile-menu');
const closeHamburger = document.querySelector('.desktop-nav-hidden');
const nav = document.querySelector('.desktop-nav-hidden');
const closeNav = document.querySelector('.desktop-nav-hidden');

hamburger.addEventListener('click', () => {
  nav.classList.add('openMenu');
});

closeHamburger.addEventListener('click', () => {
  nav.classList.remove('openMenu');
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('openMenu');
});
