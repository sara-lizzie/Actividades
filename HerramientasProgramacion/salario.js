let readlineSync = require('readline-sync');
let salarioActual = readlineSync.questionInt("Por favor ingrese su salario:");

if(salarioActual<=0){
    console.log("Su salario es 0. Vuelva a intentar.");
}else{
    if(salarioActual<=15000){
    console.log("Usted recibe un aumento de un 20 %, su salario es: $", salarioActual*1.2);
    }else{
        if(salarioActual<=20000){
        console.log("Usted recibe un aumento de un 10 %, su salario es: $", salarioActual*1.1);
        }else{
            if(salarioActual<=25000){
            console.log("Usted recibe un aumento de un 5 %, su salario es: $", salarioActual*1.05);
        
             }else{
            console.log("Usted no recibe aumento.");
             }
        
        }     
    }
}        