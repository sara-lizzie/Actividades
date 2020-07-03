let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension de su arreglo: ");
let numero1 = new Array(dimension);
let numero2 = new Array(dimension);
let producto = 0;

let cargarArreglo = (dimension) => {
    for(let i=0; i < dimension; i++){
        numero1[i] = readlineSync.questionInt("Ingrese un numero del primer grupo: ");
        numero2[i] = readlineSync.questionInt("Ingrese un numero del segundo grupo: ");
        let cuenta = numero1[i] * numero2[i]
        producto = cuenta + producto
    }
    return producto;
}
console.log("El producto final del escalar es: ", cargarArreglo(dimension));
