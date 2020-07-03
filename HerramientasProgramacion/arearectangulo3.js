let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Introduzca la base del rectángulo: ");
let altura = readlineSync.questionInt("Introduzca la altura del rectángulo: ");
let area = base*altura;
console.log(area);