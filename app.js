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
    title: 'facebook',
    img: 'Portfolio1.png',
    description:
      'lorem ipusumlorem ipusumloremusumloreipusumlorem ipusumlorem ipusurem ipusumlumloremusumloreipusumlorem ipusumlorem ipusumlorem ipusumlomlorem ipusumloremusumloreipusumlorem ipusumlorem ipusumlorem ipusumlo',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
  {
    title: 'Multi Post Stories',
    img: 'Portfolio2.png',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://adholah96.github.io/personal-portfolio/',
    seeSource: 'https://github.com/Adholah96/personal-portfolio',
  },
  {
    title: 'Facebook 360',
    img: 'Portfolio2.png',
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
    img: 'Portfolio1.png',
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
      document.getElementById('modal').classList.add('blur');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active');
});
