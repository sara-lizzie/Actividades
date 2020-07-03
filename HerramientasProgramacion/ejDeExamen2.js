let readlineSync = require('readline-sync');
let texto = readlineSync.question("Ingrese un texto: ");
let listado = new Array(texto.length);
let letras = new Array(28);
let aparicion = 0;
let letrasTexto = new Array(texto.length);
for(let i = 0; i < texto.length; i++){
    if(listado[i] == letras [i]){
        cargarListado(texto,letras);
    }
}

let cargarListado = (texto, letras) =>{
    for(let i = 0; i < texto.length; i++){
        letras
    }
}


letras = "a" || "A"[0];
letras = "b" || "B"[1];
letras = "c" || "C"[2];
letras = "d" || "D"[3];
letras = "e" || "E"[4];
letras = "f" || "F"[5];
letras = "g" || "G"[6];
letras = "h" || "H"[7];
letras = "i" || "I"[8];
letras = "j" || "J"[9];
letras = "k" || "K"[10];
letras = "l" || "L"[11];
letras = "m" || "M"[12];
letras = "n" || "N"[13];
letras = "o" || "O"[14];
letras = "p" || "P"[15];
letras = "q" || "Q"[16];
letras = "r" || "R"[17];
letras = "s" || "S"[18];
letras = "t" || "T"[19];
letras = "u" || "U"[20];
letras = "v" || "V"[21];
letras = "w" || "W"[22];
letras = "x" || "X"[23];
letras = "y" || "Y"[24];
letras = "z" || "Z"[25];


  // for(let i = 0; i < texto.length; i++){
    //     listado[i];
    //     if(listado[i] == letras[i]){
    //         letrasTexto = letras[i]
    //     }
    // } 