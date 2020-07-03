let readlineSync = require('readline-sync');
function cargarClientes(clientes,facturacion,cantidad){
    let cliente,fact,numeroCliente;
    for(numeroCliente=0; numeroCliente<cantidad; numeroCliente++){
        cliente = readlineSync.question("Introduzca el cliente", (numeroCliente+1), ": ");
        fact = readlineSync.questionInt("Introduzca la facturacion del cliente", (numeroCliente+1), ": ");
        clientes[numeroCliente] = cliente;
        facturacion[numeroCliente] = fact;
    }
}
function imprimirCliente(posicion,buscado,clientes,facturacion,){
    if(posicion==-1){
        console.log("El cliente", buscado,"no pudo ser encontrado.")
    }else{
        console.log("El cliente", clientes[posicion],
        "con facturacion", facturacion[posicion],
        "esta en la posicion:", posicion+1);
    }
}
function busquedaTradicional(valorBuscado,a,lim){
    let i = 0;
    let posicion = -1;
    while(i<lim && posicion==-1){
        if(a[i]==valorBuscado){
            posicion = i;
        }
        i++
    }
    return posicion;
}
let cantidad = 5;
let posicion;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
cargarClientes(clientes,facturacion,cantidad);
let buscado = readlineSync.question("Ingrese el cliente que desea buscar: ");
posicion = busquedaTradicional(buscado,clientes,cantidad);
imprimirCliente(posicion,buscado,clientes,facturacion);