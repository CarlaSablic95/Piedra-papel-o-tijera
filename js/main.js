alert("Piedra, papel o tijera\n¡A JUGAR! ✊✋✌️");

let aliasJugador = prompt("Ingresá tu alias").toLowerCase();

while (aliasJugador == "" || aliasJugador == null) {
  aliasJugador = prompt("Ingresá tu alias").toLowerCase();
}

let opciones = ["piedra", "papel", "tijera"];
let opcionJugador;
let opcionPC;

let puntosJugador = 0;
let puntosPC = 0;

class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  elegirOpcion() {
    opcionJugador = prompt(jugador.alias + " elegí piedra, papel o tijera").toLowerCase();

    while(!opciones.some((opcion) => opcion == opcionJugador)) {
      opcionJugador = prompt("Elección inválida 🤨 \nElegí nuevamente: piedra, papel o tijera").toLowerCase();
    }
    alert(jugador.alias + " elegiste " + opcionJugador);
    return opcionJugador;
  }
}

const jugador = new Jugador(aliasJugador);

////////////////////////////////

const juegaPC = () => {
  opcionPC = opciones[Math.floor(Math.random() * opciones.length)];
  return alert("PC eligió " + opcionPC);
};

const jugarPartida = () => {
  for (let i = 1; i <= 3; i++) {
    alert("TURNO " + i);

    jugador.elegirOpcion();
    juegaPC();

    if (opcionJugador === opcionPC) {
      alert("¡EMPATE! 😬");
    } else if (
      (opcionJugador === "piedra" && opcionPC === "tijera") ||
      (opcionJugador === "papel" && opcionPC === "piedra") ||
      (opcionJugador === "tijera" && opcionPC === "papel")
    ) {
      puntosJugador += 5;
      alert(jugador.alias + ": " + puntosJugador + " puntos");
    } else {
      puntosPC += 5;
      alert("PC: " + puntosPC + " puntos");

    }
  }
};

function definirGanador() {
  if (puntosJugador > puntosPC) {
    alert(jugador.alias + " ganasteee 😎🏆");
    alert("GAME OVER" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
  } else if (puntosJugador === puntosPC) {
    alert("EMPATE" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
    
  } else {
    alert(jugador.alias + " perdiste 😣");
    alert("GAME OVER" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
  }
}

const nuevaPartida = () => {
  let respuesta = prompt("¿Jugás nuevamente? \n SÍ \n NO").toLowerCase();
  
  if (respuesta == "si") {
    jugarPartida();
    definirGanador();
  } else {
    alert("¡Gracias por jugar " + jugador.alias + " 😊 !");
  }
};

jugarPartida();
definirGanador();
nuevaPartida();