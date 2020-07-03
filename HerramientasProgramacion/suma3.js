let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Ingrese el primer número que quiera sumar: ");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo número que quiera sumar: ");
let resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es: ", resultado);