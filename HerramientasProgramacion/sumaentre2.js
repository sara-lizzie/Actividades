let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt("Por favor ingrese un número: ");
let numero2 = readlineSync.questionInt("Por favor ingrese otro número: ");
let i;
let suma = 0;
for(i=numero1; i<=numero2; i++){
    suma = suma + i;
}
console.log(suma);