document.addEventListener('DOMContentLoaded', function () {
    let contador = 3; // Establece el valor inicial del contador
    const contadorElement = document.getElementById("contador");
    const customNotification = document.getElementById("custom-notification");
    const notificationMessage = document.getElementById("notification-message");
    const closeNotificationButton = document.getElementById("closeNotification");
    let ganador = null;
    var flag = true;

    function actualizarContador() {
        if (contador > 0) {
            contadorElement.textContent = contador;
            contador--;
        } else {
            contadorElement.style.display = "none";
            habilitarJuego(); // Llama a la función que inicia el juego
        }
    }

function habilitarJuego() {

    function mostrarGanador() {
        if (ganador === "naranja") {
            mostrarNotificacion("Gana el jugador naranja");
        } else if (ganador === "verde") {
            mostrarNotificacion("Gana el jugador verde");
        }
    }

    function mostrarNotificacion(mensaje) {
        notificationMessage.textContent = mensaje;
        customNotification.style.display = "block";
    }

    function moverderecha(parametro) {
        const foto = document.getElementById(parametro);
        const valoresreal = window.getComputedStyle(foto);
        const fotomargin = parseInt(valoresreal.getPropertyValue("margin-left").replace("px", ""));
        const limiteDerecho = window.innerWidth - foto.offsetWidth;
        
        if(flag){
            if (fotomargin < limiteDerecho) {
                foto.style.marginLeft = (fotomargin + 25) + "px";
            } else {
                if (parametro === "foto") {
                    ganador = "naranja";
                    mostrarGanador();
                    flag = false;
                } else {
                    ganador = "verde";
                    mostrarGanador();
                    flag = false;
    
                }
            }
        }

    }

    var teclaPresionada = false;
    var teclaPresionada2 = false;

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 65) {
            teclaPresionada = true;
        }
        if (event.keyCode === 76) {
            teclaPresionada2 = true;
        }
    });

    document.addEventListener('keyup', function (event) {
        if (teclaPresionada && event.keyCode === 65) {
            moverderecha("foto");
            teclaPresionada = false;
        }
        if (teclaPresionada2 && event.keyCode === 76) {
            moverderecha("foto2");
            teclaPresionada2 = false;
        }
    });

    
    }

    setInterval(actualizarContador, 1000);
});
