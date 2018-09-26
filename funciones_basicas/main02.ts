function sumar(a:number, b:number ):number {
    return a + b;
}

function saludar ( nombre:string ):string {
    return nombre;
}

function salvarMundo():void {
    console.log("El mundo está salvado!");
}

// Puede ser a y b o cualquiera
// let miFuncion: (a:number, b:number ) => number ;
let miFuncion: (x:string) => string;

// miFuncion = 10;

// miFuncion = sumar (5,5);

// miFuncion = saludar;
// miFuncion("Batman");
// console.log(miFuncion);

// miFuncion = salvarMundo();