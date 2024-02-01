// Boton de menu responsivo

const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



//descargar CURRI

function descargarArchivo(){


    var enlace = document.createElement('a');

    enlace.href = '../assets/doc/Currículum-Mario Escobar.pdf';

    enlace.download = 'Currículum-Mario Escobar.pdf';

    enlace.click();


}