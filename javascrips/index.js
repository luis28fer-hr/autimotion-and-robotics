//Animacion para que los elementos vayan apareciendo segun el scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//animacion del carrusel dinamico para que cambie de imagen cada tiempo
document.addEventListener("DOMContentLoaded", function() {

  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  var intervalTime = 12000; // Cambiar imagen cada 12 segundos

  function nextSlide() {

    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");

  }

  setInterval(nextSlide, intervalTime);
});


//Cambiar el texto de el carusel dinamico cada 12.5 segundos
var titulo = document.getElementById("presentation-titulo");
var descripcion = document.getElementById("presentacion-titulo-descripcion");

var nuevosTextos = ["Indultrial Automation Services", "Hardware and Software Design", "Robotic Simulations", "We don’t expect success we prepare for it..."]; // Array con los nuevos textos
var nuevosTextosDescripcion = [
  "Covers most of the current systems int the BIW plants of the automotive industry.", 
  "Provide and maintain our quality services to customers exceeding their controls and robotics needs in their tools.",
  "Our experience covers most of the current systems in the BIW plants.", 
  ""]; // Array con los nuevos textos


var indice = 0; // Índice inicial



function actualizarTexto() {
  var nuevoTexto = nuevosTextos[indice]; // Obtiene el nuevo texto según el índice
  titulo.textContent = nuevoTexto; // Actualiza el texto del párrafo


  var nuevoTextoDescripcion = nuevosTextosDescripcion[indice]; // Obtiene el nuevo texto según el índice
  descripcion.textContent = nuevoTextoDescripcion; // Actualiza el texto del párrafo


  indice = (indice + 1) % nuevosTextos.length; // Incrementa el índice circularmente

}

setInterval(actualizarTexto, 12050); // Ejecuta la función cada 10 segundos (10000 ms)



//Animacion sobre home-welcome para que se haga una sombra segun el cursor
document.addEventListener('mousemove', function(e) {
    var luz = document.querySelector('.efecto-luz');
    var x = e.clientX;
    var y = e.clientY;
    
    luz.style.background = 'radial-gradient(circle ' + '15rem ' + 'at ' + x + 'px ' + y + 'px, transparent, rgba(0, 31, 61, 0.8))';
  });