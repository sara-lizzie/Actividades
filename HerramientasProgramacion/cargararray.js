let readlineSync = require('readline-sync');

let numeros = new Array(5);
let nombres = new Array (5);

// for(let i = 0; i < numeros.length; i++){
//     numeros[i] = readlineSync.questionInt("Ingrese un numero: ");
// }
// for(let i = 0; i < nombres.length; i++){
// nombres[i] = readlineSync.question("Ingrese un nombre: ");
// }

let cargarArreglo = (arreglo, tipoDeDato) =>{
    for(i=0; i < arreglo.length; i++){
        if(tipoDeDato == 'number'){
        arreglo[i] = readlineSync.questionInt("Ingrese un número :");
        }else{
            arreglo[i] = readlineSync.question("Ingrese un nombre: ")
        }    
    }
}

let mostrarArreglo = (arreglo) =>{
    for(i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

cargarArreglo(numeros,'number');
cargarArreglo(nombres,'string');

mostrarArreglo(numeros);
mostrarArreglo(nombres);