let puntosUsuario = 0;
let puntosPC = 0;
let rondas = 0;
let opciones = ["piedra", "papel", "tijera"];

function juegaPC() {
  eleccionPC = opciones[Math.floor(Math.random() * 3)];
  if (eleccionPC) {
    botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
  }
  return eleccionPC;
}

const compararJugadas = (partidaGanada) => {
  fetch("./js/api.json")
  .then((respuesta) => respuesta.json())
  .then((jugadas) => {
      partidaGanada = jugadas.some((jugada) => jugada.ganador == btnEleccionUsuario && jugada.perdedor == eleccionPC);
 
  if (btnEleccionUsuario == eleccionPC) {
    puntosUsuario;
    puntosPC;
    rondaUsuario.innerHTML = `<p class="fw-bold">Empate 😬</p>`;
    rondaPC.innerHTML = `<p class="fw-bold">Empate 😬</p>`;
  } else if (partidaGanada) {
    puntosUsuario++;
    localStorage.setItem("puntos usuario", puntosUsuario);
    ptoUsuario.innerHTML = `<h5 class="fw-bolder mb-0">${localStorage.getItem("puntos usuario")}</h5>`;
    rondaUsuario.innerHTML = `<p class="fw-bold">Ganaste esta ronda 😎</p>`;
    rondaPC.innerHTML = `<p class="fw-bold">PC perdió esta ronda 💥</p>`;
  } else {
    puntosPC++;
    localStorage.setItem("puntos pc", puntosPC);
    ptoPC.innerHTML = `<h5 class="fw-bolder mb-0">${localStorage.getItem("puntos pc")}</h5>`;
    rondaUsuario.innerHTML = `<p class="fw-bold">Perdiste esta ronda 😭</p>`;
    rondaPC.innerHTML = `<p class="fw-bold">PC ganó esta ronda 🦾</p>`;
  }

  rondas++;
  rondasJugadas.classList.remove("d-none")
  rondasJugadas.innerHTML = `<h5 class="text-center">Ronda ${rondas}</h5>`;
})
};

const definirGanador = () => {
  if (puntosUsuario === 5) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.classList.add("disabled");
    });

    Swal.fire({
      html: `<h2> ${localStorage.getItem("alias")} ganaste esta partida 😎🏆</h2>`,
      showConfirmButton: true,
      backdrop: `
      rgb(0 0 0 / 40%)
      url("./assets/img/confetti.gif")
      left top`
    });

    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.classList.remove("d-none");

  } else if (puntosPC === 5) {
    Swal.fire({
      html: `<h2>PC ganó esta partida 😭</h2>`,
      showConfirmButton: true,
      backdrop: `
      rgb(0 0 0 / 40%)
      left top`
    })
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

// Reiniciar juego
btnReiniciarJuego.addEventListener("click", () => {
  puntosUsuario = 0;
  puntosPC = 0;
  rondas = 0;

  ptoUsuario.innerHTML = "0";
  ptoPC.innerHTML = "0";

  botonesEleccion.forEach((btnEleccion) => {
    btnEleccion.classList.remove("disabled");
  });
  botonesEleccionPC.classList.remove("opacity-50");
  botonesEleccionPC.src = "";

  btnReiniciarJuego.classList.add("d-none");
  rondasJugadas.innerHTML = `<h4>Empezar</h4>`;
  rondaUsuario.innerHTML = "";
  rondaPC.innerHTML = "";
});

// Abrir el modal con instrucciones del juego
btnInfo.addEventListener("click", () => {
  Swal.fire({
    title: 'Cómo jugar',
    html: `
    <p class="mb-1">🔹Cada jugador tiene su turno para elegir: <br><strong>piedra, papel o tijera.</strong></p>
    <p class="mb-1">🔹Piedra vence a tijera, papel vence a piedra y tijera vence a papel.</p>
    <p class="mb-1">🔹En cada turno los jugadores ganan 1 punto.</p>
    <p class="mb-1">🔹En caso de empate, ninguno gana puntos.</p>
    <p class="mb-1">🔹Quien primero obtenga los 5 puntos, <strong>GANA 🏆</strong></p>
    `,
    showConfirmButton: true, 
  })
});