'use strict';
let miBoton = document.querySelector("button");
let miInput = document.querySelector("input");
// let miDiv = document.querySelector("div");
let miLista = document.querySelector("ol");

let agregarTarea = ()=>{
    // let tareaNueva = document.createElement("p");
    let nuevaTareaOrdenada = document.createElement("li");
    // tareaNueva.innerHTML = miInput.value;
    nuevaTareaOrdenada.innerHTML = miInput.value;
    // miDiv.appendChild(tareaNueva);
    miLista.appendChild(nuevaTareaOrdenada);
}

miBoton.addEventListener("click",agregarTarea);