"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log(" Se ha regenerado " + x);
    }
    // poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
