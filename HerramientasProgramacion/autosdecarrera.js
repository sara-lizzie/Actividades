let readlineSync = require('readline-sync');
let primeraVuelta = readlineSync.questionInt("Por favor introduzca el tiempo de la primera vuelta: ");
let segundaVuelta = readlineSync.questionInt("Por favor introduzca el tiempo de la segunda vuelta: ");
let terceraVuelta = readlineSync.questionInt("Por favor introduzca el tiempo de la tercer vuelta: ");
let cuartaVuelta = readlineSync.questionInt("Por favor introduzca el tiempo de la cuarta vuelta: ");
let tiempoTotal = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
console.log("El tiempo total de las vueltas es: ", tiempoTotal);
console.log("El tiempo promedio de las vueltas es: ", tiempoTotal/4);
