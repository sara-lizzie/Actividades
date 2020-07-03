let readlineSync = require('readline-sync');
let texto = readlineSync.question("Ingrese un texto: ");
let textoMinuscula = texto.toLowerCase();
let arregloAbc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arregloTexto = textoMinuscula.split("");

let letra;
let cantidad;
for(let i = 0; i < arregloAbc.length; i++){
    letra = arregloTexto[i];
    cantidad = buscarOcurrencias(arregloTexto,arregloAbc.length,letra)
    console.log("La letra", letra,"aparece", cantidad, "la probabilidad de su ocurrencia es: ", cantidad/arregloTexto.length);
}

function buscarOcurrencias(v,l,n){
    let oc = 0;
    for(let i = 0; i < l; i++){
        if(v[i]==n){
            oc++
        }
    }
    return oc;
}