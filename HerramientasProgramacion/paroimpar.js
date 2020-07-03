let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Por favor ingrese el numero que quiere saber si es par o impar: ");
while(numero == 0){
    console.log("El número ingresado no es válido.");
    numero = readlineSync.questionInt("Por favor vuelva a ingresar el número: ");
}    
let resultado = numero%2;
    if(resultado == 0){
    console.log("El número ingresado es par");
    }else{
        if(resultado != 0){
        console.log("El número ingresado es impar");
        }
    }