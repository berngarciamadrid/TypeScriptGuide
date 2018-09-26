
abstract class Mutantes { // X-MEN!

    constructor( public nombre:string, public nombreReal:string) {

    }

}

class Xmenpersonajes  extends Mutantes {

}

// No se puede crear instancias de una clase abstracta
let wolverine = new Xmenpersonajes("Wolverine", "Logan");

console.log(wolverine);