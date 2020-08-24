/*   Variables  */
const BT_INIT = document.getElementById("init");
const YELLOW = document.getElementById("amarillo");
const GREEN = document.getElementById("verde");
const BLUE = document.getElementById("azul");
const ORANGE = document.getElementById("naranja");

class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel();
  }

  inicializar() {
    BT_INIT.style.display = "none";
    this.nivel = 5;
    this.colores = {
      YELLOW,
      GREEN,
      BLUE,
      ORANGE,
    };
  }
  generarSecuencia() {
    this.secuencia = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.iluminarSecuencia();
  }
  transformarNumero(num) {
    switch (num) {
      case 0:
        return "YELLOW";
      case 1:
        return "GREEN";
      case 2:
        return "BLUE";
      case 3:
        return "ORANGE";
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i <= this.nivel; i++) {
      console.log(i);
      console.log(this.secuencia);
      const color = this.transformarNumero(this.secuencia[i]);
      this.iluminarColor(color);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add("ligth");
    setTimeout(() => this.apagarColor(color), 400);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("ligth");
  }
}

function iniciarJuego() {
  window.juego = new Juego();
}
