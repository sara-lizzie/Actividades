'use strict';

let miInput = document.getElementById("miInput");
let miBotonAgregar = document.getElementById("miBotonAgregar");
let miBotonSumar = document.getElementById("miBotonSumar");
let misElementos = document.getElementById("miH1");
let elementosSumar = new Array();


function agregarElementos(){
    let nuevoItem = Number(miInput.value);
    elementosSumar.push(nuevoItem);
    miInput.value="";
}

function sumarElementos(){
    let sumaTotal = 0;
    for(let i=0; i<elementosSumar.length;i++){
         sumaTotal+= elementosSumar[i] // + sumaTotal;
    }
     misElementos.innerHTML = sumaTotal;
}
miBotonAgregar.addEventListener("click", agregarElementos);
miBotonSumar.addEventListener("click", sumarElementos);