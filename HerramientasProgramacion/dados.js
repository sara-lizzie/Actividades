let readlineSync = require('readline-sync');
let dados = readlineSync.questionInt("Cuántos dados desea tirar: ");
let probabilidades = 6**dados;
console.log("Las probabilidades de que salga un 6 son: 1/", probabilidades);