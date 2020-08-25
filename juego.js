/*   Variables  */
const BT_INIT = document.getElementById("init");
const YELLOW = document.getElementById("amarillo");
const GREEN = document.getElementById("verde");
const BLUE = document.getElementById("azul");
const ORANGE = document.getElementById("naranja");
const ULTIMO_NIVEL = 5;
class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel(), 500);
  }

  inicializar() {
    this.inicializar = this.inicializar.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.toggleBtn();
    this.nivel = 1;
    this.colores = {
      YELLOW,
      GREEN,
      BLUE,
      ORANGE,
    };
  }
  toggleBtn() {
    if (BT_INIT.classList.contains("ocultar")) {
      BT_INIT.classList.remove("ocultar");
    } else {
      BT_INIT.classList.add("ocultar");
    }
  }
  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agrgarEventoClick();
  }
  agrgarEventoClick() {
    this.colores.BLUE.addEventListener("click", this.elegirColor);
    this.colores.YELLOW.addEventListener("click", this.elegirColor);
    this.colores.GREEN.addEventListener("click", this.elegirColor);
    this.colores.ORANGE.addEventListener("click", this.elegirColor);
  }
  elimarClick() {
    this.colores.BLUE.removeEventListener("click", this.elegirColor);
    this.colores.YELLOW.removeEventListener("click", this.elegirColor);
    this.colores.GREEN.removeEventListener("click", this.elegirColor);
    this.colores.ORANGE.removeEventListener("click", this.elegirColor);
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
  transformarColor(color) {
    switch (color) {
      case "YELLOW":
        return 0;
      case "GREEN":
        return 1;
      case "BLUE":
        return 2;
      case "ORANGE":
        return 3;
    }
  }
  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformarColor(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        swal("Platzi", "siguiente nivel", "success");
        this.elimarClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoJuego();
        } else {
          setTimeout(this.siguienteNivel.bind(this), 2000);
        }
      }
    } else {
      this.perdioJuego();
    }
  }
  perdioJuego() {
    swal("Platzi", "Ohh! lo siento perdiste :(", "error").then(() => {
      this.elimarClick();
      this.inicializar();
    });
  }
  ganoJuego() {
    swal("platzi", "Ganaste!", "success").then(() => {
      this.inicializar();
    });
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumero(this.secuencia[i]);
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
