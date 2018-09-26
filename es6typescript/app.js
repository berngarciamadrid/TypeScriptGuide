// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = 'Peter Parker',
    venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];
let [version1, version2, version3] = versiones;
console.log(versiones);

// var spiderman2099 = versiones[0];
// var spidergirl = versiones[1];
// var ultimate = versiones[2];

// Destructuracion de objetos?
let villanos = {
    venom: "Eddie Brock",
    carnage: "Cletus Kasady",
    sandman: "William Baker"
};
let { villano1, villano2, villano3 } = villanos;
console.log(villanos);

// var venom = villanos.venom;
// var carnage = villanos.carnage;
// var sandman = villanos.sandman;

// Ciclo for Of?
// for (var i = 0; i <= versiones.length - 1; i++) {
//     var spider = versiones[i];
//     console.log(spider);
// }
for (let version of versiones) {
    console.log(version);
}