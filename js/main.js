let btnOK = document.getElementById("btn-ok");
let contenedorInput = document.getElementById("contenedor-input");

let aliasJugador = document.getElementById("alias");
let errorAlias = document.getElementById("error-alias");
let contenedorAlias = document.getElementById("contenedor-alias");

let ptoJugador = document.getElementById("pto-jugador");
let ptoPC = document.getElementById("pto-pc");


let botonesEleccion = document.querySelectorAll(".btn-eleccion");
let btnEleccionUsuario;
let mostrarEleccion = document.getElementById("mostrar-eleccion");



let opciones = ["piedra", "papel", "tijera"];
let opcionPC;
let mostrarEleccionPC = document.getElementById("mostrar-eleccion-pc");

let contenedorJuego = document.getElementById("contenedor-juego");

let botonesEleccionPC = document.getElementById("img-opcion-pc");



let puntosJugador = 0;
let puntosPC = 0;
let anunciarGanador = document.getElementById("anunciar-ganador");

let btnReiniciarJuego = document.getElementById("btn-reinicio");

class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  ingresarAlias() {
    btnOK.addEventListener("click", () => {
      if ((aliasJugador.value == "") || (aliasJugador.value == null)) {
        errorAlias.innerHTML = `<p class="text-danger fw-bold">¡Para poder jugar debés ingresar un alias!</p>`
      } else {
        contenedorAlias.innerHTML = `<h2>${aliasJugador.value.toLowerCase()}</h2>`;
        localStorage.setItem("alias", aliasJugador.value);
        errorAlias.innerHTML = "";
        contenedorInput.innerHTML = "";
        contenedorJuego.classList.remove("d-none");
      }
    });
  }

  elegirOpcion(callback) {
    botonesEleccion.forEach(btnEleccion => {
      btnEleccion.addEventListener("click", (e) => {
        btnEleccionUsuario = e.currentTarget.id;
        localStorage.setItem("eleccionUsuario", btnEleccionUsuario);
        mostrarEleccion.innerHTML = `<p class="fw-bold">Elegiste: ${btnEleccionUsuario}</p>`;
        callback(btnEleccionUsuario);
      })
    });
  }
}

const jugador = new Jugador(aliasJugador.value);
jugador.ingresarAlias();


// ELECCION PC
function juegaPC() {
  opcionPC = opciones[Math.floor(Math.random() * 3)];
  switch (opcionPC) {
    case "piedra":
      botonesEleccionPC.src = `./assets/img/${opcionPC}.png`;
      localStorage.setItem("opcionPC", opcionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${opcionPC}</p>`;
      break;

    case "papel":
      botonesEleccionPC.src = `./assets/img/${opcionPC}.png`;
      localStorage.setItem("opcionPC", opcionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${opcionPC}</p>`;
      break;

    case "tijera":
      botonesEleccionPC.src = `./assets/img/${opcionPC}.png`;
      localStorage.setItem("opcionPC", opcionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${opcionPC}</p>`;
      break;

    default:
      break;
  }

  return opcionPC;
}


const jugadas = [
  { ganador: "piedra", perdedor: "tijera" },
  { ganador: "papel", perdedor: "piedra" },
  { ganador: "tijera", perdedor: "papel" }
];



const compararJugadas = () => {
  let partidaGanada = jugadas.some((jugada) => jugada.ganador == btnEleccionUsuario && jugada.perdedor == opcionPC);

  if (partidaGanada) {
    puntosJugador++;
    localStorage.setItem("puntosJugador", puntosJugador);
    ptoJugador.innerHTML = `<h5 class="fw-bolder mb-0">${puntosJugador}</h5>`;
  } else {
    puntosPC++;
    localStorage.setItem("puntosPC", puntosPC);
    ptoPC.innerHTML = `<h5 class="fw-bolder mb-0">${puntosPC}</h5>`;
  }

  if (puntosJugador === 5) {
    botonesEleccion.forEach(btnEleccion => {
      btnEleccion.classList.add("disabled");
    });
    anunciarGanador.innerHTML = `<h2 class="text-center"> Ganastee ${aliasJugador.value} 😎🏆</h2>`;

    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.className = "d-block";

  } else if (puntosPC === 5) {
    anunciarGanador.innerHTML = `<h2 class="text-center"> Ganó la computadora 😩</h2>`;
    botonesEleccion.forEach(btnEleccion => {
      btnEleccion.classList.add("disabled");
    });

    botonesEleccionPC.classList.add("opacity-50");

    btnReiniciarJuego.classList.remove("d-none");
  }
}

const jugarPartida = () => {
  jugador.elegirOpcion((btnEleccionUsuario) => {
    juegaPC();
    compararJugadas();
  });
}

jugarPartida();

btnReiniciarJuego.addEventListener("click", () => {
  anunciarGanador.innerHTML = "";

  puntosJugador = 0;
  puntosPC = 0;

  ptoJugador.innerHTML = "0";
  ptoPC.innerHTML = "0";

  mostrarEleccion.innerHTML = "";
  mostrarEleccionPC.innerHTML = "";

  botonesEleccion.forEach(btnEleccion => {
    btnEleccion.classList.remove("disabled");
  });
  botonesEleccionPC.classList.remove("opacity-50");

  btnReiniciarJuego.classList.add("d-none", "btn", "btn-lg", "bg-button", "text-white");
});