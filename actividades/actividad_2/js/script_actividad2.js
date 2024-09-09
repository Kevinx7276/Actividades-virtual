var contador = 1; // Contador inicial
var temporizadorActivo = false; // Controla si la rotación está activa

function iniciar() {
  console.log('Rotación de imágenes iniciada');
  if (!temporizadorActivo) {
    temporizadorActivo = true; // Marca que la rotación está activa
    rotarImagenes(); // Inicia la rotación de imágenes
  }
}

function detener() {
  console.log('Rotación de imágenes detenida');
  temporizadorActivo = false; // Marca que la rotación está detenida
}

function rotarImagenes() {
  if (!temporizadorActivo) return; // Si la rotación no está activa, sale de la función

  var img = document.getElementById('imgSlide');
  if (contador > 9) { // Cambiado de >= 10 a > 9 para asegurar que el contador se mantenga dentro del rango válido
    contador = 1; // Reinicia el contador a 1 si es mayor a 9
  }

  img.src = './images/img' + contador + '.jpg'; // Establece la fuente de la imagen
  console.log('Imagen cambiada a: ' + img.src);

  contador++; // Incrementa el contador después de actualizar la imagen

  // Solicita el siguiente cambio de imagen en el siguiente ciclo de animación
  requestAnimationFrame(function() {
    setTimeout(rotarImagenes, 3000); // Usa setTimeout para crear un intervalo sin setInterval
  });
}
