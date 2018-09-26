class Avenger {

    constructor(nombre: string, poder: string) {
    }
}

let hulk = new Avenger( "Hulk", "Super Fuerza");

class AvengerVolador extends Avenger {
    constructor( nombre: string, poder: string, vuela: boolean ) {
        super( nombre, poder);
        
    }

}

let falcon = new AvengerVolador("Falcon", "Volar", true);
console.log(hulk);
console.log(falcon);