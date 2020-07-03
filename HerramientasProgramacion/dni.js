let readlineSync = require('readline-sync');
let dni = readlineSync.questionInt("Ingrese numero de dni entre 0 y 99999999: ");
let arreglo = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

while((dni<0)||(dni>99999999)){
    console.log("Numero de dni invalido.");
    dni = readlineSync.questionInt("Ingrese numero de dni entre 0 y 99999999: ");
}
let valor = dni%23;
console.log(arreglo[valor]);