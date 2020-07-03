function intercambiar(arreglo,i,j){
    let aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
function comparar(arreglo,i,j){
    let comparacion;
    if(arreglo[i]==arreglo[j]){
        comparacion = 0;
    }else{
        if(arreglo[i]<arreglo[j]){
            comparacion = -1;
        }else{
            comparacion = 1;
        }
    }
    return comparacion;
}
function burbuja(arreglo,cantidad){
    let i,j;
    for(i=2; i<=cantidad;i++){
        for(j=0;j<(cantidad-1);j++){
            if(comparar(arreglo,j,j+1)==1){
                intercambiar(arreglo,j,j+1);
            }
        }
        console.log(arreglo);
    }
}
function buscarBinario(valorBuscado,arreglo,lim){
    let posicion = buscarRecursivo(valorBuscado,arreglo,0,lim-1)
    return posicion;
}
function buscarRecursivo(valorBuscado,arreglo,izq,der){
    let posicion;
    if(izq<=der){
        let medio;
        medio = Math.floor((izq+der)/2);
        if(valorBuscado==arreglo[medio]){
            posicion = medio;
        }else{
            if(valorBuscado<arreglo[medio]){
                posicion = buscarRecursivo(valorBuscado,arreglo,izq,medio-1);
            }else{
                posicion = buscarRecursivo(valorBuscado,arreglo,medio+1,der);
            }
        }
    }else{
        posicion = -1
    }
    return posicion;
}
function imprimirBusqueda(posicion,buscado){
    if(posicion==-1){
        console.log("El numero", buscado,"no pudo ser encontrado.")
    }else{
        console.log("El numero",buscado,"fue encontrado y esta en la posicion", posicion+1);
    }
}
let readlineSync = require('readline-sync');
let dimension = 10;
let posicion;
let arreglo = new Array(dimension);

for(let i=0;i<dimension;i++){
    arreglo[i] = readlineSync.questionInt("Ingrese un numero: ");
}
valorBuscado = readlineSync.questionInt("Ingrese el numero que desea buscar: ");
burbuja(arreglo,dimension);
posicion = buscarBinario(valorBuscado,arreglo,dimension);
buscarRecursivo(valorBuscado,arreglo,0,dimension);
imprimirBusqueda(posicion,valorBuscado,arreglo);
