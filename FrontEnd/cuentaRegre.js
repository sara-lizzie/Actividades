'use strict';

let miBoton = document.getElementById("boton");
let contador; 
let mensaje = document.getElementById("cuenta-regresiva");

let activarBomba=()=>{
    contador = 5;
    let timer = setInterval(function(){
        if(contador==0){
            mensaje.innerHTML = "BOOOM!";
            clearInterval(timer);
        }else{
            contador--;
            mensaje.innerHTML = contador;
        }
    },1000)
}

miBoton.addEventListener("click",activarBomba);




let miBoton2 = document.getElementById("boton2");

function activarBomba2(){
    let miInput = document.getElementById("cuadro");
    contador = miInput.value;
    let timer2 = setInterval(function(){
        if(contador==0){
            mensaje.innerHTML="BOOOM!";
            clearInterval(timer2);
        }else{
            contador--;
            mensaje.innerHTML=contador;
        }
    },1000)
}

miBoton2.addEventListener("click",activarBomba2);
