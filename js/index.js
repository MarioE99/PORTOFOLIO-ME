// Boton de menu responsivo

const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



//descargar CURRI

var urlDocumento = 'https://github.com/MarioE99/PORTOFOLIO-ME/blob/master/assets/doc/Curr%C3%ADculum-Mario%20Escobar.pdf';


var enlaceDescarga = document.getElementById('enlaceDescarga');

 
 enlaceDescarga.href = urlDocumento;

 
 enlaceDescarga.addEventListener('click', function(event) {
  
     event.preventDefault();

     enlaceDescarga.click();
 });