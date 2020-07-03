let readlineSync = require('readline-sync');
let texto = readlineSync.question("Por favor ingrese un texto: ");
let textoMinuscula = texto.toLowerCase();
let arregloTexto = textoMinuscula.split("");
let vocales = new Array();
let consonantes = new Array();

for(let i = 0; i < arregloTexto.length; i++){
    if(arregloTexto[i] == "a" || arregloTexto[i] == "e" ||arregloTexto[i] == "i" ||arregloTexto[i] == "o" ||arregloTexto[i] == "u"){
        vocales[i] = arregloTexto[i];
    }else{
        consonantes[i] = arregloTexto[i];
    }
}

console.log("texto en minusculas: ", arregloTexto);
console.log("vocales: ",vocales);
console.log("consonantes: ", consonantes);