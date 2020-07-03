function imprimirArreglo(arreglo,indice,dimension){
    for(indice = 0; indice<dimension;indice++){
        console.log(arreglo[indice]);
    }
}
function invertirArreglo(arreglo,indiceIzq,indiceDer){
    let aux;
    if(indiceIzq<indiceDer){
        aux = arreglo[indiceIzq];
        arreglo[indiceIzq] = arreglo[indiceDer];
        arreglo[indiceDer] = aux;
        invertirArreglo(arreglo,indiceIzq+1,indiceDer-1);
    }
}
let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arreglo = new Array(dimension);

for(let i = 0; i < dimension; i++){
    arreglo[i] = i*15;
}
invertirArreglo(arreglo,0,dimension);
imprimirArreglo(arreglo,0,dimension);