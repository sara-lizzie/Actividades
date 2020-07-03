let readlineSync = require('readline-sync');
let dia = readlineSync.questionInt("Ingrese el dia: ");
let mes = readlineSync.questionInt("Ingrese el mes: ");
let año = readlineSync.questionInt("Ingrese el año: ");
let diasAño = 365;
let diasMes = [31,28,31,30,31,30,31,31,30,31,30,31];

if(añoBisiesto(año)==true){
    diasAño = 366;
    diasMes[i] = 29;
}

console.log(diasAño - contarDias(dia,mes,año))

function contarDias(dia,mes){
    let suma = 0;
    for(let i = 0; i < mes-1; i++){
        suma = suma + diasMes[i];
    }
    return suma + dia;
}

function añoBisiesto(año){
    if((año%4==0)&&(año%100!=0)&&(año%400==0)){
        return true;
    }
}