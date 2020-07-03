function invertirArreglo(arreglo,indice,dimension){
    if(indice<dimension){
        console.log(invertirArreglo(arreglo,indice+1,dimension));
    }
    return arreglo[indice-1];
}

let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arreglo = new Array(dimension);
let indice;

for(indice = 0; indice < dimension; indice++){
    arreglo[indice] = readlineSync.questionInt("Ingrese un numero para cargar el arreglo: ");
}

invertirArreglo(arreglo,0,dimension);