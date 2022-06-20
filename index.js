const hamburger = document.querySelector('.menu-icon');
const closeHamburger = document.querySelector('.closeimage');
hamburger.addEventListener('click', () => {
  hamburger.classList.add('header');
  closeHamburger.classList.add('open');
});