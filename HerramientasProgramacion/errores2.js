function obtenerPosicion(arreglo, stringIngresado){
    let indice = 0;
        while(indice < arreglo.length){
            if(arreglo[indice] == stringIngresado){
                return indice;
            }
            indice++
        }  
}