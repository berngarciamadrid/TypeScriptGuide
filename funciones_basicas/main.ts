// let heroe: string ="Flash";

// function imprime_heroe(): string  {
//     return heroe;
// }

// let activar_batiseñal= function(): string  {
//     return "Batiseñal activada"
// }

// console.log( imprime_heroe );

// function nombreCompleto ( nombre:string, apellido:string ): string {
//     return nombre + ' ' + apellido
// }

// let nombre = nombreCompleto( "Bernabé ", "García Sánchez");
// console.log(nombre)

// Parámetros opcionales
function nombreCompleto ( nombre:string, apellido?:string ) :string{
    if ( !apellido ) {
        return nombre;
    } else {
        return nombre + ' ' + apellido;

    }
    
}

let nombre = nombreCompleto("Barry");

console.log(nombre);

// Parámetros por defecto Al iniciar
function nombreDefecto( nombre:string, apellido:string, capitalizado:boolean = false) {
    console.log(capitalizado);
    if(capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido)
    }else{
        return nombre + " " + apellido;
    }
    
}

function capitalizar ( palabra:string ) :string {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombrePorDefecto = nombreDefecto("tony", "stark", true);
console.log(nombrePorDefecto);

// Parámetros REST
function nombre3( nombre:string, ...losDemas: string[] ) :string {
    return nombre + " " + losDemas.join(" ");
}

let otroSuperman: string = nombre3("Clark", "Joseph", "Kent");
let otroIronman: string = nombre3("Anthony", "Edward", "Tony", "Stark");

console.log(otroSuperman);
console.log(otroIronman);