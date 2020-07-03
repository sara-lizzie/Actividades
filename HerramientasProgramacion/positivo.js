let readlineSync = require('readline-sync');
let numeroP;
let positivos = 0;
let numeroTotal = 0;
let porcentaje =0;
while(numeroP != 0){
    numeroP = readlineSync.questionInt("Introduzca un número: ");
    if(numeroP != 0){
        numeroTotal = numeroTotal + 1
    }if(numeroP > 0){
         positivos = positivos + 1;
    }   
}
porcentaje = positivos*100/numeroTotal;
console.log("La cantidad de positivos es: ", positivos)
console.log("El porcentaje de positivos es: %", porcentaje);