let readlineSync = require('readline-sync');
let dados = readlineSync.questionInt("Cuantos dados desea tirar: ");
let probabilidades = 1;

for(let i = 1; i <= dados; i++){
   probabilidades = probabilidades*6;
}
console.log("Las probablidades de sacar doble 6 son: 1/", probabilidades);
