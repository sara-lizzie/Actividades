let readlineSync = require("readline-sync");
let numerom = 0;
let numero1 = readlineSync.questionInt("Ingrese un numero: ");    
numerom = numero1;
while(numero1!=0){ 
    numero1 = readlineSync.questionInt("Ingrese un número: ");  
    if(numero1!=0){  
        if(numero1 < numerom){
            numerom = numero1 
        }        
    } 
}
console.log("El número menor es: ", numerom);
