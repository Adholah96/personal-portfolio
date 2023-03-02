const menu = document.querySelector('.menu');
const windowMenu = document.querySelector('.window');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  windowMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-link').forEach((k) => k.addEventListener('click', () => {
  menu.classList.remove('active');
  windowMenu.classList.remove('active');
}));

// work section content
/* eslint-disable no-restricted-globals */

const cardArray = [
  {
    title: 'TODO LIST',
    img: 'to-do-list.png',
    description:
      'TODO LIST is a javascript project that that users can use to manage their day to day tasks. users can add tasks, clear completed and edit them in case of any change.',
    technology: ['html', 'css', 'javascript'],
    seeLive: 'https://adholah96.github.io/to-do-list/dist/',
    seeSource: 'https://github.com/Adholah96/to-do-list',
  },
  {
    title: 'Multi Post Stories',
    img: 'portfolio2.png',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
  {
    title: 'Facebook 360',
    img: 'portfolio2.png',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
  {
    title: 'Uber Navigation',
    img: 'Portfolio4.png',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
  {
    title: 'Calculator',
    img: 'Portfolio4.png',
    description:
      'lorem ipusumlorem ipusumlorem ippusumlore rem ipusumlusumlolorem ipusumlorem ipusumlore rem ipusumlorem ipusumlorem ipusumloremrem ipusumlorem ipus',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio/',
  },
  {
    title: 'Twitter',
    img: 'portfolio1.png',
    description:
      'ncidunt eius. Consectetur totam of o neque quaerat.Distinctio dmenda ',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
];

// load cards dynamically

const assignCardValues = document.getElementById('work-link');

cardArray.forEach((data, val) => {
  let content = '<div class="card">';
  content += '<div class="image-holder">';
  content += `<img src="./assets/assets2/${data.img}" alt="portfolio1"/>`;
  content += '</div>';
  content += '<div class="content-holder">';
  content += `<h2>${data.title}</h2>`;
  content += '<ul>';
  data.technology.forEach((techitem) => {
    content += `<li>${techitem}</li>`;
  });
  content += '</ul>';
  content += `<button type="button" id="see-project-${val}">See Project</button>`;
  content += '</div>';
  assignCardValues.innerHTML += content;
});
function modalData(data) {
  document
    .getElementById('modal-image')
    .setAttribute('src', './assets/assets2/'.concat(data.img));
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-ul').innerHTML = '';
  data.technology.forEach((techitem) => {
    const ul = document.getElementById('modal-ul');
    ul.innerHTML += `<li>${techitem}</li>`;
  });
  document.getElementById('modal-description').innerText = data.description;
  document.getElementById('see-live').addEventListener('click', () => {
    location.href = data.seeLive;
  });
  document.getElementById('see-source').addEventListener('click', () => {
    location.href = data.seeSource;
  });
}
cardArray.forEach((values, val) => {
  document
    .getElementById('see-project-'.concat(val))
    .addEventListener('click', () => {
      document.getElementById('modal').classList.add('active');
      modalData(values);
      document.querySelector('.backdrop').classList.add('active');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active');
  document.querySelector('.backdrop').classList.remove('active');
});

// email form validation

const form = document.getElementById('getintouch');
const emailAddress = form.elements.yourMail;
const errorText = document.querySelector('small');

form.addEventListener('submit', (event) => {
  const emailValue = emailAddress.value;
  if (emailValue !== emailValue.toLowerCase()) {
    event.preventDefault();
    errorText.classList.add('error');
  }
});

// local storage for handling form information
const userName = form.elements.yourName;
const userEmail = form.elements.yourMail;
const userMessage = form.elements.yourMessage;

function fillStorage() {
  // user values stored in object
  const userValues = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userValues', JSON.stringify(userValues));
}
function prePopulateForm() {
  const storedValues = JSON.parse(localStorage.getItem('userValues'));
  const currentUser = storedValues.name;
  const currentEmail = storedValues.email;
  const currentMessage = storedValues.message;
  form.elements.yourName.value = currentUser;
  form.elements.yourMail.value = currentEmail;
  form.elements.yourMessage.value = currentMessage;
}
if (!localStorage.getItem('userValues')) {
  fillStorage();
} else {
  prePopulateForm();
}

//  if form values are changed

userName.onchange = fillStorage;
userEmail.onchange = fillStorage;
userMessage.onchange = fillStorage;
