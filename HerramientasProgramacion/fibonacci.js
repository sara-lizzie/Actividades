function calcularFibonacci(n){
    let resultado = 0;
    if(n > 1){
    resultado = calcularFibonacci(n-1) + calcularFibonacci(n-2)
    }else{
        resultado = n;
    }
    return resultado;
}

let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Ingrese un numero: ");

console.log("El numero fibonacci de ", n, "es", calcularFibonacci(n));