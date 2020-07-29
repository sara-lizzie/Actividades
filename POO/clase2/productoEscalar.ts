import * as readlineSync from 'readline-sync';
let dimension:number = readlineSync.questionInt("Ingrese la dimension de su arreglo: ");
let numero1:number[] = [dimension];
let numero2:number[] = [dimension];
let producto:number = 0;

function cargarArreglo (numero1,numero2) :number {
    for(let i:number=0; i < dimension; i++){
        numero1[i] = readlineSync.questionInt("Ingrese un numero del primer grupo: ");
        numero2[i] = readlineSync.questionInt("Ingrese un numero del segundo grupo: ");
        let cuenta:number = numero1[i] * numero2[i]
        producto = cuenta + producto
    }
    return producto;
}
console.log("El producto final del escalar es: ", cargarArreglo(numero1,numero2));
