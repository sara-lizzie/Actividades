class Motor{
    private tipo: string;
    
    public constructor(tipo:string){
        this.tipo = tipo;
    }

    public getTipo():string{
        return this.tipo;
    }
}

class Rueda{
    private tamaño:number;

    public constructor(tamaño:number){
        this.tamaño = tamaño;
    }
}

class Auto{
    private marca: string;
    private modelo: string;
    private motor: Motor;
    private ruedas: Rueda[];

    public constructor(marca:string, modelo:string, motor:Motor, ruedas:Rueda[]){

    }
    public getMotor(): Motor{
        return this.motor;
    }
}

let motor: Motor = new Motor('Nafta');
let ruedas: Rueda[] = [
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
    new Rueda(16)
];

let primerAuto: Auto = new Auto('Ford', 'Fiesta', motor, ruedas);

primerAuto.getMotor().getTipo();