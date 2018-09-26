'use strict';
var nombre1 = "Bruce";
var nombre2 = "Ricardo";
function getNombre() {
    return nombre1 + " " + nombre2;
}
var mensaje = "1. Esta es una l\u00EDnea airline_seat_legroom_normal\n2. Hola " + nombre1 + "\n3. Que tal " + nombre2 + ";\n4. Los nombres son : " + getNombre() + ";\n5. " + (5 + 7) + ";\n";
console.log(mensaje);
