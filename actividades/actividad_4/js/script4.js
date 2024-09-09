function calcular() {
    // Obtener los valores de los campos de entrada y convertirlos a números flotantes
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;

    // Verificar que ambos números hayan sido ingresados
    if (isNaN(numero1) || isNaN(numero2)) {
      // Mostrar un mensaje si falta un número
      document.getElementById("resultado").innerText = "Por favor, ingresa ambos números.";
      return;  // Salir de la función si faltan números
    }

    // Realizar la operación seleccionada
    switch (operacion) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        // Validar que no se esté dividiendo por cero
        if (numero2 === 0) {
          document.getElementById("resultado").innerText = "No se puede dividir por 0.";
          return;
        }
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operación no válida";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
