// Piedra, papel o tijera
alert("Piedra, papel o tijera\n¡A jugar! ✊✋✌️");

// VARIABLES GLOBALES
    // En estas variables guardarán el nombre de los jugadores
    let primerJugador =  "";
    let segundoJugador = "";
    
    // Ambas variables contienen lo que los usuarios elijan: Piedra, papel o tijera
    let opcionJugador1;
    let opcionJugador2;
    
    // Función que valida el nombre ingresado por los usuarios
 function validarNombre(nombre, nombreAleatorio) {
    while(nombre === "" || nombre === null) {
       return nombreAleatorio;
    }
    
    return nombre;
}

// Jugador 1 ingresa su nombre y si no
primerJugador = prompt("Jugador 1:\nIngresar nombre");
primerJugador = validarNombre(primerJugador, "Jugador 1");


segundoJugador = prompt("Jugador 2:\nIngresar nombre");
segundoJugador = validarNombre(segundoJugador, "Jugador 2");



    // El 1er jugador empieza elige una de las 3 opciones:
    function jugadorUno() {
        opcionJugador1 = prompt(primerJugador + "\nElegí Piedra, papel o tijera").toLowerCase();
        switch(opcionJugador1) {
            case "piedra":
             alert(primerJugador + " elegiste PIEDRA ✊");
             break;

            case "papel":
             alert(primerJugador + " elegiste PAPEL ✋");
             break;

            case "tijera":
             alert(primerJugador + " elegiste TIJERA ✌️");
             break;

            default:
              alert("Elección inválida 🤨");
              opcionJugador1 = prompt(primerJugador + "\nElegí Piedra, papel o tijera").toLowerCase();
            break;
        }
    }

    jugadorUno();


function jugadorDos() { 
    opcionJugador2 = prompt(segundoJugador + "\nElegí Piedra, papel o tijera").toLowerCase();
    switch(opcionJugador2) {
        case "piedra":
            alert(segundoJugador + " eligió PIEDRA ✊");
         break;

        case "papel":
          alert(segundoJugador + " eligió PAPEL ✋");
         break;

        case "tijera":
         alert(segundoJugador + " eligió TIJERA ✌️");
         break;

         default:
            alert("Elección inválida 🤨");
            opcionJugador2 = prompt(segundoJugador + "\nElegí Piedra, papel o tijera").toLowerCase();
            break;
    }
  
}

jugadorDos();

function jugar() {
    if(opcionJugador1 === opcionJugador2) {
        alert("¡Hay empate! 😬");
    } else if((opcionJugador1 === "papel" && opcionJugador2 === "piedra") || (opcionJugador1 === "tijera" && opcionJugador2 === "papel") || (opcionJugador1 === "piedra" && opcionJugador2 === "tijera")) {
        // return alert(primerJugador + " ganaste 😎");
        return alert("Ganaste! 😎");
    } else {
        // return alert(segundoJugador + " ganaste 😎");
        return alert("Perdiste! 😢");
    }
}

jugar();

function volverAJugar() {
    let respuesta = prompt("¿Querés volver a jugar?\n SÍ \n NO").toLowerCase();
    if(respuesta == "si") {
        jugadorUno();
        jugadorDos();
        jugar();
    } else {
        alert("¡Gracias por jugar! 😊");
    }
}

volverAJugar();