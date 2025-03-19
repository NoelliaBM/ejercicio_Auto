"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAño) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;
    }
    Auto.prototype.acelerar = function () {
        console.log("apretar el pedal del acelerador");
    };
    ;
    Auto.prototype.frenar = function () {
        console.log("apretar el pedal del freno");
    };
    ;
    return Auto;
}());
exports.Auto = Auto;
