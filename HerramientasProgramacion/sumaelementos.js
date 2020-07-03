let readlineSync =require('readline-sync');
let dimensionArreglo = readlineSync.questionInt("Por favor ingrese la dimension de su arreglo: ");
let sumaElementos = new Array(dimensionArreglo);
let suma = 0;
for(let indice=0; indice<dimensionArreglo; indice++){
    sumaElementos [indice] = readlineSync.questionInt("Ingrese un numero: ");
    suma = suma + sumaElementos[indice];
}
 
console.log("La suma total de los numeros ingresados es: ", suma);
