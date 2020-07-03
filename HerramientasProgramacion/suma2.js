let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Ingrese el primer número que quiera sumar: ");
console.log("el primer número es: ", primerNumero);
let segundoNumero = readlineSync.questionInt("Ingrese el segundo número que quiera sumar: ");
console.log("el segundo número es: ", segundoNumero );
let resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es: ", resultado);