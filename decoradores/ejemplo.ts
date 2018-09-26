function planVillano ( constructor: Function ) {
    constructor.prototype.imprimirPlan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    }
}

@planVillano
class Foe {
    constructor( public nombre:string ) {

    }
}

let lex = new Foe("Lex Luthor");
(<any>lex).imprimirPlan();