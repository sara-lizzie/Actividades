let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt("Por favor ingrese el primer numero: ");
let numero2 = readlineSync.questionInt("Por favor ingrese el segundo numero: ");
let numero3 = readlineSync.questionInt("Por favor ingrese el tercer numero: ");

if(numero1>numero2){
    console.log("El numero mayor es :", numero1);
}else{
    console.log(" ");
}if(numero2>numero3){
    console.log("El numero mayor es :", numero2);
}else{
    console.log(" ");
}if(numero3>numero2){
    console.log("El numero mayor es :", numero3);
}else{
    console.log(" ");
}