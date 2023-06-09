let aliasJugador = prompt("Ingresá tu alias").toLowerCase();

const opciones = ["piedra", "papel", "tijera"];

let opcionJugador;
let eleccionPC;

class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  ingresarAlias() {
    while (aliasJugador == "" || aliasJugador == null) {
      aliasJugador = prompt("Ingresá tu alias").toLowerCase();
    }

    alert(aliasJugador + " bienvenido/a " + " a Piedra, papel o tijera\n¡A JUGAR! ✊✋✌️");
  }

  elegirOpcion() {
     opcionJugador = prompt(this.alias + " elegí piedra, papel o tijera").toLowerCase();

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
  eleccionPC = opciones[Math.floor(Math.random() * 3)];
  alert("PC eligió " + eleccionPC);
  return eleccionPC;
}

const jugadas = [
   {
    nombre: "piedra",
    gana: "tijera",
    pierdeContra: "papel",
    empata: "piedra"
  },
  {
    nombre: "papel",
    gana: "piedra",
    pierdeContra: "tijera",
    empata: "papel"
  },
 {
    nombre: "tijera",
    gana: "papel",
    pierdeContra: "piedra",
    empata: "tijera"
  }
];

const jugarPartida = (puntosJugador, puntosPC) => {

  puntosJugador = 0;
  puntosPC = 0;

  for (let i = 1; i <= 3; i++) {
    alert("TURNO " + i);
    const opcionJugador = jugadas.find((jugada) => jugada.nombre === jugador.elegirOpcion());

    const opcionPC = juegaPC();


    if(opcionJugador === opcionPC) {
      alert("¡EMPATE! 😬");
    } else if(jugadas.find((jugada) => jugada.nombre === opcionJugador)) {
      puntosJugador += 5;
      alert(jugador.alias + ": " + puntosJugador + " puntos");
    } else {
      puntosPC += 5;
      alert("PC: " + puntosPC + " puntos");
    }

}
  
};

jugarPartida();
