let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Por favor introduzca la dimension del arreglo: ");
let numeros = new Array(dimension);
let positivos = 0;
let negativos = 0;
let cero = 0;

for(let indice = 0; indice < dimension; indice++){
    numeros[indice] = readlineSync.questionInt("Por favor introduzca un numero: ");
    if(numeros[indice] > 0){
        positivos = positivos + 1;
    }else{
        if(numeros[indice] < 0){
            negativos = negativos + 1;
        }else{
            if(numeros[indice] == 0){
                cero = cero + 1;
            }
        }
    }
}

console.log("Cantidad de números positivos :", positivos);
console.log("Cantidad de números negativos :", negativos);
console.log("Cantidad de ceros :", cero);