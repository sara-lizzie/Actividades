'use strict';

let miBoton = document.getElementById("miBoton");
let miH1 = document.querySelector("#miH1");
function dadosAzar(){
    let contador=0;
   for(let i=0;i<1000;i++){
    let dado1=  Math.floor(Math.random() * (7-1)) + 1;
    let dado2 = Math.floor(Math.random() * (7-1)) + 1;
    if(dado1[i]+dado2[i]==7){
    contador++;
    }
    }
    miH1.innerHTML = "El numero 7 ha aparecido ", contador, "veces";
}

miBoton.addEventListener("click", dadosAzar);