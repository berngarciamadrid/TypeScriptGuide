"use strict";
var Xmenespecial = /** @class */ (function () {
    function Xmenespecial() {
    }
    // Se pueden llamar los métodos o propiedades
    // estáticas sin hacer una nueva estancia, un new
    Xmenespecial.crearXmen = function () {
        console.log("Se creo un método estático");
        return new Xmenespecial();
    };
    // Para que sirven los métodos estáticos
    Xmenespecial.nombre = "Wolverine";
    return Xmenespecial;
}());
;
// console.log(Xmenespecial.nombre);
var wolverine2 = Xmenespecial.crearXmen();
console.log(wolverine2);
