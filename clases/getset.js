"use strict";
var Vengador2 = /** @class */ (function () {
    function Vengador2(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Vengador2.prototype, "nombre", {
        // Controlan lo que entra o se pone
        // Get, obtener
        get: function () {
            console.log("Pasó por el get nombre()");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el vengador";
            }
        },
        // Set significa poner
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.log("El nombre debe de tener menos caracteres");
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Vengador2;
}());
var cíclope = new Vengador2("Wolverine");
console.log(cíclope.nombre);
cíclope.nombre = "Cíclope";
console.log(cíclope.nombre);
