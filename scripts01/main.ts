'use strict'

 // Boolean
let esSuperman: boolean = true;
let esBatman: boolean;
let esSpiderman: true;

if ( esSuperman ) {
    console.log("Estamos salvados");
} else {
    console.log("Lo tenemos crudo");
}

esSuperman = convertirClark();

function convertirClark() {
    return false;
}

// Numbers 
let avengers: number = 5;
let villanos: number = 1;
let otros = 2;

if( avengers > villanos ) {
    console.log("Estamos salvados");
} else {
    console.log("Estamos jodidos");
}

// Strings
let linternaVerde: string = "Linterna Verde";
let batman: string ="Batman";
let volcanoNegro: string = `Volcán Negro`;

console.log(`Los superhéroes son: ${linternaVerde}, ${batman} y ${volcanoNegro}`);

// Any
let vengador;
let pueblo;
let gente;

vengador = `Un vengador`;
console.log(vengador.charAt(0));
vengador = true;
console.log(vengador);
vengador = 555000;
console.log(vengador);




