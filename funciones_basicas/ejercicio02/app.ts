// Funciones Básicas
function sumar( a:number, b:number ) :number {
  return a + b;
}

console.log(sumar(10,10));

let contar = function( heroes: string[] ) : number{
  return heroes.length;
}
let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));

//Parametros por defecto
function llamarBatman( llamar:boolean = true ):void {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman(  );

// Rest?
function unirheroes( ...personas:string[] ){
  return personas.join(", ");
}

let personas: string[] = ["Pepe", "Juanito", "Jaimito", "Jorgito"];
console.log(personas);
// console.log(unirheroes(personas));


// Tipo funcion
function noHaceNada( número:number, texto:string, booleano: boolean, vector:any [] ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco : ( n: number, t:string, b:boolean, a:any[])=> void;

// noHaceNadaTampoco = noHaceNada;