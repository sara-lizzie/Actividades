let readlineSync = require('readline-sync');
let llegadaColectivo;
console.log("Esperando el colectivo");
llegadaColectivo = readlineSync.question("Llegó el colectivo? Y/N: ");
while(llegadaColectivo == "N"){
    console.log("Siga esperando.");
    llegadaColectivo = readlineSync.question("Llegó el colectivo? Y/N: ");
}      
console.log("Llegó el colectivo.");  