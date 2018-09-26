"use strict";
// Crear interfaces
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimóvil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
var guasón = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guasón) {
    if (guasón.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica;
ciudadGotica = function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
};
var Información = /** @class */ (function () {
    function Información() {
    }
    Información.prototype.imprimirBio = function () {
        console.log("una breve descripción");
    };
    return Información;
}());
