let readlineSync = require('readline-sync');
let suma, nota, promedio, contador;
contador = 1;
suma = 0;
while(contador <= 10){
    nota = readlineSync.questionInt("Por favor ingrese una nota: ");
    suma = suma + nota;
    contador = contador + 1
}
promedio = suma/10;
console.log("El promedio de la suma es :", promedio);