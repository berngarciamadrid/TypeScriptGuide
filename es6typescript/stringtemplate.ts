'use strict'

let nombre1: string = "Bruce";
let nombre2: string = "Ricardo";

function getNombre() : string {
    return `${ nombre1 } ${ nombre2 }`
}

let mensaje: string = `1. Esta es una línea airline_seat_legroom_normal
2. Hola ${ nombre1 }
3. Que tal ${ nombre2 };
4. Los nombres son : ${ getNombre()};
5. ${ 5 + 7 };
`;

console.log(mensaje);

