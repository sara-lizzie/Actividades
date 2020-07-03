let readlineSync = require('readline-sync');
let precioUnitario = readlineSync.questionInt("Por favor ingrese el precio por unidad del producto: ");
let cantidad = readlineSync.questionInt("Por favor ingrese la cantidad que desea llevar: ");
let mes = readlineSync.question("Por favor ingrese el mes en que realiza la compra: ");
let cuenta = precioUnitario*cantidad;
let descuento = cuenta*0.15;
let precioConDescuento = cuenta - descuento;

if(mes=="octubre"){
    console.log("Usted recibe un 15 % de descuento, el precio que pagará será: $", precioConDescuento);
}else{
    console.log("El precio es $", cuenta);
}