class Auto {
    private marca: string;
    private modelo: string;
    private velocidadActual: number;
    private año: number = 2020;

    public constructor(marca:string,modelo:string,año?:number){
        this.marca = marca;
        this.modelo = modelo;
        if(año){
            this.año=año;
        }else{
            this.año=this.año;
        }
    } 
    public acelerar():void{
        this.velocidadActual += 10;
    }
}

let primerAuto = new Auto('Ford','Fiesta',1999);
let segundoAuto = new Auto('Renault','Clio');
let tercerAuto = new Auto('Peugeot','207',2005);

console.log(primerAuto);
console.log(segundoAuto);
console.log(tercerAuto);