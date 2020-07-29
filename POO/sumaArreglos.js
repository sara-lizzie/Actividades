var array = [1, 2, 3, 4];
function sumar(array) {
    var suma;
    suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return "la suma de los numeros es: " + suma;
}
console.log(sumar(array));
