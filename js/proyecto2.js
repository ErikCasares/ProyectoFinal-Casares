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
        if(isNaN(this.ahorro), isNaN(this.sueldo), isNaN(this.meses)){
            console.log("no ha ingresado numeros")
            alert("para calcular se tienen que ingresar numeros")
            reinicio = prompt("queres volver a hacer un plan?")
        }
        else{
        console.log( "<--- DATOS DEL calculo --->");
        console.log("queres ahorrar; $", this.ahorro);
        console.log("contas con un ingreso mensual de; $", this.sueldo);
        console.log("queres cumplir tu meta en:", this.meses,"meses")
        console.log(" ")
        }
    }
// CALCULAR 
    get_calculo(){
        if(isNaN(this.ahorro), isNaN(this.sueldo), isNaN(this.meses)){
        }
        else if(this.meses>0){
                console.log("hola")
                this.guardar = this.ahorro / this.meses; 
                ;
                console.log("deberias guardar",Math.ceil(this.guardar),"por mes.");
        }
        else{
            console.log("no ha ingresado numeros")
            alert("para calcular se tienen que ingresar numeros")
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
            console.log(" ")
        }
        else{"error"}
    }
    get_otras_opciones(){

if(isNaN(this.ahorro), isNaN(this.sueldo), isNaN(this.meses)){

    

}
else{
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
        else { console.log("se puede considerar un ahorro", lista_posibilidades[2])}
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
        else if (opcion_9_meses < this.sueldo){
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        else { console.log("se puede considerar un ahorro", lista_posibilidades[2])}
        console.log(" ")



        console.log("en un año deberias guardar", Math.round(opcion_ano),"$ por mes.");
        if((opcion_ano / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else if (opcion_ano < this.sueldo){
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        else { console.log("se puede considerar un ahorro", lista_posibilidades[2])}
        console.log(" ")
        console.log(" ")
        console.log("en dos años deberias guardar", Math.round(opcion_2_anos),"$ por mes.");
        if((opcion_2_anos / this.sueldo) * 100 < 40){
            console.log("se puede considerar un ahorro" , lista_posibilidades[0])
        }
        else if (opcion_2_anos < this.sueldo){
            console.log("se puede considerar un ahorro" , lista_posibilidades[1])
        }
        else { console.log("se puede considerar un ahorro", lista_posibilidades[2])}
        console.log(" ")
        
    }
}
} 
let lista_posibilidades = ["posible" , "dificil" , "imposible" ]
let reinicio = "si"
let lista_ahorros = [];
while(reinicio === "si"){
    let plan_1 = new plan_de_ahorro(prompt("cuanto queres ahorrar") , prompt("cuanto es tu ingreso mensual?") , prompt("en cuantos meses queres cumplir tu meta?"));
    plan_1.get_datos();
    plan_1.get_calculo();
    plan_1.get_porcentaje();
    plan_1.get_otras_opciones();
    if((this.guardar > this.sueldo)){
        plan_1.meses = (prompt("queres probar otra meta de meses?"))
    }
    lista_ahorros.push(plan_1);

    reinicio = prompt("queres volver a hacer un plan?")

}
let listado = prompt("Deseas mostrar el historial de tus planes?")
while(listado === 'si'){
if(listado === 'si'){
    mostrarListado();
}


function mostrarListado(){
    let opcion = prompt("ingresa 1 si deseas ver los posibles, 2 no posibles, 3 todos")
    if(opcion == 1){
        console.log("Listado Posibles");
        let posibles = lista_ahorros.filter(ahorro => ahorro.guardar < ahorro.sueldo);
        posibles.forEach(ahorro => {
            ahorro.get_datos();
        })
    }else if(opcion == 2){
        console.log("Listado No Posibles");
        let posibles = lista_ahorros.filter(ahorro => ahorro.guardar > ahorro.sueldo);
        posibles.forEach(ahorro => {
            ahorro.get_datos();
        })
    }else if (opcion == 3){
        console.log("Listado General");
        lista_ahorros.forEach(ahorro => {
            ahorro.get_datos();
        })
    }else {
        alert('opcion Incorrecto');
    }
}
listado = prompt("Deseas ver otro historial de tus planes?")
}

alert("Saliste del Sistema")
console.log("Gracias por utilizar nuestro sistema")