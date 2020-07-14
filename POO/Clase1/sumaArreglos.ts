let array: number[] =[1,2,3,4];

function sumar(array:number[]): number{
    let suma: number;
    suma = 0;
    for(let i:number=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}
console.log(sumar(array));