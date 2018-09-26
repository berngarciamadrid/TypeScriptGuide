'use strict'

let nombre = "Tony";
if( true ) {
    let nombre = "Bruce";
    console.log(nombre);
    if (true) {
        let nombre = "Ricardo";
        console.log(nombre);
    }
}

console.log(nombre);