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
    company: ['MICROVERSE', 'front-end Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'CSS', 'Javascript'],
    button: 'See Project',
    link: 'https://github.com/eudondian/JavaScript-capstone',
    live: 'https://abass-rashid.github.io/capstone-project-2/dist/'
  },
  {
    img: './assets/leaderboard.png',
    title: 'Leader Board',
    company: ['MICROVERSE', 'Fullstack Dev', '2022'],
    description:
      'App that compares the score accepted from the user with data in the API and places the newly scored value in a sorted manner.',
    languages: ['html', 'Ruby on rails', 'CSS', 'Javascript'],
    button: 'See Project',
    link: 'https://github.com/eudondian/Leaderboard',
    live: 'https://eudondian.github.io/Leaderboard/'
  },
  {
    img: '../assets/B',
    title: 'Math Magician',
    company: ['MICROVERSE', 'Fullstack Dev', '2022'],
    description:
      'The app allows users to maintain a record of transactions categorized by type. This enables users to track their expenditure, providing insights into their spending patterns and categories..',
    languages: ['Ruby', 'Ruby on rails', 'Bootstrap'],
    button: 'See Project',
    link: 'https://github.com/eudondian/Budget-App',
    live: 'https://render-yaml-t7ma.onrender.com/'
  },
  {
    img: './assets/Final-Capstone-Project.png',
    title: 'Furniture Mall App',
    company: ['MICROVERSE', 'Lead Developer', '2023'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'CSS', 'Javascript'],
    button: 'See Project',
    link: 'https://github.com/anbehindY/furniture-mall-frontend',
    live: 'https://github.com/anbehindY/furniture-mall-frontend'
  },
];


const worksContainer = document.querySelector('#cards-desktop');
const popper = document.querySelector('#popup-1');

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
        <div class="card-button" onclick="openPopup('${item.title}', '${item.description}', '${item.link}', '${item.company}', '${item.live}', '${item.img}')">${item.button}</div>
      </div>
    </div>
  `;

  worksContainer.appendChild(workCards);
});

function openPopup(title, description, link, company, live, img) {
  const popupContent = `
    <div class="overlay"></div>
    <div class="content">
      <div class="close-btn" onclick="closePopup()">&times;</div>
      <h1>${title}</h1>
      <ul id="popup-first-list">
        <li>${company[0]}</li>
        <li>${company[1]}</li>
        <li>${company[2]}</li>
      </ul>
      <img class="popper-img" src="${img}" alt="" />
      <p>
        ${description}
      </p>
      <ul class="popup-ul">
        <li class="popup-li">HTML</li>
        <li class="popup-li">CSS</li>
        <li class="popup-li">Javascript</li>
      </ul>
      <div class="popup-div">
        <button><a href="${link}" target="_blank">See Free <i class="uil uil-power"></i></a></button>
        <button><a href="${live}" target="_blank">See Source <i class="uil uil-github"></i></a></button>
      </div>
    </div>
  `;
  popper.innerHTML = popupContent;
  popper.classList.add('active');
}



function closePopup() {
  popper.classList.remove('active');
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
