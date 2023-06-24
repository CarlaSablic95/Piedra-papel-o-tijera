class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  ingresarAlias() {
    btnOK.addEventListener("click", () => {
      if (aliasJugador.value == "" || aliasJugador.value == null) {
        errorAlias.innerHTML = `<p class="text-danger fw-bold">¡Para poder jugar debés ingresar un alias!</p>`;
      } else {
        const lowerCaseAlias = aliasJugador.value.toLowerCase();
        localStorage.setItem("alias", lowerCaseAlias);
        contenedorAlias.innerHTML = `<h2>${localStorage.getItem("alias")}</h2>`;
        errorAlias.innerHTML = "";
        contenedorInput.innerHTML = "";
        contenedorJuego.classList.remove("d-none");
      }
    });
  }

  elegirOpcion(callback) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.addEventListener("click", (e) => {
        btnEleccionUsuario = e.currentTarget.id;
        localStorage.setItem("eleccionUsuario", btnEleccionUsuario);
        mostrarEleccion.innerHTML = `<p class="fw-bold">Elegiste: ${localStorage.getItem(
          "eleccionUsuario"
        )}</p>`;
        callback(btnEleccionUsuario);
      });
    });
  }
}

const jugador = new Jugador(aliasJugador.value);
jugador.ingresarAlias();
