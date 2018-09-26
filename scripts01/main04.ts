'use strict'
// Aserciones de tipo
let cualquierValor:any = "Cualquier cosa";

// Permitirme utilizar una variable de cualquier tipo
let largoDelString:number = (<string>cualquierValor).length;

console.log(largoDelString);

