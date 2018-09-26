"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmenpersonajes = /** @class */ (function (_super) {
    __extends(Xmenpersonajes, _super);
    function Xmenpersonajes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmenpersonajes;
}(Mutantes));
// No se puede crear instancias de una clase abstracta
var wolverine = new Xmenpersonajes("Wolverine", "Logan");
console.log(wolverine);
