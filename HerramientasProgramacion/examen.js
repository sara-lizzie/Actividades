let camila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let franco = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let sofia = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let matias = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let agustina = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let maximo = 0;
let minimo = 0;
let suma = 0;
let trimestre1 = 0;
let trimestre2 = 0;
let trimestre3 = 0;
let mes1 = new Array();
let mes2 = new Array();
let mes3 = new Array();

let mejormensual1 = 0;
let mejormensual2 = 0;
let mejormensual3 = 0;

console.log("Los datos de Camila son: ");
console.log(ventas(camila,maximo,minimo));
console.log(promedios(camila));
console.log("Los datos de Franco son: ");
console.log(ventas(franco,maximo,minimo));
console.log(promedios(franco));
console.log("Los datos de Sofia son: ");
console.log(ventas(sofia,maximo,minimo));
console.log(promedios(sofia));
console.log("Los datos de Matias son: ");
console.log(ventas(matias,maximo,minimo));
console.log(promedios(matias));
console.log("Los datos de Agustina son: ")
console.log(ventas(agustina,maximo,minimo));
console.log(promedios(agustina));

function ventas(vendedor,maximo,minimo){
    for(let i = 0; i < 12; i++){
        suma = vendedor [i] + suma;
        if(vendedor[i] > maximo){
            maximo = vendedor[i];
            minimo = vendedor[i];
        }else{
            if(vendedor[i] < minimo){
                minimo = vendedor[i]
            }
        }
    } 
    console.log("El maximo del vendedor es: ",maximo);
    console.log("El minimo del vendedor es: ",minimo);
    console.log("El promedio semanal es: ",suma/12);
}

function promedios(vendedor){
    for(let i = 0; i < 12; i++){
       if(i<4){
        trimestre1 = vendedor [i] + trimestre1;
       }else{
           if(i<8){
               trimestre2 = vendedor [i] + trimestre2;
           }else{
               trimestre3 = vendedor [i] + trimestre3;
           }
       }
    }     
    console.log("El promedio del primer trimestre es:", trimestre1/4);
    console.log("El promedio del segundo trimestre es:", trimestre2/4);
    console.log("El promedio del tercer trimestre es:", trimestre3/4);
}

function mejorSemanal(camila,franco,sofia,matias,agustina){
    for(let i = 0; i < 12; i++){
        if(camila[i]>franco[i]&&camila[i]>sofia[i]&&camila[i]>matias[i]&&camila[i]>agustina[i]){
            console.log("El mejor vendedor del mes", i+1,"es Camila: ", camila[i]);  
        }else{
            if(franco[i]>sofia[i]&&franco[i]>matias[i]&&franco[i]>agustina[i]){
                console.log("El mejor vendedor del mes", i+1,"es Franco: ", franco[i]);  
            }else{
                if(sofia[i]>matias[i]&&sofia[i]>agustina[i]){
                console.log("El mejor vendedor del mes", i+1,"es Sofia: ", sofia[i]);  
                }else{
                    if(matias[i]>agustina[i]){
                    console.log("El mejor vendedor del mes", i+1,"es Matias: ", matias[i]);  
                    }else{
                        if(agustina[i]>matias[i])
                        console.log("El mejor vendedor del mes", i+1,"es Agustina: ", agustina[i]);  
                    }
        
                }
            }    
        }      
    }   
}        
console.log(mejorSemanal(camila,franco,sofia,matias,agustina)); 

function trimestres(vendedor,suma1,suma2,suma3){
    for(let i = 0; i<12;i++){
        if(i<4){
            mes1[i] = suma1 + vendedor[i];
        }else{
            if(i<8){
                mes2[i] = suma2 + vendedor[i];
            }else{
                mes3[i] = suma3 + vendedor[i];
            }
        }
    }
}

trimestres(camila,mes1,mes2,mes3);
trimestres(franco,mes1,mes2,mes3);
trimestres(sofia,mes1,mes2,mes3);
trimestres(matias,mes1,mes2,mes3);
trimestres(agustina,mes1,mes2,mes3);

function mejorMensual(mes1,mes2,mes3){
    for(let i = 0; i <  ;i++){
      if(mes1[i]>mejormensual1){
          mejormensual1=mes1[i]
      }else{
          if(mes2[i]>mejormensual2){
            mejormensual2 = mes2[i]
          }else{
              if(mes3[i]>mejormensual3){
                  mejormensual3 = mes3[i]
              }
          }
      }
    }
    console.log("El mejor del primer mes es:", mejormensual1);
    console.log("El mejor del segundo mes es:", mejormensual2);
    console.log("El mejor del tercer mes es:", mejormensual3);
}

console.log(mejorMensual(mes1,mes2,mes3));