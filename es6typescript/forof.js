"use strict";
var thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};
var hierro = {
    nombre: "Ironman",
    arma: "Armorsuit"
};
var capitan = {
    nombre: "Capitán América",
    arma: "Escudo"
};
var personajes = [thor, hierro, capitan];
// for ( let i in personajes ) {
// }
// for ( let i = 0; i <= personajes.length -1 ; i++) {
// }
for (var _i = 0, personajes_1 = personajes; _i < personajes_1.length; _i++) {
    var personaje = personajes_1[_i];
    console.log(personaje.nombre, personaje.arma);
}
