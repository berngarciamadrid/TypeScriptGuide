"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vengador = /** @class */ (function () {
    function Vengador(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Vengador.prototype.getNombre = function () {
        return this.nombre;
    };
    return Vengador;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        // Llamar propiedades de la clase padre
        return _super.call(this, nombre, nombreReal) || this;
    }
    Xmen.prototype.getNombre = function () {
        // Con super también podemos acceder al método
        // de la clase padre. De un método protected
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Vengador));
var cíclope = new Xmen("Cíclope", "Scott");
console.log(cíclope);
console.log(cíclope.getNombre());
