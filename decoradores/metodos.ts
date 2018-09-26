// Decoradores de métodos
function editable ( esEditable:boolean ) {
    return function( target:any, propertyKey:string, descriptor:PropertyDescriptor ) {
        descriptor.writable = esEditable;
    }
}

class Billano {
    constructor( public nombre:string ) {

    }
    @editable(false)
    blan() {
        console.log("Es dominar el mundo");
    }
}

let tex = new Billano ("Lex Luthor");

// console.log( tex.blan());
tex.blan = function() {
    console.log("Es cortar flores");
}

tex.blan();