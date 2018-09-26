// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Automóvil {
    encender:boolean;
    velocidadMaxima:number;
    acelerar():void;

}
function conducirBatimovil( auto: Automóvil ):void{
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  
  let batimóvil:Automóvil = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... run!!!");
    }
  }
  
  // Cree una interfaz con que permita utilizar el siguiente objeto
  // utilizando propiedades opcionales
  
  interface Guasón  {
    reir: boolean;
    comer?:boolean;
    llorar?:boolean;
  }

  let guasón: Guasón = {
      reir: true,
      comer: true,
      llorar: false
  }
  
  function reir( guasón:boolean ):void{
    if( guasón.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion
  interface tipoCiudad {
      (ciudadanos:string []): number

  }

  let ciudadGotica:tipoCiudad;

  ciudadGotica = function ciudadGotica( ciudadanos:string[] ):number{
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
 interface Datos {
     nombre:string,
     edad:number,
     sexo:number,
     estadoCivil:string,
     imprimirBio() : void

 }

 class Información implements Datos {
     nombre: string;
     edad: number;
     sexo: number;
     estadoCivil: string;
     imprimirBio() {
         console.log( "una breve descripción" )
     }

 }
  