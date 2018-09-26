"use strict";
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis, el único!!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var real = Apocalipsis.llamarApocalipsis();
// No se puede llamar así
// let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis falso");
