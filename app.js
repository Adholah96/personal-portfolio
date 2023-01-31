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
