"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > exports.MENSAJES.length) {
        return "El código de error no existe";
    }
    return exports.MENSAJES[numError];
}
exports.obtenerError = obtenerError;
