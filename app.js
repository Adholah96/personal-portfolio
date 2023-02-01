const menu = document.querySelector('.menu')
const windowMenu = document.querySelector('.window')

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  windowMenu.classList.toggle('active')
})
document.querySelectorAll('.menu-link').forEach((k) =>
  k.addEventListener('click', () => {
    menu.classList.remove('active')
    windowMenu.classList.remove('active')
  })
)

// work section content

const cardArray = [
  {
    title: 'facebook',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
  {
    title: 'Multi Post Stories',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
  {
    title: 'Facebook 360',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
  {
    title: 'Uber Navigation',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
  {
    title: 'Calculator',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
  {
    title: 'Twitter',
    img: '',
    description:
      'lorem ipusumlorem ipusumlorem ipusumlorem ipusumlorem ipusumlore',
    technology: ['html', 'css', 'javascript', 'ruby on rails'],
  },
]

// load cards dynamically

const assignCardValues = document.getElementById('work-link')

cardArray.forEach((data, val) => {
  let content = '<div class="card">'
  content += '<div class="image-holder">'
  content += '<img src="./assets/assets2/portfolio1.png" alt="portfolio1"/>'
  content += '</div>'
  content += '<div class="content-holder">'
  content += `<h2>${data.title}</h2>`
  content += '<ul>'
  data.technology.forEach((techitem) => {
    content += `<li>${techitem}</li>`
  })
  content += '</ul>'
  content += '<button type="button">See Project</button>'
  content += '</div>'
  assignCardValues.innerHTML += content
})
