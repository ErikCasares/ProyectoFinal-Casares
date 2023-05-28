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
                ;
                console.log("deberias guardar",parseFloat(this.guardar),"por mes.");
        }
        else{
            console.log("no ha ingresado numeros")
            alert("para calcular se tienen que ingresar numeros")
            reinicio = prompt("queres volver a hacer un plan?")
        }
    }
    get_porcentaje(){
        if(this.guardar < this.sueldo){
            let porcentaje_de_sueldo = (this.guardar / this.sueldo) * 100 
            console.log("para esto deberias guardar el",Math.ceil(porcentaje_de_sueldo),"% de tu ingreso por mes")
            let lista_posibilidades = ["posible" , "dificil"]
            if(porcentaje_de_sueldo < 40){
                console.log("se puede considerar un ahorro" , lista_posibilidades[0])
            }
            else{
                console.log("se puede considerar un ahorro" , lista_posibilidades[1])
            }
            console.log(" ")
        }
        else if(this.guardar > this.sueldo){
            console.log("no es posible guardar mas que tu ingreso mensual, pensa en alcanzar la meta en un periodo mayor de tiempo")
        }
        else{"error"}
    }
    get_otras_opciones(){/*
        let opcion_3_meses = this.ahorro / 3
        let opcion_6_meses = this.ahorro / 6
        let opcion_9_meses = this.ahorro / 9
        let opcion_12_meses = this.ahorro / 12 
        let opcion_2_años = this.ahorro / 24
        console.log(">>Otras opciones para llegar a la meta de ahorro<<")
        console.log("Guardando" , opcion_3_meses , "$ durante 3 meses")
        console.log("Guardando" , opcion_6_meses , "$ durante 6 meses")
        console.log("Guardando" , opcion_9_meses , "$ durante 9 meses")
        console.log("Guardando" , opcion_12_meses , "$ durante 12 meses")
*/











        function tresMeses( num){

            return num / 3
        }
        
        function seisMeses( num ){
        
            return num / 6
        }
        function nueveMeses( num ){
        
            return num / 9
        }
        function unAno( num ){
        
            return num / 12
        }
        function dosAno( num ){
        
            return num / 24
        }
        
        let opcion_3_meses = tresMeses(this.ahorro);
        let opcion_6_meses = seisMeses(this.ahorro);
        let opcion_9_meses = nueveMeses(this.ahorro);
        let opcion_ano = unAno(this.ahorro);
        let opcion_2_anos = dosAno(this.ahorro);
        console.log(">>Otras opciones para llegar a la meta de ahorro<<")
        console.log("en tres meses deberias guardar", Math.ceil(opcion_3_meses),"$ por mes.");
        if((opcion_3_meses / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else if(opcion_3_meses < this.sueldo){
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        else if(this.guardar > this.sueldo){
            console.log("no es posible guardar mas que tu ingreso mensual, pensa en alcanzar la meta en un periodo mayor de tiempo")
        }
        console.log(" ")
        
        console.log("en seis meses deberias guardar", Math.ceil(opcion_6_meses),"$ por mes.");
        if((opcion_6_meses / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else if (opcion_6_meses < this.sueldo){
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        else { console.log("se puede considerar un ahorro", lista_posibilidades[2])}
        console.log(" ")


        console.log("en nueve meses deberias guardar", Math.ceil(opcion_9_meses),"$ por mes.");
        if((opcion_9_meses / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else{
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        console.log(" ")



        console.log("en un año deberias guardar", Math.round(opcion_ano),"$ por mes.");
        if((opcion_ano / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else{
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        console.log(" ")
        console.log("en dos años deberias guardar", Math.round(opcion_2_anos),"$ por mes.");
        if((opcion_2_anos / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else{
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        console.log(" ")
        
    }
    
} 
let lista_posibilidades = ["posible" , "dificil" , "facil" ]
let reinicio = "si"

while(reinicio === "si"){
    let plan_1 = new plan_de_ahorro(prompt("cuanto queres ahorrar") , prompt("cuanto es tu ingreso mensual?") , prompt("en cuantos meses queres cumplir tu meta?"));
    plan_1.get_datos();
    plan_1.get_calculo();
    plan_1.get_porcentaje();
    plan_1.get_otras_opciones();
    if((this.guardar > this.sueldo)){
    plan_1.meses = (prompt("queres probar otra meta de meses?"))
    }
    reinicio = prompt("queres volver a hacer un plan?")
}
alert("Saliste del Sistema")
console.log("Gracias por utilizar nuestro sistema")
