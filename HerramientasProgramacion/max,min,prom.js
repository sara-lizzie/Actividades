readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese un numero: ");
let numeroM = numero;
let numerom = numero;
let suma = 0;
let cantidad = 0;
while(numero!=0){ 
    if(numero>numeroM){
        numeroM = numero;
    }else{
        if(numero < numerom){
            numerom = numero 
        }    
    }
    cantidad = cantidad + 1;
    suma = suma + numero;
    numero = readlineSync.questionInt("Ingrese un número: ");     
}
let promedio = suma/cantidad;
console.log("El numero mayor es: ",numeroM);
console.log("El numero menor es: ", numerom);
console.log("El promedio es: ", promedio);