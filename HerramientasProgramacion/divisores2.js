let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Por favor introduzca un numero: ");
let acum = 0;
let cantidadDeDivisores = (numero) =>{
    for(i=1;i<=numero;i++){
        if(numero%i==0){
             acum = acum + 1;
        }
    }
    return acum;
}

console.log("La cantidad de divisores de ", numero,"es :", cantidadDeDivisores(numero));