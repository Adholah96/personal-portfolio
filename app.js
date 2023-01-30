const menu = document.querySelector('.menu');
const windowMenu = document.querySelector('.window');
menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  windowMenu.classList.toggle('active');
});