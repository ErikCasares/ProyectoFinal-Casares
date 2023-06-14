let lista_ahorros = [];
let lista_JSON = JSON.stringify(lista_ahorros);
let lista_historial = localStorage.getItem("historial")
lista_ahorros = JSON.parse(lista_historial)
localStorage.setItem("historial", lista_JSON)

let ahorro_1 = "0"
let meses_1 = "0"
let sueldo_1 = "0"
let datos = "0"
let otras_opciones = "0"
let guardar = 0


let ahorro = document.getElementById("ahorro")
let meses = document.getElementById("meses")
let sueldo = document.getElementById("sueldo")

if (localStorage.length >= 1) {
    for (let consulta of lista_ahorros) {
        historial = document.createElement("div");
        historial.innerHTML = `<p>Querias ahorrar $${consulta.ahorro}</p>
                        <p>contabas con un ingreso de $${consulta.sueldo}</p>
                        <p>querias cumplirlo en ${consulta.meses} meses</p>`
        exponer_historial.append(historial);
    }
}



class plan_de_ahorro {

    constructor(ahorro, sueldo, meses, guardar) {
        //CARACTERISTICAS
        this.ahorro = document.getElementById("ahorro");
        this.meses = document.getElementById("meses");
        this.sueldo = document.getElementById("sueldo");
        let calcular = document.getElementById("calcular");
        let borrar_historial = document.getElementById("borrar_historial")
        this.guardar = guardar

        sueldo = parseInt(sueldo)
        meses = parseInt(meses)
        guardar = parseInt(guardar)
    }
}



function borrar_h() {
    localStorage.removeItem("historial");
    lista_ahorros = []
    let historial
    let exponer_historial = document.getElementById("exponer_historial");
    exponer_historial.innerHTML = "";
    historial = document.createElement("div");
    historial.innerHTML = `<p></p>`
    exponer_historial.append(historial);
    let lista_historial = localStorage.getItem("historial")
lista_ahorros = JSON.parse(lista_historial)
localStorage.setItem("historial", lista_JSON)
}

function get_datos(e) {
    ahorro_1 = ahorro.value
    meses_1 = meses.value
    sueldo_1 = sueldo.value


    let exponer_datos = document.getElementById("exponer_datos");
    exponer_datos.innerHTML = "";
    datos = document.createElement("div");
    if (ahorro_1 > 1 && meses_1 > 1 && sueldo_1 > 1) {
        datos.innerHTML = `<h2>Datos Del calculo</h2>
                <p>queres ahorrar: $ ${ahorro_1}</p>
                <p>contas con un ingreso mensual de; $ ${sueldo_1}</p>
                <p>queres cumplir tu meta en: ${meses_1} meses</p>`
        exponer_datos.append(datos);

        //reinicio los valores del calculo para que se vuelvan a leer los placeholders
        ahorro.value = ""
        meses.value = ""
        sueldo.value = ""
    } else {
        datos.innerHTML = `<h2>Datos Del calculo</h2>
        <p>DATOS INCORRECTOS</p>`
        exponer_datos.append(datos);
        //reinicio los valores del calculo para que se vuelvan a leer los placeholders
        ahorro.value = ""
        meses.value = ""
        sueldo.value = ""
    }

}

function get_calculo() {
    console.log("hola")
    guardar = ahorro_1 / meses_1;;
    console.log("deberias guardar", Math.ceil(guardar), "por mes.");
    console.log(" ")
    let exponer_calculo = document.getElementById("exponer_calculo");
    exponer_calculo.innerHTML = "";
    calculo = document.createElement("div");
    if (ahorro_1 > 1 && meses_1 > 1 && sueldo_1 > 1) {
        calculo.innerHTML = `<h2>Resultado Del Calculo</h2>
        <p>Deberias guardar $${Math.ceil(guardar)} por mes</p>`
        exponer_calculo.append(calculo);
    } else {
        calculo.innerHTML = `<h2>Resultado Del Calculo</h2>
        <p>DATOS INCORRECTOS</p>`
        exponer_calculo.append(calculo);
    }

}

function get_porcentaje() {
    let porcentaje_de_sueldo = (guardar / sueldo_1) * 100;
    let posibilidad = 0
    if (guardar < sueldo_1) {

        console.log("para esto deberias guardar el", Math.ceil(porcentaje_de_sueldo), "% de tu ingreso por mes")

        if (porcentaje_de_sueldo < 40) {
            posibilidad = "se puede considerar un ahorro posible"
            console.log("se puede considerar un ahorro posible")
        } else {
            posibilidad = "se puede considerar un ahorro dificil"
            console.log("se puede considerar un ahorrod dificil")
        }

        console.log(" ")
    } else if (guardar > sueldo_1) {
        posibilidad = "no es posible guardar mas que tu ingreso mensual, pensa en alcanzar la meta en un periodo mayor de tiempo"
        console.log("no es posible guardar mas que tu ingreso mensual, pensa en alcanzar la meta en un periodo mayor de tiempo")
        console.log(" ")
    } else {
        let posibilidad = "error"
    }
    let exponer_porcentaje = document.getElementById("exponer_porcentaje");
    exponer_porcentaje.innerHTML = "";
    porcentaje = document.createElement("div");
    if (ahorro_1 > 1 && meses_1 > 1 && sueldo_1 > 1) {
        porcentaje.innerHTML = `<p>para esto deberias guardar el ${Math.ceil(porcentaje_de_sueldo)} % de tu ingreso por mes</p>
                            <p>${posibilidad}</p>`
        exponer_calculo.append(porcentaje);
    } else {

    }
}






function get_otras_opciones() {
    let tres_meses
    let seis_meses
    let nueve_meses
    let un_ano
    let dos_ano
    let otros_meses = [3, 6, 9, 12, 24]




    sueldo_1 = parseInt(sueldo_1)
    meses_1 = parseInt(meses_1)
    ahorro_1 = parseInt(ahorro_1)

    function tresMeses(num) {

        return num / 3
    }

    function seisMeses(num) {

        return num / 6
    }

    function nueveMeses(num) {

        return num / 9
    }

    function unAno(num) {

        return num / 12
    }

    function dosAno(num) {

        return num / 24
    }

    let opcion_3_meses = tresMeses(ahorro_1);
    let opcion_6_meses = seisMeses(ahorro_1);
    let opcion_9_meses = nueveMeses(ahorro_1);
    let opcion_ano = unAno(ahorro_1);
    let opcion_2_anos = dosAno(ahorro_1);
    console.log(">>Otras opciones para llegar a la meta de ahorro<<")
    Math.round(opcion_3_meses)

    if ((opcion_3_meses / sueldo_1) * 100 < 40) {
        tres_meses = "se puede considerar un ahorro posible";

    } else if (opcion_3_meses < sueldo_1) {
        tres_meses = "se puede considerar un ahorro dificil";
    } else {
        tres_meses = "se puede considerar un ahorro imposible";
    }
    console.log(opcion_3_meses)



    if ((opcion_6_meses / sueldo_1) * 100 < 40) {
        seis_meses = "se puede considerar un ahorro posible"
    } else if (opcion_6_meses < sueldo_1) {
        seis_meses = "se puede considerar un ahorro dificil"
    } else {
        seis_meses = "se puede considerar un ahorro imposible"
    }






    if ((opcion_9_meses / sueldo_1) * 100 < 40) {
        nueve_meses = "se puede considerar un ahorro posible"
    } else if (opcion_9_meses < sueldo_1) {
        nueve_meses = "se puede considerar un ahorro dificil"
    } else {
        nueve_meses = "se puede considerar un ahorro imposible"
    }






    if ((opcion_ano / sueldo_1) * 100 < 40) {
        un_ano = "se puede considerar un ahorro posible"
    } else if (opcion_ano < sueldo_1) {
        un_ano = "se puede considerar un ahorro dificil"
    } else {
        un_ano = "se puede considerar un ahorro imposible"
    }





    if ((opcion_2_anos / sueldo_1) * 100 < 40) {
        dos_ano = "se puede considerar un ahorro posible"
    } else if (opcion_2_anos < sueldo_1) {
        dos_ano = "se puede considerar un ahorro dificil"
    } else {
        dos_ano = "se puede considerar un ahorro imposible"
    }
    let exponer_otras_opciones = document.getElementById("exponer_otras_opciones");
    exponer_otras_opciones.innerHTML = "";
    otras_opciones = document.createElement("div");
    if (ahorro_1 > 1 && meses_1 > 1 && sueldo_1 > 1) {
        otras_opciones.innerHTML = `
    <div>
    <p>En Tres Meses</p>
    <p>Deberias guardar $${Math.ceil(opcion_3_meses)} por mes</p>
    <p>${tres_meses}</p>
    </div>

    <div>
    <p>En Seis Meses</p>
    <p>Deberias guardar $${Math.ceil(opcion_6_meses)} por mes</p>
    <p>${seis_meses}</p>
    </div>

    <div>
    <p>En Nueve Meses</p>
    <p>Deberias guardar $${Math.ceil(opcion_9_meses)} por mes</p>
    <p>${nueve_meses}</p>
    </div>

    <div>
    <p>En Un Año</p>
    <p>Deberias guardar $${Math.ceil(opcion_ano)} por mes</p>
    <p>${un_ano}</p>
    </div>

    <div>
    <p>En Dos Años</p>
    <p>Deberias guardar $${Math.ceil(opcion_2_anos)} por mes</p>
    <p>${dos_ano}</p>
    </div>`
    
    
    exponer_otras_opciones.append(otras_opciones);
        console.log(" ")
    } else {
        otras_opciones.innerHTML = `
        <p>DATOS INCORRECTOS</p>`
        exponer_otras_opciones.append(otras_opciones);
        console.log(" ")
    }
}


let plan_1 = new plan_de_ahorro(document.getElementById("ahorro"), document.getElementById("sueldo"), document.getElementById("meses"));
calcular.addEventListener("click", get_datos);
calcular.addEventListener("click", get_calculo);
calcular.addEventListener("click", get_porcentaje);
calcular.addEventListener("click", get_otras_opciones);
calcular.addEventListener("click", push);
borrar_historial.addEventListener("click", borrar_h)


function push() {
    let consulta = {
        ahorro: ahorro_1,
        meses: meses_1,
        sueldo: sueldo_1
    }
    if (ahorro_1 > 1 && meses_1 > 1 && sueldo_1 > 1) {
        lista_ahorros.push(consulta);
    } else {}
    lista_JSON = JSON.stringify(lista_ahorros);
    console.log(lista_JSON)
    localStorage.setItem("historial", lista_JSON, )
    console.log(lista_ahorros)

    let historial

    let exponer_historial = document.getElementById("exponer_historial");
    exponer_historial.innerHTML = "";

    for (let consulta of lista_ahorros) {
        historial = document.createElement("div");
        historial.innerHTML = `<p>Querias ahorrar $${consulta.ahorro}</p>
                            <p>contabas con un ingreso de $${consulta.sueldo}</p>
                            <p>querias cumplirlo en ${consulta.meses} meses</p>`
        exponer_historial.append(historial);
    }


}