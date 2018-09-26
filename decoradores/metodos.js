var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decoradores de métodos
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
var Billano = /** @class */ (function () {
    function Billano(nombre) {
        this.nombre = nombre;
    }
    Billano.prototype.blan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editable(false)
    ], Billano.prototype, "blan");
    return Billano;
}());
var tex = new Billano("Lex Luthor");
// console.log( tex.blan());
tex.blan = function () {
    console.log("Es cortar flores");
};
tex.blan();
