'use strict';
// Enum
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
// Void, va a regresar "vacío" . No regresa nada (no return)
function llamar_batman() {
    console.log("Mostrar la batise\u00F1al ");
}
var mensaje = llamar_batman();
// Never. Representa un tipo de valor que nunca puede suceder
function error(mensaje) {
    throw new Error(mensaje);
}
;
error("Error crítico...línea 11 alcanzada");
