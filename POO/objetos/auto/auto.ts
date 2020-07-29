import * as readlineSync from 'readline-sync';
class Auto{
    private estaPrendido: boolean;
    private velocidadActual: number;

    public constructor(estaPrendido:boolean, velocidadActual: number){
        this.estaPrendido = estadoActual;
        this.velocidadActual = velocidadInicial;
    }
    
    public prenderApagar():void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }

    public subirVelocidad():number{
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad actual: ");
        let aumentarVelocidad : number = readlineSync.questionInt("Introduzca la velocidad que desea aumentar: ");
        this.velocidadActual += aumentarVelocidad;
        return this.velocidadActual;
    }
    
    public bajarVelocidad():number{
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad actual: ");
        let disminuirVelocidad: number = readlineSync.questionInt("Introduzca la velocidad que desea disminuir: ");
        this.velocidadActual -= disminuirVelocidad;
        return this.velocidadActual
    }

    public elegirVelocidad():void{
        this.velocidadActual = readlineSync.questionInt("Introduzca la velocidad que desee: ");
    }
}

let estadoActual: boolean = false;
let velocidadInicial: number = 0;
let miAuto = new Auto(estadoActual,velocidadInicial);

console.log(miAuto);

miAuto.prenderApagar();

function elegir ():void{
    let tarea: string = readlineSync.question("Indique con la letra mayuscula que desea hacer: A:subir velocidad, B:bajar velocidad o C:elegir velocidad: ");
    if(tarea == "A"){
        miAuto.subirVelocidad();
    }else{
        if(tarea == "B"){
        miAuto.bajarVelocidad();
        }else{
            if(tarea == "C"){
            miAuto.elegirVelocidad();
            }else{
                console.log(elegir());
            }
        }    
    }
}

console.log(elegir())