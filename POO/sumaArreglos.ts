let array: number[] =[1,2,3,4];

function sumar(array:number[]): any{
    let suma: number;
    suma = 0;
    for(let i:number=0;i<array.length;i++){
        suma+=array[i];
    }
    return "la suma de los numeros es: " + suma;
}
console.log(sumar(array));