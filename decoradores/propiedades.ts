// Decoradores de métodos
function editable ( esEditable:boolean ) {
    return function( target:any, propertyKey:string, descriptor:PropertyDescriptor ) {
        descriptor.writable = esEditable;
    }
}

// Decoradores de propiedades
function editableProp ( esEditable:boolean ) {
    return function( target:any, nombrePropiedad:string ):any {
        let descriptor:PropertyDescriptor = {
            writable:esEditable
        }
        return descriptor;
    }
}

class Villano {
    @editableProp(true)
    public nombre:string
    constructor( nombre:string ) {
        this.nombre = nombre;

    }
    @editable(false)
    plan() {
        console.log("Es dominar el mundo");
    }
}

let lex = new Villano ("Lex Luthor");

console.log( lex);
