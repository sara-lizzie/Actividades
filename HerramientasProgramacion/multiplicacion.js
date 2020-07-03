let readlineSync = require('readline-sync');
let numeros1 = new Array(3);
let numeros2 = new Array(3);
let resultado = new Array(3);

let cargarNumeros = (numeros1,numeros2) => {
    for(let i = 0; i < 3; i++){
        numeros1[i] = readlineSync.questionInt("Ingrese un numero del primer grupo que quiera multiplicar:");
        numeros2[i] = readlineSync.questionInt("Ingrese un numero del segundo grupo que quiera multiplicar: ");
    }
}


let multiplicarArreglo = (numeros1,numeros2,resultado) =>{
    for(let i = 0; i < 3; i++){
        resultado[i] = numeros1[i] * numeros2[i];
    console.log(resultado[i]);
    }
}
cargarNumeros(numeros1,numeros2);
console.log(multiplicarArreglo(numeros1,numeros2,resultado));