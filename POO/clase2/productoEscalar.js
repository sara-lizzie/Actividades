"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var dimension = readlineSync.questionInt("Ingrese la dimension de su arreglo: ");
var numero1 = [dimension];
var numero2 = [dimension];
var producto = 0;
function cargarArreglo(numero1, numero2) {
    for (var i = 0; i < dimension; i++) {
        numero1[i] = readlineSync.questionInt("Ingrese un numero del primer grupo: ");
        numero2[i] = readlineSync.questionInt("Ingrese un numero del segundo grupo: ");
        var cuenta = numero1[i] * numero2[i];
        producto = cuenta + producto;
    }
    return producto;
}
console.log("El producto final del escalar es: ", cargarArreglo(numero1, numero2));

