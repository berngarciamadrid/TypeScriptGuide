function planFoe ( constructor: Function ) {
    constructor.prototype.imprimirPlan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    }
}

function imprimible( constructor: Function ) {
    constructor.prototype.imprimir = function() {
        console.log(this);
    }
}
// Decoradores anidados
@imprimible
@planVillano
class Enemy {
    constructor( public nombre:string ) {

    }
}
let enemy = new Enemy("Lex Luthor");
(<any>enemy).imprimirPlan();
(<any>enemy).imprimir();