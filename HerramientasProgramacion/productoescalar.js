let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let cuenta, indice;
let numero1 = new Array(dimension);
let numero2 = new Array(dimension);
let producto = 0;
for( indice = 0; indice < dimension; indice++){
    numero1[indice] = readlineSync.questionInt("Ingrese un numero del primer grupo: ");
    numero2[indice] = readlineSync.questionInt("Ingrese un numero del segundo grupo: ");
    cuenta = numero1[indice] * numero2[indice];
    producto = cuenta + producto;
}
console.log("El producto final del escalar es: ", producto);