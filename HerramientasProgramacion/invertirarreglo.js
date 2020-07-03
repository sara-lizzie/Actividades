let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Por favor introduzca la dimension del arreglo: ");
let numeros = new Array(dimension);
let indice;

for(indice = 0; indice < dimension; indice++){
    numeros[indice] = readlineSync.questionInt("Por favor introduzca un numero: ");
    
}

for(let indice2 = dimension - 1; indice2 >= 0; indice2--){
    console.log(numeros[indice2]);
}