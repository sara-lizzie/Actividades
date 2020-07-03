'use strict';
let misBotones = document.querySelectorAll("button");
let misDivs = document.querySelectorAll("div");

let ocultar=(i)=>{
    misDivs[i].classList.toggle("ocultar");
}

for(let i = 0; i<misBotones.length;i++){
    misBotones[i].addEventListener("click", function(e){
        ocultar(i);
    })
}

