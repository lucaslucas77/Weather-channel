
let boton = document.querySelector("button")
let ciudad = document.querySelector("input")


function cargarCiudad() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value +"&appid=fdd533266e28101881f610f2b8f1ebe1", function (data) {
            document.querySelector(".container").style.visibility = "visible"
            document.getElementById("ciudad").textContent = data.name
            document.querySelector("#grados").innerHTML = data.main.temp + "<sup>°C</sup>"
            let iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            document.querySelector("#wicon").src = iconUrl
            document.getElementById("descripcion").textContent = data.weather[0].description
            ciudad.value = ""
    }).fail(function () {
        alert("Ciudad inexistente")
        ciudad.value = ""
    })
}
        
boton.addEventListener("click", function () {
    if (ciudad.value === "") {
        alert("Por favor ingrese el nombre de una ciudad")
    } else {
        cargarCiudad()
    }
})

