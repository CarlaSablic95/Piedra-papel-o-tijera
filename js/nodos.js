let btnOK = document.getElementById("btn-ok");
let contenedorInput = document.getElementById("contenedor-input");

let aliasJugador = document.getElementById("alias");
let errorAlias = document.getElementById("error-alias");
let contenedorAlias = document.getElementById("contenedor-alias");

let botonesEleccion = document.querySelectorAll(".btn-eleccion");
let btnEleccionUsuario;
let mostrarEleccion = document.getElementById("mostrar-eleccion");

let opciones = ["piedra", "papel", "tijera"];
let eleccionPC;
let mostrarEleccionPC = document.getElementById("mostrar-eleccion-pc");
let botonesEleccionPC = document.getElementById("img-opcion-pc");

let ptoJugador = document.getElementById("pto-jugador");
let ptoPC = document.getElementById("pto-pc");

let contenedorJuego = document.getElementById("contenedor-juego");

let anunciarGanador = document.getElementById("anunciar-ganador");
let btnReiniciarJuego = document.getElementById("btn-reinicio");