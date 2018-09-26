"use strict";
// <> tipo genérico
function regresar(arg) {
    return arg;
}
console.log(regresar(15.46789).toFixed(2));
console.log(regresar("Ricardo Tapia"));
console.log(regresar(new Date()));
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"
};
// Flexibilidad en funciones genéricas
console.log(functionGenerica(deadpool.nombre));
// Arrays genéricos
var heroes = ["Flash", "Batman", "Spiderman"];
heroes.push("Superman");
var enemigos = ["Lex Luthor", "Flash Gordon"];
// Clases genéricas. En clase genérica no se permiten boolean
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        // Castear +
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
;
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
