const hamburger = document.querySelector('.mobile-menu');
const closeHamburger = document.querySelector('.desktop-nav-hidden');
const nav = document.querySelector('.desktop-nav-hidden');

hamburger.addEventListener('click', () => {
  nav.classList.add('openMenu');
  closeHamburger.classList.add('open');
  hamburger.classList.remove('uil');
});