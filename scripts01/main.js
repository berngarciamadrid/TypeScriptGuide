'use strict';
// Boolean
var esSuperman = true;
var esBatman;
var esSpiderman;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Lo tenemos crudo");
}
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
// Numbers 
var avengers = 5;
var villanos = 1;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Estamos jodidos");
}
// Strings
var linternaVerde = "Linterna Verde";
var batman = "Batman";
var volcanoNegro = "Volc\u00E1n Negro";
console.log("Los superh\u00E9roes son: " + linternaVerde + ", " + batman + " y " + volcanoNegro);
// Any
var vengador;
var pueblo;
var gente;
vengador = "Un vengador";
console.log(vengador.charAt(0));
vengador = true;
console.log(vengador);
vengador = 555000;
console.log(vengador);
