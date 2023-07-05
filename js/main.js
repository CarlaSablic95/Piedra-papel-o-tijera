let puntosUsuario = 0;
let puntosPC = 0;
const opciones = ["piedra", "papel", "tijera"];

function juegaPC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      eleccionPC = opciones[Math.floor(Math.random() * 3)];
      if (eleccionPC) {
        botonesEleccionPC.src = `./assets/img/${eleccionPC}.png`;
      }
      resolve(eleccionPC);
    }, 300);
  })
  
}

const compararJugadas = (partidaGanada) => {
  fetch("./js/jugadas.json")
    .then((respuesta) => respuesta.json())
    .then((jugadas) => {
      partidaGanada = jugadas.some((jugada) => jugada.ganador == btnEleccionUsuario && jugada.perdedor == eleccionPC);

      if (btnEleccionUsuario == eleccionPC) {
        puntosUsuario;
        puntosPC;
        resultadoRonda.classList.remove("d-none");
        resultadoRonda.innerHTML = `<p class="fw-bold mb-0 text-center">Empate 😬</p>`;
      } else if (partidaGanada) {
        puntosUsuario++;
        resultadoRonda.innerHTML = `<p class="fw-bold mb-0 text-center">Ganaste esta ronda 😎</p>`;
        resultadoRonda.classList.remove("d-none");
        localStorage.setItem("puntos usuario", puntosUsuario);
        ptoUsuario.innerHTML = `<h5 class="fw-bolder mb-0 text-center">${localStorage.getItem("puntos usuario")}</h5>`;
      } else {
        puntosPC++;
        resultadoRonda.innerHTML = `<p class="fw-bold mb-0">PC ganó esta ronda 🦾</p>`;
        resultadoRonda.classList.remove("d-none");
        localStorage.setItem("puntos pc", puntosPC);
        ptoPC.innerHTML = `<h5 class="fw-bolder mb-0">${localStorage.getItem("puntos pc")}</h5>`;
      };
    })
};

const definirGanador = () => {
  if (puntosUsuario === 5) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.classList.add("disabled");
    });
    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.classList.remove("d-none");

    Swal.fire({
      html: `<h2> ${localStorage.getItem("alias")} ganaste la partida 🏆</h2>`,
      showConfirmButton: true,
      backdrop: `
      rgb(0 0 0 / 40%)
      url("./assets/img/confetti.gif")
      left top`,
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      }
    });

  } else if (puntosPC === 5) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.classList.add("disabled");
    });
    botonesEleccionPC.classList.add("opacity-50");
    btnReiniciarJuego.classList.remove("d-none");

    Swal.fire({
      html: `<h2>PC ganó la partida 😭</h2>`,
      showConfirmButton: true,
      backdrop: `
      rgb(0 0 0 / 40%)
      left top`,
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      }
    })
  }
};

const jugarPartida = () => {
  jugador.elegirOpcion((btnEleccionUsuario) => {
    juegaPC().then((eleccionPC) => {
      compararJugadas();
      definirGanador();
    });
  });
};

jugarPartida();

// Reiniciar juego
btnReiniciarJuego.addEventListener("click", () => {
  puntosUsuario = 0;
  puntosPC = 0;

  ptoUsuario.innerHTML = "0";
  ptoPC.innerHTML = "0";

  botonesEleccion.forEach((btnEleccion) => {
    btnEleccion.classList.remove("disabled");
  });
  botonesEleccionPC.classList.remove("opacity-50");
  botonesEleccionPC.src = "";
  resultadoRonda.classList.add("d-none");
  btnReiniciarJuego.classList.add("d-none");

});

// Abrir el modal con instrucciones del juego
btnInfo.addEventListener("click", () => {
  Swal.fire({
    title: 'Cómo jugar',
    html: `
    <p class="mb-1">🔹Cada jugador tiene su turno para elegir: <br><strong>piedra, papel o tijera.</strong></p>
    <p class="mb-1">🔹<strong>Jugadas ganadoras:</strong><br> Piedra vence a tijera, papel vence a piedra y tijera vence a papel.</p>
    <p class="mb-1">🔹Quien elija la jugada ganadora, suma 1 punto.</p>
    <p class="mb-1">🔹En caso de empate, ninguno suma puntos.</p>
    <p class="mb-1">🔹Quien primero obtenga los 5 puntos, <strong>GANA 🏆</strong></p>
    `,
    showConfirmButton: true,
  })
});