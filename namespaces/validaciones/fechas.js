"use strict";
var Validaciones;
(function (Validaciones) {
    // Con la palabra export se pueden utilizar fuera
    // del namespace
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
