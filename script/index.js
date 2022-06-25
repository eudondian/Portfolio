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

// form validation

const formSection = document.querySelector('#form');
const email = document.querySelector('.f-mail');
const errorHolder = document.querySelector('.error');
const lowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

formSection.addEventListener('submit', (e) => {
  const userEmail = email.value.trim();
  if (!lowerCase(userEmail)) {
    formSection.submit();
  } else {
    e.preventDefault();
    errorHolder.innerText = 'Wrong Email! Email should be written in lowercase.';
  }
});
