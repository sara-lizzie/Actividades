"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(estaPrendido, velocidadActual) {
        this.estaPrendido = estadoActual;
        this.velocidadActual = velocidadInicial;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.subirVelocidad = function () {
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad actual: ");
        var aumentarVelocidad = readlineSync.questionInt("Introduzca la velocidad que desea aumentar: ");
        this.velocidadActual += aumentarVelocidad;
        console.log(this.velocidadActual);
    };
    Auto.prototype.BajarVelocidad = function () {
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad actual: ");
        var disminuirVelocidad = readlineSync.questionInt("Introduzca la velocidad que desea disminuir: ");
        this.velocidadActual -= disminuirVelocidad;
        console.log(this.velocidadActual);
    };
    Auto.prototype.elegirVelocidad = function () {
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad que desee: ");
    };
    return Auto;
}());
var estadoActual = false;
var velocidadInicial = 0;
var miAuto = new Auto(estadoActual, velocidadInicial);
console.log(miAuto);
miAuto.prenderApagar();
function elegir() {
    var tarea = readlineSync.question("Indique con la letra mayuscula que desea hacer: A:subir velocidad, B:bajar velocidad o C:elegir velocidad: ");
    if (tarea == "A") {
        miAuto.subirVelocidad();
    }
    else {
        if (tarea == "B") {
            miAuto.BajarVelocidad();
        }
        else {
            if (tarea == "C") {
                miAuto.elegirVelocidad();
            }
            else {
                console.log(elegir());
            }
        }
    }
}
console.log(elegir());
