class Jugador {
  constructor(aliasJugador) {
    this.aliasJugador = aliasJugador;
  }

  elegirOpcion(callback) {
    botonesEleccion.forEach((btnEleccion) => {
      btnEleccion.addEventListener("click", (e) => {
        btnEleccionUsuario = e.currentTarget.id;
        callback(btnEleccionUsuario);
      });
    });
  }
}

const jugador = new Jugador(aliasJugador);
