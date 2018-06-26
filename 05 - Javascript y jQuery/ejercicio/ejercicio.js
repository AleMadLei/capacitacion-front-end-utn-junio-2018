
"use strict";

/**
 * Anima la propiedad del elemento hasta un valor final en un tiempo en segundos definido.
 * @param elemento
 * @param propiedad
 * @param valorFinal
 * @param tiempo
 */
function animar(elemento, propiedad, valorFinal, tiempo) {

  tiempo *= 1000;
  valorFinal = parseInt(valorFinal);
  var valorAnterior = 0;
  var fraccion = valorFinal / tiempo;

  var intervalo = setInterval(function() {
    valorAnterior += fraccion;
    elemento.style[propiedad] = valorAnterior + '%';
    if (valorAnterior >= valorFinal) {
      clearInterval(intervalo);
    }

  }, 24);

}

function animar2(elemento, propiedad, valorFinal, tiempo) {

  tiempo *= 1000;
  valorFinal = parseInt(valorFinal);
  var valorAnterior = 0;
  var fraccion = valorFinal / tiempo;

  for (var i = 0; i < tiempo; i += 10) {
    valorAnterior += fraccion;
    elemento.style[propiedad] = valorAnterior + '%';
  }

}


var cuadros = document.querySelectorAll('.cuadro');
for (var i = 0; i < cuadros.length; i++) {
  animar(cuadros[i], 'left', '100%', i + 1);
  animar(cuadros[i], 'top', '100%', i + 1);
}

function animar3(index, value) {
  $(this).animate(
    { left: '100%', top: '43px' },
    { duration: (index * 1000) + 3000 }
  );
  $(this).css('height', '200px');
  $(this).css({
    overflow: 'hidden',
    zIndex: 15,
    border: '2px solid red'
  });
  window.setTimeout(function() {
    console.log(value);
    console.log(this);
    console.log('---------');
  }, 1000);
}

$('.circulo').each(animar3);