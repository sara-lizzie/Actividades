let cantidad = 5;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
let cliente;
let fact;
let numeroCliente;
let i,j;

for(numeroCliente = 0; numeroCliente < cantidad; numeroCliente++){
    let readlineSync = require('readline-sync');
    cliente = readlineSync.question("Cliente", (numeroCliente + 1), ": ");
    fact = readlineSync.questionInt("Facturación", (numeroCliente + 1), ": ");
    i = 0;
    while(i<numeroCliente&&facturacion[i]>fact){
        i++;
    }
    for(j = numeroCliente;j>i;j--){
        clientes[j] = clientes[j-1];
        facturacion[j] = facturacion[j-1];
    }
    clientes[i] = cliente;
    facturacion[i] = fact;
}

for(posicion = 0; posicion < 4; posicion++){
    console.log("(",posicion,")",clientes[posicion],
    "[",facturacion[posicion],"]");
}