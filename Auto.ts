export class Auto{
    marca:string;
    modelo:string;
    año:number;

    constructor(pMarca:string,pModelo:string,pAño:number){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;
    }

    acelerar(){
        console.log("apretar el pedal del acelerador");
        
    };

    frenar(){ 
        console.log("apretar el pedal del freno");
       };

}