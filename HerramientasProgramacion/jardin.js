let readlineSync = require('readline-sync');
let cantidad = readlineSync.questionInt("Ingrese la cantidad de alumnos: ");

let asignarAula = (cantidad) =>{
    if(cantidad<=30){
        console.log("El aula que toca es la amarilla.");
    }else{
        if(cantidad<=35){
            console.log("El aula que toca es la verde.");
        }else{
            if(cantidad<=40){
                console.log("El aula que toca es la azul.");
            }else{
                console.log("El número asignado es invalido.");
            }
            
        }
    }
}

console.log(asignarAula(cantidad));