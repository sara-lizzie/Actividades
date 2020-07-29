"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var fs = require("fs");
var contenidoArreglo = fs.readFileSync('ejercicio2Txt.txt', 'utf-8');
var array = contenidoArreglo.split(" ");
function opciones(array) {
    var opcion = readlineSync.question("Que opcion desea realizar? eliminar, buscar, actualizar, insertar mas o ver array? Inserte un '.' si quiere salir del programa: ");
    if (opcion == "eliminar") {
        console.log(eliminar(array));
    }
    else {
        if (opcion == "buscar") {
            console.log(buscar(array));
        }
        else {
            if (opcion == "actualizar") {
                console.log(actualizar(array));
            }
            else {
                if (opcion == "ver array") {
                    console.log(verArray(array));
                }
                else {
                    if (opcion == "insertar mas") {
                        console.log(insertarMas(array));
                    }
                    else {
                        console.log("Adios.");
                    }
                }
            }
        }
    }
}
console.log(opciones(array));
function eliminar(array) {
    var eliminarPalabra = readlineSync.question("¿Que palabra desea eliminar? ");
    for (var i = 0; i < array.length; i++) {
        if (eliminarPalabra == array[i]) {
            array.splice(i, 1);
        }
    }
    console.log(array);
    console.log(opciones(array));
}
function buscar(array) {
    var buscarPalabra = readlineSync.question("¿Que palabra desea buscar? ");
    for (var i = 0; i < array.length; i++) {
        if (buscarPalabra == array[i]) {
            console.log(array[i]);
        }
    }
    return opciones(array);
}
function actualizar(array) {
    var palabraActualizar = readlineSync.question("¿Que palabra desea actualizar? ");
    for (var i = 0; i < array.length; i++) {
        if (palabraActualizar == array[i]) {
            array[i] = readlineSync.question("Agregue la nueva palabra: ");
        }
    }
    console.log(array);
    console.log(opciones(array));
}
function insertarMas(array) {
    var nuevaPalabra = readlineSync.question("Ingrese una nueva palabra: ");
    array.push(nuevaPalabra);
    console.log(array);
    console.log(opciones(array));
}
function verArray(array) {
    console.log(array);
    console.log(opciones(array));
}
