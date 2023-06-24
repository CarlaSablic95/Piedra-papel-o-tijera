let puntosUsuario = 0;
let puntosPC = 0;
let opciones = ["piedra", "papel", "tijera"];

function juegaPC() {
  eleccionPC = opciones[Math.floor(Math.random() * 3)];
  if (eleccionPC) {
    botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
    localStorage.setItem("eleccionPC", eleccionPC);
    mostrarEleccionPC.innerHTML = `<p class="fw-bold">La computadora eligió: ${localStorage.getItem(
      "eleccionPC"
    )}</p>`;
  }
  return eleccionPC;
}

const jugadas = [
  { ganador: "piedra", perdedor: "tijera" },
  { ganador: "papel", perdedor: "piedra" },
  { ganador: "tijera", perdedor: "papel" },
];

const compararJugadas = () => {
  let partidaGanada = jugadas.some(
    (jugada) =>
      jugada.ganador == btnEleccionUsuario && jugada.perdedor == eleccionPC
  );

  if (btnEleccionUsuario == eleccionPC) {
    puntosUsuario;
    puntosPC;
  } else if (partidaGanada) {
    puntosUsuario++;
    localStorage.setItem("puntosUsuario", puntosUsuario);
    ptoUsuario.innerHTML = `<h5 class="fw-bolder mb-0">${puntosUsuario}</h5>`;
  } else {
    puntosPC++;
    localStorage.setItem("puntosPC", puntosPC);
    ptoPC.innerHTML = `<h5 class="fw-bolder mb-0">${puntosPC}</h5>`;
  }
};

const definirGanador = () => {
  if (puntosUsuario === 5) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.classList.add("disabled");
    });
    anunciarGanador.innerHTML = `<h2 class="text-center"> Ganaste ${localStorage.getItem(
      "alias"
    )} 😎🏆</h2>`;

    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.classList.remove("d-none");
  } else if (puntosPC === 5) {
    anunciarGanador.innerHTML = `<h2 class="text-center"> Ganó la computadora 😩</h2>`;
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.classList.add("disabled");
    });

    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.classList.remove("d-none");
  }
};

const jugarPartida = () => {
  jugador.elegirOpcion((btnEleccionUsuario) => {
    juegaPC();
    compararJugadas();
    definirGanador();
  });
};

jugarPartida();

btnReiniciarJuego.addEventListener("click", () => {
  anunciarGanador.innerHTML = "";

  puntosUsuario = 0;
  puntosPC = 0;

  ptoUsuario.innerHTML = "0";
  ptoPC.innerHTML = "0";

  mostrarEleccion.innerHTML = "";
  mostrarEleccionPC.innerHTML = "";

  botonesEleccion.forEach((btnEleccion) => {
    btnEleccion.classList.remove("disabled");
  });
  botonesEleccionPC.classList.remove("opacity-50");

  btnReiniciarJuego.classList.add("d-none");

  botonesEleccionPC.src = "";
});
