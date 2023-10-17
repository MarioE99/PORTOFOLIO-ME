const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});