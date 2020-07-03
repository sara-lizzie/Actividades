let readlineSync = require('readline-sync');
let palabraClave; 
let contador = 1;

while(contador <=3 && palabraClave != "eureka"){
    palabraClave = readlineSync.question("Por favor ingrese la palabra clave: ");    
    if(palabraClave == "eureka"){
        console.log("Usted ha acertado.");
    }else{ 
        if(contador !=3);
        console.log("Usted no ha acertado")   
    }
    contador = contador + 1
}
if(palabraClave != "eureka"){
    console.log("Se te acabaron las oportunidades");
}