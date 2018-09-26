
// Objetos
type Auto = {
    carroceria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
    disparar?:()=>void
}
let batimovil: Auto= {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };

  let bumblebee: Auto= {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
//   let bumblebee {carroceria:string, modelo:string, antibalas:boolean, pasajeros:number} = {
//     carroceria: "Amarillo con negro",
//     modelo: "4x2",
//     antibalas: true,
//     pasajeros:4,
//     disparar(){ // El metodo disparar es opcional
//       console.log("Disparando");
//     }
//   };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type Villanos = {
      nombre:string,
      edad:number,
      mutante:boolean
  };
   let villanos: Villanos[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
      poder:string,
      estatura: number
  };
  

  let charles: Charles = {
    poder:"psiquico",
    estatura: 1.78
  };

  type Apocalipsis = {
    lider:boolean
    miembros: string[]
    };
  
   let apocalipsis: Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: string | Charles | Apocalipsis
  
  mystique = charles;
  mystique = apocalipsis;