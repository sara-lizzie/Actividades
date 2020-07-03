let readlineSync = require('readline-sync');
let arreglo1 = new Array(6);
let arreglo2 = new Array(6);
let suma = new Array(6);
for(let indice = 0; indice < 6; indice++){
    arreglo1[indice] = readlineSync.questionInt("Introduzca un numero:");
    arreglo2[indice] = readlineSync.questionInt("Introduzca un numero:");
    suma[indice] = arreglo2[indice] + arreglo1[indice];
}
console.log(suma);