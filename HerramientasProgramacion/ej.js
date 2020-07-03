function a(v){
    let r = [];
    let b=0;
    for(let i=0; i<v.length; i++){
        console.log("v: ", v, "r: ",r,"b: ",b,"i: ", i);
        console.log("v en posicion i: ", v[i], "v en posicion i MOD 2: ", v[i]%2)
        if(v[i] % 2==0){
            console.log("Entra en el if.")
            r[b] = v[i];
            b++;
        }
    }
    console.log("valor de r al final de la funcion", r);
    return r;
}

let arreglo = new Array(1,2,3,4,5);
console.log(a(arreglo));