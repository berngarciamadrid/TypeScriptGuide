"use strict";
// let heroe: string ="Flash";
// function imprime_heroe(): string  {
//     return heroe;
// }
// let activar_batiseñal= function(): string  {
//     return "Batiseñal activada"
// }
// console.log( imprime_heroe );
// function nombreCompleto ( nombre:string, apellido:string ): string {
//     return nombre + ' ' + apellido
// }
// let nombre = nombreCompleto( "Bernabé ", "García Sánchez");
// console.log(nombre)
// Parámetros opcionales
function nombreCompleto(nombre, apellido) {
    if (!apellido) {
        return nombre;
    }
    else {
        return nombre + ' ' + apellido;
    }
}
var nombre = nombreCompleto("Barry");
console.log(nombre);
// Parámetros por defecto Al iniciar
function nombreDefecto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    console.log(capitalizado);
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombrePorDefecto = nombreDefecto("tony", "stark", true);
console.log(nombrePorDefecto);
// Parámetros REST
function nombre3(nombre) {
    var losDemas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemas[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemas.join(" ");
}
var otroSuperman = nombre3("Clark", "Joseph", "Kent");
var otroIronman = nombre3("Anthony", "Edward", "Tony", "Stark");
console.log(otroSuperman);
console.log(otroIronman);
