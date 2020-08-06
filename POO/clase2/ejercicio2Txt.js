"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var fs = require("fs");
var contenidoArreglo = fs.readFileSync('ejercicio2Txt.txt', 'utf-8');
var arrayPalabras = contenidoArreglo.split(" ");
function opciones(arrayPalabras) {
    var opcion;
    while (opcion != ".") {
        opcion = readlineSync.question("Que opcion desea realizar? eliminar, buscar, actualizar, insertar mas o ver array? Inserte un '.' si quiere salir del programa: ");
        if (opcion == "eliminar") {
            console.log(eliminar(arrayPalabras));
        }
        else {
            if (opcion == "buscar") {
                console.log(buscar(arrayPalabras));
            }
            else {
                if (opcion == "actualizar") {
                    console.log(actualizar(arrayPalabras));
                }
                else {
                    if (opcion == "ver array") {
                        console.log(verArray(arrayPalabras));
                    }
                    else {
                        if (opcion == "insertar mas") {
                            console.log(insertarMas(arrayPalabras));
                        }
                    }
                }
            }
        }
    }
}
function eliminar(arrayPalabras) {
    var eliminarPalabra = readlineSync.question("¿Que palabra desea eliminar? ");
    for (var i = 0; i < arrayPalabras.length; i++) {
        if (eliminarPalabra == arrayPalabras[i]) {
            arrayPalabras.splice(i, 1);
        }
    }
    return arrayPalabras;
}
function buscar(arrayPalabras) {
    var buscarPalabra = readlineSync.question("¿Que palabra desea buscar? ");
    for (var i = 0; i < arrayPalabras.length; i++) {
        if (buscarPalabra == arrayPalabras[i]) {
            console.log(arrayPalabras[i] + " esta en la posicion " + i + " del arreglo.");
        }
    }
}
function actualizar(arrayPalabras) {
    var palabraActualizar = readlineSync.question("¿Que palabra desea actualizar? ");
    for (var i = 0; i < arrayPalabras.length; i++) {
        if (palabraActualizar == arrayPalabras[i]) {
            arrayPalabras[i] = readlineSync.question("Agregue la nueva palabra: ");
        }
    }
    return arrayPalabras;
}
function insertarMas(arrayPalabras) {
    var nuevaPalabra = readlineSync.question("Ingrese una nueva palabra: ");
    while (nuevaPalabra != ".") {
        arrayPalabras.push(nuevaPalabra);
        nuevaPalabra = readlineSync.question("Ponga un punto cuando termine de ingresar palabras. Ingrese una nueva palabra: ");
    }
    return arrayPalabras;
}
function verArray(arrayPalabras) {
    return arrayPalabras;
}
console.log(opciones(arrayPalabras));
