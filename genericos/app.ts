// <> tipo genérico

function regresar<T> ( arg:T ) {
    return arg;
}

console.log( regresar(15.46789).toFixed(2));
console.log( regresar ("Ricardo Tapia"));
console.log( regresar ( new Date()));

function functionGenerica<F>(arg:F) {
    return arg;
}

type Héroe = {
    nombre:string;
    nombreReal:string;
}

type Villano = {
    nombre:string;
    poder:string;
}

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"

};

// Flexibilidad en funciones genéricas
console.log( functionGenerica<Héroe> (deadpool.nombre));

// Arrays genéricos

let heroes: Array<string> = ["Flash", "Batman", "Spiderman"];

heroes.push("Superman");

let enemigos:string[] = ["Lex Luthor", "Flash Gordon"];

// Clases genéricas. En clase genérica no se permiten boolean
class Cuadrado<G extends number | string> {
    base:G;
    altura:G;
    area():number{
        // Castear +
        return +this.base *  +this.altura;
    }
};

let cuadrado = new Cuadrado();

cuadrado.base = 10;
cuadrado.altura = 10;

console.log(cuadrado.area());