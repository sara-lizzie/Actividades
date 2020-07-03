let readlineSync = require('readline-sync');
let notas = new Array(3);
let nombre = readlineSync.question("Ingrese el nombre del alumno: ");
let promedio = 0;
for(let i = 0; i < 3; i++){
    notas[i] = readlineSync.questionInt("Ingrese la nota del alumno: ");
    promedio = notas[i] + promedio;
}
let resultado = promedio/3;
console.log("El promedio anual de ", nombre, "es:", resultado);
