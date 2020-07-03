let readlineSync = require("readline-sync");
let numeroM = 0;
let numero1 = readlineSync.questionInt("Ingrese un numero: ");    
numeroM = numero1;
while(numero1!=0){ 
    numero1 = readlineSync.questionInt("Ingrese un número: ");  
    if(numero1>numeroM){
        numeroM = numero1;
    }
}
console.log("El número mayor es: ", numeroM);
