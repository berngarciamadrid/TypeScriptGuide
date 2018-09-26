'use strict';
// Objetos con tipos específicos
// El orden de las propiedades no importa, pero sus nombres sí
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
flash.getNombre();
