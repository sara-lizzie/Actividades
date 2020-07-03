let readlineSync = require('readline-sync');
let texto = readlineSync.question("Por favor ingrese un texto: ");
let textoMinuscula = texto.toLowerCase();
let arregloTexto = textoMinuscula.split("");
let vocales = ["a","e","i","o","u"];
let contadorVocales = new Array();
let consonantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
let contadorConsonantes = new Array();
let letra; 

function contarVocales(letra,vocales,contadorVocales){
    for(let i = 0; i< vocales; i++){
        if(letra==vocales[i]){
            contadorVocales[i] = letra;
        }
    }
}

function contarConsonantes(letra,consonantes,contadorConsonantes){
    for(let i = 0; i < consonantes; i++){
        if(letra==consonantes[i]){
            contadorConsonantes[i] = letra;
        }
    }
}

function arreglo(arregloTexto){
    for(let i = 0; i < arregloTexto.length;i++){
        letra = arregloTexto[i];
        contarVocales(letra,vocales,contadorVocales);
        contarConsonantes(letra, consonantes, contadorConsonantes);
        console.log(contarVocales);
        console.log(contarConsonantes);
    }
}
console.log(arregloTexto);
console.log(arreglo(arregloTexto));