class Vengador2 {
    private _nombre:string;

    constructor (  nombre:string) {
        this._nombre = nombre;
    }

    // Controlan lo que entra o se pone
    
    // Get, obtener
    get nombre():string {
        console.log("Pasó por el get nombre()");
        if (this._nombre) {
            return this._nombre;
        } else {
            return "No tiene un nombre el vengador";
        }
    }

    // Set significa poner
    set nombre ( nombre: string) {
        if ( nombre.length <= 3) {
            console.log("El nombre debe de tener menos caracteres");
            return;
        }
        this._nombre = nombre;
    }

}


let cíclope: Vengador2 = new Vengador2("Wolverine");
console.log(cíclope.nombre);
cíclope.nombre = "Cíclope";
console.log(cíclope.nombre);
