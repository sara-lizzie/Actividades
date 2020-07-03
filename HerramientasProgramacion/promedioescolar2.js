let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la cantidad de alumnos: ");
let notas1 = new Array(dimension);
let notas2 = new Array(dimension);
let notas3 = new Array(dimension);
let nombre = new Array(dimension);
let promedio = 0;
function cargarAlumnos(nombre,dimension,notas1,notas2,notas3){
    for(let i = 0; i < dimension; i++){
    nombre[i] = readlineSync.question("Ingrese el nombre del alumno: ");
    notas1[i] = readlineSync.questionInt("Ingrese nota primer trimestre: ");
    notas2[i] = readlineSync.questionInt("Ingrese nota segundo trimestre:");
    notas3[i] = readlineSync.questionInt("Ingrese nota tercer trimestre: ");      
    }
}
cargarAlumnos(nombre,dimension,notas1,notas2,notas3);
let nombre2 = readlineSync.question("Ingrese el nombre que quiere encontrar: ");

let buscarNombre = (nombre2) => {
    for(let ii = 0; ii < dimension; ii++){
        if(nombre2 == nombre[ii]){
        nombre[ii] = nombre2;
        promedio = notas1[ii]+notas2[ii]+notas3[ii];
        }
    }
   return promedio/3; 
}

console.log("El promedio anual de ", nombre2, "es :", buscarNombre(nombre2));