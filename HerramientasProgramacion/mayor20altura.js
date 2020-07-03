let readlineSync = require('readline-sync');
let edad = readlineSync.questionInt("Por favor introduzca su edad: ");
let altura = readlineSync.questionInt("Por favor introduzca su altura: ");

console.log(edad>=18);
console.log(altura>=165);
console.log(edad>=18 && altura>=165);

if(edad>=18 && altura>=165){
    console.log("Puede pasar");
}else{
    console.log("No puede pasar");
}