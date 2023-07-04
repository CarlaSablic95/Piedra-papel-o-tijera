class Jugador {
  constructor(alias) {
    this.alias = alias;
  }

  elegirOpcion(callback) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.addEventListener("click", (e) => {
        btnEleccionUsuario = e.currentTarget.id;
        localStorage.setItem("eleccionUsuario", btnEleccionUsuario);
        callback(btnEleccionUsuario);
      });
    });
  }
}

const jugador = new Jugador(aliasJugador);
