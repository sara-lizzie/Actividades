function b(v,m){
    let r = [];
    let b=0;
    m = 4;
    for(let i=0; i<v.length; i++){
        console.log("v: ", v,"b: ", b, "r: ",r, "i: ", i);
        console.log("v en posicion i: ", v[i],"m:", m, "v en i MOD m: ", v[i]%m);
        if(v[i] % m==0){
            console.log("entra en el if.");
            r[b] = v[i];
            b++;
        }
    }
    console.log("El valor final de r es: ", r)
    return r;
}

let arreglo = new Array(2,4,6,8,10,20)
 
console.log(b(arreglo));