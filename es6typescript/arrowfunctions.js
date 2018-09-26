'use strict';
var _this = this;
// let sumar = (a:number,b:number) => (a+b);
// console.log(sumar(5,5));
// let darOrden_hulk = (orden: string) =>  `Hulk ${orden}`;
// console.log(darOrden_hulk("Smassh"));
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        setTimeout(function () {
            console.log(_this.nombre + "smash");
        }, 1000);
    }
};
// Las funciones de flecha no cambian el objeto this
capitan_america.darOrden_hulk();
