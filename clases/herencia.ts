class Vengador {

    constructor ( public nombre:string, private nombreReal:string) {
    }

    protected getNombre():string {
        return this.nombre;
    }
}

class Xmen extends Vengador {
    constructor( nombre:string, nombreReal:string ) {
        // Llamar propiedades de la clase padre
        super(nombre, nombreReal);
    }

    public getNombre():string {
        // Con super también podemos acceder al método
        // de la clase padre. De un método protected
        return super.getNombre();
    }
}
let cíclope: Xmen = new Xmen("Cíclope", "Scott");
console.log(cíclope);
console.log(cíclope.getNombre());