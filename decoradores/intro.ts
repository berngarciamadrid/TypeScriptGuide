// Decoradores de clase
function consola ( constructor:Function ) {
    console.log(constructor);
}

@consola
class Villano {
    constructor ( public nombre:string ) {

    }
}

// En Javascript
// function Villano ( nombre ) {
//     this.nombre = nombre
// }