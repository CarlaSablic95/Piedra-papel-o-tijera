let aliasJugador = prompt("Ingresá tu alias").toLowerCase();

const opciones = ["piedra", "papel", "tijera"];

let opcionJugador;
let opcionPC;

let puntosJugador;
let puntosPC;

class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  ingresarAlias() {
    while (aliasJugador == "" || aliasJugador == null) {
      aliasJugador = prompt("Ingresá tu alias").toLowerCase();
    }

    alert("¡ " + aliasJugador + " bienvenido/a !" + "\nJuguemos a Piedra, papel o tijera ✊✋✌️");
  }

  elegirOpcion() {
    opcionJugador = prompt(this.alias + " elegí:" + "\npiedra, papel o tijera").toLowerCase();

    while (!opciones.includes(opcionJugador)) {
      opcionJugador = prompt("Elección inválida 🤨 \nElegí nuevamente: piedra, papel o tijera").toLowerCase();
    }

    alert(this.alias + " elegiste " + opcionJugador);

    return opcionJugador;
  }
}

const jugador = new Jugador(aliasJugador);
jugador.ingresarAlias();

const juegaPC = () => {
  opcionPC = opciones[Math.floor(Math.random() * 3)];
  alert("PC eligió " + opcionPC);
  return opcionPC;
}

///////////////////

const jugadas = [
  { ganador: "piedra", perdedor: "tijera" },
  { ganador: "papel", perdedor: "piedra" },
  { ganador: "tijera", perdedor: "papel" }
];

const jugarPartida = () => {
  puntosJugador = 0;
  puntosPC = 0;

  for (let i = 1; i <= 3; i++) {
    alert("TURNO " + i);

    jugador.elegirOpcion();
    juegaPC();

    let partidaGanada = jugadas.some((jugada) => jugada.ganador === opcionJugador && jugada.perdedor === opcionPC);

    if (opcionJugador === opcionPC) {
      alert("¡EMPATE! 😬");
    } else if (partidaGanada) {
      puntosJugador += 1;
      alert(jugador.alias + ": " + puntosJugador + " puntos");
    } else {
      puntosPC += 1;
      alert("PC: " + puntosPC + " puntos");
    }
  }

};

const definirGanador = () => {
  if (puntosJugador > puntosPC) {
    alert(jugador.alias + " ganasteee 😎🏆");
    alert("GAME OVER" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
  } else if (puntosJugador === puntosPC) {
    alert("EMPATE" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
  } else {
    alert(jugador.alias + " perdiste 😣");
    alert("GAME OVER" + "\n" + jugador.alias + ": " + puntosJugador + " puntos \n" + "PC: " + puntosPC + " puntos");
  }
};

const nuevaPartida = (respuesta, puntajeMaximo) => {
  respuesta = prompt("¿Jugás nuevamente? \n SÍ \n NO").toLowerCase();
  puntajeMaximo = 3;

  while (respuesta == "si") {
    alert("Reto: conseguí 3 puntos e intentá ganarle a la pc.. \n" + "Éxitooos! 😎");
    jugarPartida();
    definirGanador();

    if ((puntosJugador == puntajeMaximo) || (puntosPC == puntajeMaximo)) {
      console.log("Puntaje máximo alcanzado: 3");
      break;
    }
  }
  alert("¡Gracias por jugar " + jugador.alias + " 😊 !");
};

jugarPartida();
definirGanador();
nuevaPartida();
