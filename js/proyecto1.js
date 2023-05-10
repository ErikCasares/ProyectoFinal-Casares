class plan_de_ahorro{

    constructor( ahorro , sueldo , meses , guardar){
        //CARACTERISTICAS
        this.ahorro = ahorro;
        this.sueldo = sueldo;
        this.meses = meses;
        this.guardar = guardar
        ahorro = parseInt(ahorro)
        sueldo = parseInt(sueldo)
        meses = parseInt(meses)
        guardar = parseInt(guardar)
    }
    
//EXPONER LOS DATOS QUE PUSIERON LOS USUARIOS
    get_datos(){
        console.log( "<--- DATOS DEL calculo --->");
        console.log("queres ahorrar; $", this.ahorro);
        console.log("contas con un ingreso mensual de; $", this.sueldo);
        console.log("queres cumplir tu meta en:", this.meses,"meses")
        console.log(" ")
    }
// CALCULAR 
    get_calculo(){
        if(this.meses>0){
                console.log("hola")
                this.guardar = this.ahorro / this.meses; 
                console.log("deberias guardar",this.guardar,"por mes.");
        }
        else{
            console.log("no ha ingresado numeros")
        }
    }
    get_porcentaje(){
        if(this.guardar < this.sueldo){
            let porcentaje_de_sueldo = (this.guardar / this.sueldo) * 100 
            console.log("para esto deberias guardar el",porcentaje_de_sueldo,"% de tu sueldo por mes")
            alert("para esto deberias guardar el",porcentaje_de_sueldo,"% de tu sueldo por mes")
        }
        else if(this.guardar > this.sueldo){
            let porcentaje_de_sueldo = (this.guardar / this.sueldo) * 100 
            console.log("no es posible guardar mas que tu ingreso mensual, pensa en alcanzar la meta en un periodo mayor de tiempo")
        }
    }


} 

let reinicio = prompt("queres hacer un plan de ahorro?")

while(reinicio === "si"){
    let plan_1 = new plan_de_ahorro(prompt("cuanto queres ahorrar") , prompt("cuanto es tu ingreso mensual?") , prompt("en cuantos meses queres cumplir tu meta?"));
    plan_1.get_datos();
    plan_1.get_calculo();
    plan_1.get_porcentaje();
    reinicio = prompt("queres volver a hacer un plan?")
}
alert("Saliste del Sistema")
console.log("Gracias por utilizar nuestro sistema")