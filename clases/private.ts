class Apocalipsis {

    static instancia:Apocalipsis;

    private constructor(public nombre:string ) {

    }

    static llamarApocalipsis() {
        if ( !Apocalipsis.instancia ) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis, el único!!")
        }

        return Apocalipsis.instancia;
    }
}

let real = Apocalipsis.llamarApocalipsis();

// No se puede llamar así
// let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis falso");
