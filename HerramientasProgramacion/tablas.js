let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt("Por favor ingrese el número que desea multiplicar: ");
let numero2 = readlineSync.questionInt("Por favor ingrese hasta qué número desea multiplicar: ");
let i=1;
let multiplicacion;
for(i;i<=numero2;i++){
     multiplicacion = numero1 * i; 
     console.log(numero1,"x",i,"=", multiplicacion)
}

