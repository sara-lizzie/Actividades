let calcularAreaTriangulo = (base, altura)=> {
    return base*altura/2;
}
base = 0;
altura = 0;
for(i=0;i<7;i++){
    base = base + 1;
    altura = altura + 2;
    console.log("Para un triangulo de base ",base,"y una altura de ",altura);
    console.log("Necesitamos un area de :", calcularAreaTriangulo(base,altura));
}