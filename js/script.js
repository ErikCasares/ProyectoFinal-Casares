

let arr_usuarios = [];

function alta_usuario() {
    let nombre_usuario = document.getElementById("user");
    let pass_usuario = document.getElementById("pass");


    let usuario = {
        nombre: nombre_usuario.value,
        password: pass_usuario.value
    };

    arr_usuarios.push(usuario);


    // JSON

    let arreglo_en_JSON = JSON.stringify(arr_usuarios);

    localStorage.setItem("arr_usuarios", arreglo_en_JSON);
}


function login_usuario() {

    let arr = localStorage.getItem("arr_usuarios");
    let nombre_usuario = document.getElementById("user").value;
    let pass_usuario = document.getElementById("pass").value;

    arr = JSON.parse(arr);

    
    for (let usuario of arr) {

        if (usuario.nombre == nombre_usuario && usuario.password == pass_usuario) {

            document.body.innerHTML = `<h1>Bienvenido/a al sistema: ${usuario.nombre}</h1>
                                       <a href="./index.html">Volver</a>`;
            break
        } else {
            document.body.innerHTML = `<h1>Usuario o password no encotrado: ${nombre_usuario}</h1>
                                       <a href="./index.html">Volver</a>`;
        }

    }

}




// EVENTOS //

let btn_crear = document.getElementById("btn_crear");
let btn_ingresar = document.getElementById("btn_ingresar");


btn_crear.addEventListener("click", alta_usuario);
btn_ingresar.addEventListener("click", login_usuario);






