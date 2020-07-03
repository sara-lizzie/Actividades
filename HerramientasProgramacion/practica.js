let readlineSync = require('readline-sync');
let edad = readlineSync.questionInt("Por favor ingrese su edad: ");
let altura = readlineSync.questionInt("Por favor ingrese su altura: ");

if(edad>=18 && altura>= 170){
    console.log("Usted puede ingresar a la atracción.");
}else{
    console.log("Usted NO puede ingresar a la atracción.");
}