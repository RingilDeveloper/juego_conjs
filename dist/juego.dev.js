"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*   Variables  */
var BT_INIT = document.getElementById("init");
var YELLOW = document.getElementById("amarillo");
var GREEN = document.getElementById("verde");
var BLUE = document.getElementById("azul");
var ORANGE = document.getElementById("naranja");
var ULTIMO_NIVEL = 5;

var Juego =
/*#__PURE__*/
function () {
  function Juego() {
    _classCallCheck(this, Juego);

    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel(), 500);
  }

  _createClass(Juego, [{
    key: "inicializar",
    value: function inicializar() {
      this.inicializar = this.inicializar.bind(this);
      this.siguienteNivel = this.siguienteNivel.bind(this);
      this.elegirColor = this.elegirColor.bind(this);
      this.toggleBtn();
      this.nivel = 1;
      this.colores = {
        YELLOW: YELLOW,
        GREEN: GREEN,
        BLUE: BLUE,
        ORANGE: ORANGE
      };
    }
  }, {
    key: "toggleBtn",
    value: function toggleBtn() {
      if (BT_INIT.classList.contains("ocultar")) {
        BT_INIT.classList.remove("ocultar");
      } else {
        BT_INIT.classList.add("ocultar");
      }
    }
  }, {
    key: "generarSecuencia",
    value: function generarSecuencia() {
      this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(function (n) {
        return Math.floor(Math.random() * 4);
      });
    }
  }, {
    key: "siguienteNivel",
    value: function siguienteNivel() {
      this.subnivel = 0;
      this.iluminarSecuencia();
      this.agrgarEventoClick();
    }
  }, {
    key: "agrgarEventoClick",
    value: function agrgarEventoClick() {
      this.colores.BLUE.addEventListener("click", this.elegirColor);
      this.colores.YELLOW.addEventListener("click", this.elegirColor);
      this.colores.GREEN.addEventListener("click", this.elegirColor);
      this.colores.ORANGE.addEventListener("click", this.elegirColor);
    }
  }, {
    key: "elimarClick",
    value: function elimarClick() {
      this.colores.BLUE.removeEventListener("click", this.elegirColor);
      this.colores.YELLOW.removeEventListener("click", this.elegirColor);
      this.colores.GREEN.removeEventListener("click", this.elegirColor);
      this.colores.ORANGE.removeEventListener("click", this.elegirColor);
    }
  }, {
    key: "transformarNumero",
    value: function transformarNumero(num) {
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
  }, {
    key: "transformarColor",
    value: function transformarColor(color) {
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
  }, {
    key: "elegirColor",
    value: function elegirColor(ev) {
      var nombreColor = ev.target.dataset.color;
      var numeroColor = this.transformarColor(nombreColor);
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
  }, {
    key: "perdioJuego",
    value: function perdioJuego() {
      var _this = this;

      swal("Platzi", "Ohh! lo siento perdiste :(", "error").then(function () {
        _this.elimarClick();

        _this.inicializar();
      });
    }
  }, {
    key: "ganoJuego",
    value: function ganoJuego() {
      var _this2 = this;

      swal("platzi", "Ganaste!", "success").then(function () {
        _this2.inicializar();
      });
    }
  }, {
    key: "iluminarSecuencia",
    value: function iluminarSecuencia() {
      var _this3 = this;

      var _loop = function _loop(i) {
        var color = _this3.transformarNumero(_this3.secuencia[i]);

        setTimeout(function () {
          return _this3.iluminarColor(color);
        }, 1000 * i);
      };

      for (var i = 0; i < this.nivel; i++) {
        _loop(i);
      }
    }
  }, {
    key: "iluminarColor",
    value: function iluminarColor(color) {
      var _this4 = this;

      this.colores[color].classList.add("ligth");
      setTimeout(function () {
        return _this4.apagarColor(color);
      }, 400);
    }
  }, {
    key: "apagarColor",
    value: function apagarColor(color) {
      this.colores[color].classList.remove("ligth");
    }
  }]);

  return Juego;
}();

function iniciarJuego() {
  window.juego = new Juego();
}