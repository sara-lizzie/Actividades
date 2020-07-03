let readlineSync = require('readline-sync');
let dimension = readlineSync.questionInt("Cuantas butacas hay?");
let butacas = new Array(dimension);

let cargarButacas = (butacas,dimension) =>{
    for(let i = 0; i < dimension; i++){
        if(i<dimension/2){
           butacas[i]=true;
        }else{
           butacas[i]=false;
        }
    }
}
let mostrarButacas = (butacas,dimension) =>{
    for(let i = 0; i < dimension; i++){
        if(butacas[i]==true){
            console.log("La butaca", i, "esta ocupada.")
        }else{
            console.log("La butaca", i, "esta desocupada.")
        }
    }
}
cargarButacas(butacas,dimension);
console.log(mostrarButacas(butacas, dimension));