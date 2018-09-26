'use strict'

// Enum
enum Volumen {
    min = 1,
    medio = 5,
    max = 10

}

let audio:number = Volumen.medio;

console.log( audio );

// Void, va a regresar "vacío" . No regresa nada (no return)
function llamar_batman(): void {
    console.log( `Mostrar la batiseñal `);
}

let mensaje = llamar_batman();

// Never. Representa un tipo de valor que nunca puede suceder
function error (mensaje):never {
    throw new Error( mensaje );
};

error("Error crítico...línea 11 alcanzada");


