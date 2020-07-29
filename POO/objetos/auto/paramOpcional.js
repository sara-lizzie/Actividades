var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.año = 2020;
        this.marca = marca;
        this.modelo = modelo;
        if (año) {
            this.año = año;
        }
        else {
            this.año = this.año;
        }
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
var primerAuto = new Auto('Ford', 'Fiesta', 1999);
var segundoAuto = new Auto('Renault', 'Clio');
var tercerAuto = new Auto('Peugeot', '207', 2005);
console.log(primerAuto);
console.log(segundoAuto);
console.log(tercerAuto);
