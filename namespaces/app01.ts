// Namespace
// namespace Validaciones {

    // export function validarTexto ( texto: string ) :boolean {
    //     if (texto.length > 3 ) {
    //         return true;
    //     }
    //     return false;
    // }
    
    // Con la palabra export se pueden utilizar fuera
    // del namespace
    // export function validarFecha ( fecha: Date ) :boolean {
    //     if ( isNaN( fecha.valueOf())) {
    //         return false;
    //     }
    //     return true;
    // }

// }


// let hoy = new Date();

// console.log(
//     Validaciones.validarTexto("All"),
//     Validaciones.validarFecha( hoy )
// );
// Para importar namespaces:
/// <reference path="validaciones/textos.ts" />
/// <reference path="validaciones/fechas.ts" />

if (Validaciones.validarTexto("Barry Allen")) {
    console.log("El texto es válido")
} else {
        console.log("El texto no es válido");
}
