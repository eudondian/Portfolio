// Toggle Nav Menu

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const cardBtn = document.querySelectorAll('.card-button');
const navLink = document.querySelector('#nav-menu');
const popBtn = document.querySelector('.close-btn');
const popUp = document.querySelector('#popup-1');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
  menu.style.zIndex = '10';
  closeBtn.style.zIndex = '11';
});

// Close the nav menu

const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
};
// close nav menu on clicking close button
closeBtn.addEventListener('click', closeNav);

// Close nav menu on clicking any link item
navLink.addEventListener('click', closeNav);

cardBtn.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('#popup-1').classList.toggle('active');
  });
});

popBtn.addEventListener('click', () => {
  popUp.style.display = 'none';
});