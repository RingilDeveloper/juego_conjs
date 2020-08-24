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

var Juego =
/*#__PURE__*/
function () {
  function Juego() {
    _classCallCheck(this, Juego);

    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel();
  }

  _createClass(Juego, [{
    key: "inicializar",
    value: function inicializar() {
      BT_INIT.style.display = "none";
      this.nivel = 5;
      this.colores = {
        YELLOW: YELLOW,
        GREEN: GREEN,
        BLUE: BLUE,
        ORANGE: ORANGE
      };
    }
  }, {
    key: "generarSecuencia",
    value: function generarSecuencia() {
      this.secuencia = new Array(10).fill(0).map(function (n) {
        return Math.floor(Math.random() * 4);
      });
    }
  }, {
    key: "siguienteNivel",
    value: function siguienteNivel() {
      this.iluminarSecuencia();
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
    key: "iluminarSecuencia",
    value: function iluminarSecuencia() {
      var _this = this;

      var _loop = function _loop(i) {
        console.log(i);
        console.log(_this.secuencia);

        var color = _this.transformarNumero(_this.secuencia[i]);

        _this.iluminarColor(color);

        setTimeout(function () {
          return _this.iluminarColor(color);
        }, 1000 * i);
      };

      for (var i = 0; i <= this.nivel; i++) {
        _loop(i);
      }
    }
  }, {
    key: "iluminarColor",
    value: function iluminarColor(color) {
      var _this2 = this;

      this.colores[color].classList.add("ligth");
      setTimeout(function () {
        return _this2.apagarColor(color);
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