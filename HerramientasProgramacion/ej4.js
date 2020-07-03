function d(v){
    let r=0;
    for(let i=0; i<v.length; i++){
        r = v[i] +r;
    }
    return r/v.length;
}
let arreglo = new Array(1,2,4,6,8,10);
console.log(d(arreglo));