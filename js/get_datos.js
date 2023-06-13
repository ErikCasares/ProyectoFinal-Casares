let ahorro = document.getElementById("ahorro")
let meses = document.getElementById("meses")
let sueldo = document.getElementById("sueldo")
let calcular = document.getElementById("calcular")



calcular.addEventListener("click", get_datos);


function get_datos(e) {
    let ahorro_1 = ahorro.value
    let meses_1 = meses.value
    let sueldo_1 = sueldo.value

    let exponer_datos = document.getElementById(exponer_datos)
    let datos = document.createElement("div");
    datos.innerHTML = `<h2><--- DATOS DEL calculo ---></h2>
                <p>queres ahorrar: $ ${ahorro_1}</p>`
    console.log("<--- DATOS DEL calculo --->");
    console.log("queres ahorrar; $", ahorro_1);
    console.log("contas con un ingreso mensual de; $", sueldo_1);
    console.log("queres cumplir tu meta en:", meses_1, "meses")
    console.log(" ")
}



let mostrar_historial = document.getElementById("mostrar_historial");


mostrar_historial.addEventListener("click", function () {

    let historial = document.getElementById("historial");

    if (carrito.style.display != "none") {

        carrito.style.display = "none";
    } else {
        carrito.style.display = "block";
    }


})



function validar() {
    dato = document.getElementById("dato").value;
    resultado = document.getElementById("resultado");
    if (dato == "") {
        resultado.innerText = "No existe cadena de caracteres para evaluar";
    } else {
        if (esNumero(dato)) {
            resultado.innerText = ("La cadena de caracteres es NUMÉRICA: " + parseFloat(dato).toFixed(2));
        } else {
            resultado.innerText = ("La cadena de caracteres NO es NUMÉRICA");
        }
    }
}

function esNumero(dato) {
    /*Definición de los valores aceptados*/
    var valoresAceptados = /^[0-9]+$/;
    if (dato.indexOf(".") === -1) {
        if (dato.match(valoresAceptados)) {
            return true;
        } else {
            return false;
        }
    } else {
        //dividir la expresión por el punto en un array
        var particion = dato.split(".");
        //evaluamos la primera parte de la división (parte entera)
        if (particion[0].match(valoresAceptados) || particion[0] == "") {
            if (particion[1].match(valoresAceptados)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}