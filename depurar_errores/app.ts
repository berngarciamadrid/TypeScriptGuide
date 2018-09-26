let heroe:string ="Ricardo Tapia(Robin)";

let edad:number = 30;

let mensaje = imprimir(heroe, edad);
console.log(mensaje);

// Esta es la función que imprime al héroe.
// Se puede quitar los comentarios con removeComments = true . 
// Está en el tsconfig.json


function imprimir(heroe:string, edad:number):string {
    heroe =heroe.toLowerCase();
    edad = edad + 10;

    return heroe+ " " + edad;
}