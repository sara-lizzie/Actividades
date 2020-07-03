'use strict';
let miH1 = document.getElementById('miH1');

function aumentarContador(){
    miH1.innerHTML++;
}    
function disminuirContador(){
    miH1.innerHTML--;
}
function modificarH1(){
    let miInput = document.getElementById('cuadro');
    miH1.innerHTML = miH1.innerHTML + parseInt(miInput.value,10);
   
}
