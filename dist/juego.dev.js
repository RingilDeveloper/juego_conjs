"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*   Variables  */
var BT_INIT = document.getElementsByClassName("inicio");
var YELLOW = document.getElementsByClassName("bot_color_yellow");
var GREEN = document.getElementsByClassName("bot_color_green");
var BLUE = document.getElementsByClassName("bot_color_blue");
var ORANGE = document.getElementsByClassName("bot_color_orange");

var Juego =
/*#__PURE__*/
function () {
  function Juego() {
    _classCallCheck(this, Juego);

    this.incializar();
  }

  _createClass(Juego, [{
    key: "incializar",
    value: function incializar() {
      BT_INIT;
    }
  }]);

  return Juego;
}();

function iniciarJuego() {
  var juego = new Juego();
}