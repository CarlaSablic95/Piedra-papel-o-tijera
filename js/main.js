let puntosJugador = 0;
let puntosPC = 0;

function juegaPC() {
  eleccionPC = opciones[Math.floor(Math.random() * 3)];
  switch (eleccionPC) {
    case "piedra":
      botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
      localStorage.setItem("eleccionPC", eleccionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${eleccionPC}</p>`;
      break;

    case "papel":
      botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
      localStorage.setItem("eleccionPC", eleccionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${eleccionPC}</p>`;
      break;

    case "tijera":
      botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
      localStorage.setItem("eleccionPC", eleccionPC);
      mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${eleccionPC}</p>`;
      break;

    default:
      break;
  }

  return eleccionPC;
}


const jugadas = [
  { ganador: "piedra", perdedor: "tijera" },
  { ganador: "papel", perdedor: "piedra" },
  { ganador: "tijera", perdedor: "papel" }
];



const compararJugadas = () => {
  let partidaGanada = jugadas.some((jugada) => jugada.ganador == btnEleccionUsuario && jugada.perdedor == eleccionPC);
  if(btnEleccionUsuario === eleccionPC) {
    puntosJugador;
    puntosPC;
  } else if (partidaGanada) {
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

  btnReiniciarJuego.classList.add("d-none");
});