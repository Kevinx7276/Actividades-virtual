// Función para cambiar el color de la luz del semáforo
function cambiarColor(color) {
    // Cambia el color de cada luz según el parámetro recibido
    document.getElementById('rojo').style.backgroundColor = color === 'rojo' ? 'red' : 'grey';
    document.getElementById('amarillo').style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey';
    document.getElementById('verde').style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

// Función para iniciar el ciclo del semáforo
function iniciarSemaforo() {
    // Cambia la luz a rojo, amarillo y verde con retrasos específicos
    setTimeout(() => cambiarColor('rojo'), 0);         // Enciende la luz roja de inmediato
    setTimeout(() => cambiarColor('amarillo'), 3000); // Enciende la luz amarilla después de 3 segundos
    setTimeout(() => cambiarColor('verde'), 6000);    // Enciende la luz verde después de 6 segundos
    setTimeout(iniciarSemaforo, 9000);                // Reinicia el ciclo después de 9 segundos
}

// Inicia el semáforo cuando la página haya cargado completamente
window.onload = iniciarSemaforo;