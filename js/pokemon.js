let pokeguia = document.getElementById("pokeguia")
pokeguia.innerHTML = ""
let pokenombre = document.getElementById("pokename")
pokenombre.addEventListener("keydown", function (e) {

    console.log(e.key);
    if (e.key == "Enter") {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokenombre.value}`)
            .then(response => response.json())
            .then(data => {
                data = response.json()
                data = document.createElement("div");
                data.innerHTML = `<p>${data}</p>`
            })
        pokenombre.value = "hola pokemon"
    }
})

function pokemon() {

}
let weather = document.getElementById("weather")
weather.innerHTML = ""

function mostrar_posicion(posicion) {

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "1d4b53be0e83c76a46ed22be372fe440";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            weather.innerHTML = `<p>${data.name}
            Temp:${data.main.temp}</p>
            <p>Clima:${data.weather[0].description}</p>`
        })
}




navigator.geolocation.getCurrentPosition(mostrar_posicion);






swal("This modal will disappear soon!", {
    buttons: false,
    timer: 3000,
});