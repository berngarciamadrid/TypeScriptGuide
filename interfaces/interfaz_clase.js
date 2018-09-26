"use strict";
var Mutante = /** @class */ (function () {
    function Mutante() {
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return Mutante;
}());
var lobezno = new Mutante();
// extends means:
// The new class is a child. 
// It gets benefits coming with inheritance. 
// It has all properties, methods as its parent. 
// It can override some of these and implement new, 
// but the parent stuff is already included.
// implements means:
// The new class can be treated as the same "shape",
//  while it is not a child. It could be passed to any method 
//  where the Person is required, regardless of having 
//  different parent than Person
// More ...
