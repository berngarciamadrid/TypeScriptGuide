'use strict'

// Convención con la palabra la primera en mayúscula
type Heroe = {
    nombre:string, edad:number, 
    poderes:any[], getNombre:()=>string
}

// Objetos con tipos específicos
// El orden de las propiedades no importa, pero sus nombres sí
let flash: Heroe  = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getNombre() {
        return this.nombre;
    }
};

flash.getNombre()

// let flash: { nombre:string, edad:number, poderes:string[],
//     getNombre:()=>string} = {
//         nombre: "Barry Allen",
//         edad: 24,
//         poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
//         getNombre() {
//             return this.nombre;
//         }
//     };
    
//     flash.getNombre()


// El nombre de las propiedades importan
// flash = {
//     nombre: "Clark Kent",
//     edad: 500,
//     poderes: ["Poder volar"]
// }

// Tipos personalizados de objetos, con la palabra type

