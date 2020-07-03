let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Por favor ingrese la base: ");
let exponente = readlineSync.questionInt("Por favor ingrese el exponente: ");
let acum = 1;

let potencia = (base,exponente) =>{
    if(exponente>=0){
        for(i=1;i<=exponente;i++){
            acum=acum*base
        }
        return acum
    }
}
console.log("La potencia de ",base,"es : ",potencia(base,exponente));