let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionInt("Por favor introduzca el tiempo de la primera vuelta: ");
let vuelta2 = readlineSync.questionInt("Por favor introduzca el tiempo de la segunda vuelta: ");
let vuelta3 = readlineSync.questionInt("Por favor introduzca el tiempo de la tercer vuelta: ");
let vuelta4 = readlineSync.questionInt("Por favor introduzca el tiempo de la cuarta vuelta: ");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("El tiempo total de las vueltas es: ", tiempoTotal);
console.log("El tiempo promedio de las vueltas es: ", tiempoTotal/4);
