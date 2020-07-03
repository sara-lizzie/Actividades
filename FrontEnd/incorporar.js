'use strict';
let saludar = ()=>{
    console.log("Holis!:)");
}
let contador=0;
let aumentarContador = ()=>{
    contador++;
    // console.log(contador);
    let miBoton = document.querySelector("button");
    miBoton.innerHTML = contador;
}
let mih1 = document.querySelector("h1");
console.log(mih1.innerHTML);
mih1.innerHTML = "Soy un título modificado en js";

let modificarH1 = ()=>{
    let nodoH1 = document.getElementById('miH1');
    let miInput = document.getElementById('nombre');
    nodoH1.innerHTML = miInput.value;
}

let miInput = document.getElementById('nombre');
miInput.addEventListener("change",modificarH1);