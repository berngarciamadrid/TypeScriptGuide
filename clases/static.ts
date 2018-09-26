class Xmenespecial {

    // Para que sirven los métodos estáticos
    static nombre:string = "Wolverine";
    constructor() {

    }

    // Se pueden llamar los métodos o propiedades
    // estáticas sin hacer una nueva estancia, un new
    static crearXmen() {
        console.log("Se creo un método estático");
        return new Xmenespecial();
    }
};

// console.log(Xmenespecial.nombre);
let wolverine2 = Xmenespecial.crearXmen();
console.log(wolverine2);
