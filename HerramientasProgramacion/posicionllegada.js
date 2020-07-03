let readlineSync = require('readline-sync');
let posicionLlegada = readlineSync.questionInt("Por favor indique la posición de llegada: ");
if(posicionLlegada > 0){
    switch(posicionLlegada){
        case 1:
            console.log("Entregar medalla de oro.");
            break;
        case 2:
            console.log("Entregar medalla de plata.");
            break;
        case 3:
            console.log("Entregar medalla de bronce.");
            break;
         default:
            console.log("Entregar mención de participación.");    
   }
}else{
    console.log("La posición de llegada no es válida.");
}