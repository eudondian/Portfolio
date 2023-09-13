// Toggle Nav Menu

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
  menu.style.zIndex = '10';
  closeBtn.style.zIndex = '11';
});

// Close the nav menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});

menu.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});

const cards = [
  {
    img: './assets/Js-Capstone.png',
    title: 'Movie App',
    company: ['CANOPY', 'Backend Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './assets/leaderboard.png',
    title: 'Leader Board',
    company: ['FACEBOOK', 'Fullstack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: '../assets/math-magician.png',
    title: 'Math Magician',
    company: ['FACEBOOK', 'Fullstack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './assets/Final-Capstone-Project.png',
    title: 'Furniture Mall App',
    company: ['UBER', 'Lead Developer', '2018'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'CSS', 'Javascript'],
    button: 'See Project',
    link: 'https://example.com/your-project-link'
  },
];

const cardsMobile = [
  {
    img: './assets/js-Capstone.png',
    title: 'Tonic',
    company: ['CANOPY', 'Backend Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './assets/leaderboard.png',
    title: 'Multi-Post Stories',
    company: ['CANOPY', 'Backend Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './',
    title: 'Tonic',
    company: ['CANOPY', 'Backend Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './assets/Final Capstone Project.png',
    title: 'Multi-Post Stories',
    company: ['CANOPY', 'Backend Dev', '2023'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
];

const worksContainer = document.querySelector('#cards-desktop');
cards.forEach((item) => {
  const workCards = document.createElement('div');
  workCards.innerHTML = `  
     
     <div class="card">
      <img src=${item.img} alt="Card One" width="550">
      <div class="container">
          <h2><b>${item.title}</b></h2>
              <ul class="card-list-one">
                  <li>${item.company[0]}</li>
                  <li class="card-list">${item.company[1]}</li>
                  <li class="card-list">${item.company[2]}</li>
              </ul>
          <p>${item.description}</p>
          <ul class="card-list-two">
              <li>${item.languages[0]}</li>
              <li>${item.languages[1]}</li>
              <li>${item.languages[2]}</li>
          </ul>
          <div class="card-button"  onclick="popup()">${item.button}</div>
      </div>
  </div>
    `;

  worksContainer.appendChild(workCards);
});

const worksMobile = document.querySelector('#cards');
cardsMobile.forEach((mobItem) => {
  const workCardsMobile = document.createElement('div');
  workCardsMobile.innerHTML = `  
     
    <div class="card">
      <img src=${mobItem.img} alt="Card One" style="width:100%">
      <div class="container">
          <h2><b>${mobItem.title}</b></h2>
              <ul class="card-list-one">
                  <li>${mobItem.company[0]}</li>
                  <li class="card-list">${mobItem.company[1]}</li>
                  <li class="card-list">${mobItem.company[2]}</li>
              </ul>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <ul class="card-list-two">
              <li>${mobItem.languages[0]}</li>
              <li>${mobItem.languages[1]}</li>
              <li>${mobItem.languages[2]}</li>
          </ul>
          <div class="card-button" onclick="popup()">${mobItem.button}</div>
      </div>
    </div>
    `;

  worksMobile.appendChild(workCardsMobile);
});

const popper = document.querySelector('#popup-1');

// eslint-disable-next-line no-unused-vars
function popup() {
  popper.classList.toggle('active');
}

// form validation
const formSection = document.querySelector('#form');
const email = document.querySelector('.f-mail');
const errorHolder = document.querySelector('.error');
const lowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

formSection.addEventListener('submit', (e) => {
  const userEmail = email.value.trim();
  if (lowerCase(userEmail)) {
    formSection.submit();
  } else {
    e.preventDefault();
    errorHolder.innerText = 'Wrong Email! Email should be written in lowercase.';
  }
});
