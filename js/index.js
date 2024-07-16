// Boton de menu responsivo

const mobileMenuButton = document.getElementById("mobile-menu");
const navMenu = document.getElementById("menu");

mobileMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//descargar CURRI

function descargarArchivo() {
  var enlace = document.createElement("a");

  enlace.href = "../assets/doc/Currículum-MarioE.pdf";

  enlace.download = "Currículum-MarioE.pdf";

  enlace.click();
}

window.addEventListener("scroll", function () {
  var element = document.querySelector(".works");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    element.classList.add(".show");
  }
});
