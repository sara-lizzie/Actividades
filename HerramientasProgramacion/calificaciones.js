let readlineSync = require('readline-sync');
let nombre = readlineSync.question("Por favor ingrese su nombre: ");
while(nombre != ""){
    let notaPractica = readlineSync.questionInt("Por favor ingrese la nota practica: ");
    let notaProblema = readlineSync.questionInt("Por favor ingrese la nota de problemas: ");
    let notaTeoria = readlineSync.questionInt("Por favor ingrese la nota de teoria: ");
    if(notaPractica>10 || notaProblema >10 || notaTeoria>10){
        console.log("valor invalido, vuelva a intentar.")
        nombre = readlineSync.question("Por favor ingrese su nombre: ")
    }else{
        let notaFinal = notaPractica*0.1 + notaProblema*0.5 + notaTeoria*0.4;
        console.log("La nota final para ", nombre," es :", notaFinal);
        nombre = readlineSync.question("Por favor ingrese su nombre: ");
    }
}    