
class Avenger {

    public nombre: string = "Antman";
    protected equipo: string = "";
    private nombreReal: string = "";
    private puedePelear: boolean = false;
    private peleasGanadas: number = 0;

    constructor( nombre:string, equipo:string, nombreReal: string) {

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    // Métodos public, protected, private
    public bio():void {
        let mensaje:string = `${this.nombre}, ${this.equipo},
        ${this.nombreReal}`;
        console.log(mensaje);

    }

    public cambiaEquipoPublico(nuevoEquipo:string) {
        return this.cambiarEquipo(nuevoEquipo);
    }
    // Solo se puede acceder en la clase o
    // a través de otro método público
    private cambiarEquipo( nuevoEquipo: string ): boolean {
        if ( nuevoEquipo === this.equipo ) {
            return false;
        } else {
            return true;
        }
    }
}

let antman: Avenger = new Avenger( "Antman", "cap", "Scott Lang" );
antman.nombre = "Nick Fury";
// Public, puede ser acceder y cambiar en cualquier parte
// No podría cambiar las propiedades protected, a no ser que 
// sea dentro de una clase o sus herencias
// Private se puede cambiar solo dentro de la clase o
// del constructor
antman.bio();


console.log(antman);