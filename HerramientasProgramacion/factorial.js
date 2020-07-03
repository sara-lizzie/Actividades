function calcularFactorial(numero){
    let resultado = 1;
    if(numero==0){
        resultado = 1;
    }else{
        resultado = numero * calcularFactorial(numero - 1);
    }
    console.log(resultado);
    return resultado;
}

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese el numero que desea factoriar: ");

console.log("El factorial de ", numero, "es: ", calcularFactorial(numero));