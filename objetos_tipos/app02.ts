'use strict'

type Machote = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre: () => string
};

// Multiples tipos permitidos con la tubería
let loquesea: string | number | Machote = "Fernando";

// loquesea = {
//     nombre: "Flash",
//     edad: 56
// }

let cosa:any =123;

if (typeof cosa === "number") {
    console.log("Cosa es un número");
}
