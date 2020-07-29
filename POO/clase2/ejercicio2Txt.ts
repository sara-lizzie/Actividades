import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
let contenidoArreglo:string = fs.readFileSync('ejercicio2Txt.txt','utf-8');
let array:string[] = contenidoArreglo.split(" ");

function opciones (array:string[]){
    let opcion:string = readlineSync.question("Que opcion desea realizar? eliminar, buscar, actualizar, insertar mas o ver array? Inserte un '.' si quiere salir del programa: ");
    if(opcion == "eliminar"){
    console.log(eliminar(array));
    }else{
         if(opcion == "buscar"){
            console.log(buscar(array));
        }else{
            if(opcion == "actualizar"){
                console.log(actualizar(array));
            }else{
                if(opcion == "ver array"){
                    console.log(verArray(array));
                }else{
                    if(opcion == "insertar mas"){
                        console.log(insertarMas(array))
                    }else{
                        console.log("Adios.");
                    }   
                }
            }
        }
    }
}

console.log(opciones(array)); 

function eliminar (array:string[]):void{
    let eliminarPalabra: string = readlineSync.question("¿Que palabra desea eliminar? ");
    for(let i:number=0;i<array.length;i++){
        if(eliminarPalabra == array[i]){
            array.splice(i,1);
        }
    }
    console.log(array);
    console.log(opciones(array)); 
}
function buscar (array:string[]):void{
    let buscarPalabra: string = readlineSync.question("¿Que palabra desea buscar? ");
    for(let i:number=0;i<array.length;i++){
        if(buscarPalabra == array[i]){
            console.log(array[i]);
        }
    }
    return opciones(array); 
}
function actualizar (array:string[]):void{
    let palabraActualizar: string = readlineSync.question("¿Que palabra desea actualizar? ");
    for(let i:number=0;i<array.length;i++){
        if(palabraActualizar == array[i]){
            array[i] = readlineSync.question("Agregue la nueva palabra: ");
        }
    }
    console.log(array);
    console.log(opciones(array)); 
}

function insertarMas (array:string[]):void{
    let nuevaPalabra: string = readlineSync.question("Ingrese una nueva palabra: ");
    array.push(nuevaPalabra);
    console.log(array);
    console.log(opciones(array)); 
}

function verArray(array:string[]):void{
    console.log(array);
    console.log(opciones(array)); 
}
