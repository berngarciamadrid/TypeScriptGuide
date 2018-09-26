"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    // Métodos public, protected, private
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + ", " + this.equipo + ",\n        " + this.nombreReal;
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    // Solo se puede acceder en la clase o
    // a través de otro método público
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
antman.nombre = "Nick Fury";
// Public, puede ser acceder y cambiar en cualquier parte
// No podría cambiar las propiedades protected, a no ser que 
// sea dentro de una clase o sus herencias
// Private se puede cambiar solo dentro de la clase o
// del constructor
antman.bio();
console.log(antman);
