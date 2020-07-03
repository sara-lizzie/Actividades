let readlineSync = require('readline-sync');
let numeroDeseado = readlineSync.questionInt("Por favor introduzca su edad: ");
if(numeroDeseado>=20){
    console.log("Es mayor a 20");
}else{
    console.log("es menor");
}

if(numeroDeseado!= 20){
    console.log("No tenes 20");
}else{
    console.log("Tenes 20");
}