//ALGORITMO SECRETO
let readlineSync = require('readline-sync');
let elemento, arreglo, numero, ocu;
elemento = readlineSync.questionInt('Ingrese el tamaño del arreglo: ');
arreglo = new Array(elemento);
cargar(arreglo, elemento);
numero = readlineSync.questionInt('Ingrese número: ');
ocu = metodo(arreglo,elemento,numero);
// console.log("El número "+numero+" ... "+ocu);
mostrar(arreglo,elemento);

function cargar(arreglo,elemento) {
    console.log("arreglo: ", arreglo ,"elemento: ", elemento);
    for (let i=0; i<elemento; i++)
        arreglo[i]=Math.floor(Math.random()*100);
    
}
function mostrar(arreglo,elemento) {
    let c=0;        
    for (let i=0; i<elemento; i++)
    console.log("c=arreglo[i]+c",c=arreglo[i]+c);
         
    console.log(c);
}
function metodo(arreglo,elemento,numero) {
    let ocu=0;
    for (let i=0; i<elemento; i++)
        if (arreglo[i]==numero)
        console.log("entra en el if, v[i]==n",arreglo[i]==numero);
            ocu++
}
