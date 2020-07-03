'use strict';

let miBoton = document.getElementById("miBoton");
let miDiv = document.getElementById("miDiv");
miBoton.addEventListener('click',function(e){
    miDiv.classList.toggle("ocultar");
})
