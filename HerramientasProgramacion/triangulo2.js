let calcularAreaTriangulo = (base, altura)=> {
    return base*altura/2;
}
base = 0;
altura = 0;
for(i=0;i<=100;i++){
    console.log("Para un triangulo de base ",i,"y una altura de ",i*2);
    console.log("Necesitamos un area de :", calcularAreaTriangulo(i,i*2));
}