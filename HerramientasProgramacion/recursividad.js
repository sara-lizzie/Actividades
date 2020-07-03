function imprimirArreglo(arreglo,indice,dimension){
    if(indice<dimension){
        console.log("posición", indice, "tiene",
        imprimirArreglo(arreglo,indice+1,dimension));
    }
    return arreglo [indice-1];
}

let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arreglo = new Array(dimension);
let i

for(i = 0; i < dimension; i++){
    arreglo[i] = readlineSync.questionInt("Introduzca un valor al arreglo: ");
}

imprimirArreglo(arreglo,0,dimension);