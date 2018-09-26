"use strict";
var heroe = "Ricardo Tapia(Robin)";
var edad = 30;
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
// Esta es la función que imprime al héroe.
// Se puede quitar los comentarios con removeComments = true . 
// Está en el tsconfig.json
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
