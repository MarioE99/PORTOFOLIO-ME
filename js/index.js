// Boton de menu responsivo

const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



//descargar CURRI

document.getElementById('descargarPDF').addEventListener('click',function(){



    var pdfUrl = '..\assets\doc\Currículum-Mario Escobar.pdf';

    var pdfName = 'Currículum-Mario Escobar';

    var enlace = document.createElement('a');

    enlace.href = pdfUrl;

    enlace.download = pdfName;

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace);



});