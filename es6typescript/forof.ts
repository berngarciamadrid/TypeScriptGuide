let thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};

let hierro = {
    nombre: "Ironman",
    arma: "Armorsuit"
}

let capitan = {
    nombre: "Capitán América",
    arma: "Escudo"
}

let personajes = [thor, hierro, capitan];

// for ( let i in personajes ) {
// }

// for ( let i = 0; i <= personajes.length -1 ; i++) {
// }

for ( let personaje of personajes ) {
    console.log(personaje.nombre, personaje.arma);
}