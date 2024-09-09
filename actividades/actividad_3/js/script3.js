// Genera un número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
  // Obtiene el valor ingresado por el usuario
  let intento = parseInt(document.getElementById("numero").value, 10);

  // Verifica si el campo de entrada está vacío
  if (document.getElementById("numero").value === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa un número.";
    return;
  }

  // Incrementa el contador de intentos
  intentos++;

  // Compara el intento con el número secreto y muestra el resultado
  if (intento === numeroSecreto) {
    document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos.";
  } else if (intento < numeroSecreto) {
    document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo.";
  } else {
    document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo.";
  }
}