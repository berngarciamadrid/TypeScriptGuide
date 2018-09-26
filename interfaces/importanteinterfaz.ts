// Interfaz básica y Propiedad opcional
interface XMen {
    nombre:string;
    // regenerar?( nombreReal:string ):void; Método opcional
    // poder?:string Propiedad opcional
    regenerar( nombreReal:string ):void;
}
function enviarMision (xmen: XMen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}

function enviarCuartel ( xmen: XMen ) {
    console.log("Enviando al cuartel: " + xmen.nombre)
}

let wolverine:XMen = {
    nombre: "Wolverine",
    regenerar(x:string) {
        console.log(` Se ha regenerado ${ x }`);
    }

    // poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);

