let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese el numero que desea saber si es par: ");
let resultado = numero%2;

if(numero==0){
    console.log("El numero ingresado es 0.");
}else{ if(resultado==0){
    console.log("El numero ingresado es par.");
}      else{
     console.log("El numero ingresado es impar.");
}}