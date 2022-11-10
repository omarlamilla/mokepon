
let seleccionJugadorMascota = document.getElementById("boton-mascota")
seleccionJugadorMascota.addEventListener("click", seleccionarMascotaJugador)

let botonSemen = document.getElementById("boton-semen")
botonSemen.addEventListener("click", ataqueSemen)
let botonSangre = document.getElementById("boton-sangre")
botonSangre.addEventListener("click", ataqueSangre)
let botonSudor = document.getElementById("boton-sudor")
botonSudor.addEventListener("click", ataqueSudor)
let ataqueusuario = document.getElementById("poder-enemigo-aleatorio")
let poderenemigoa = document.getElementById("poder-elegido")

function ataqueSemen() {
    let varpoderenemigo = poderenemigo()
    varpoderenemigo
    ataqueusuario = document.getElementById("poder-elegido").innerHTML = "semen"
}
function ataqueSangre() {
    let varpoderenemigo = poderenemigo()
    varpoderenemigo
    ataqueusuario = document.getElementById("poder-elegido").innerHTML = "sangre"
}
function ataqueSudor() {
    let varpoderenemigo = poderenemigo()
    varpoderenemigo
    ataqueusuario = document.getElementById("poder-elegido").innerHTML = "sudor"
}



function poderenemigo() {
    let poderenemigoa = document.getElementById("poder-enemigo-aleatorio")
    let aleatorioenemigo = aleatorio1(1,3)
    if (aleatorioenemigo == 1) {
        poderenemigoa.innerHTML = "semen"
    } else if (aleatorioenemigo == 2) {
        poderenemigoa.innerHTML = "sangre"
    } else {
        poderenemigoa.innerHTML = "sudor"
    }
}

function aleatorio1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    


function seleccionarMascotaJugador(){
    let selectCucarron = document.getElementById("cucarrón");
    let selectCucaracha = document.getElementById("cucaracha");
    if (selectCucarron.checked) {
        document.getElementById("tumascota").innerHTML = "cucarrón";
    } else if (selectCucaracha.checked) {
        document.getElementById("tumascota").innerHTML = "cucaracha";
    } else
        alert("elije una mascota");  

    seleccionarMascotaEnemigo()
}    



function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = document.getElementById("mascotaenemigo")
    let mascotaAleatoria = aleatorio(1,2)

    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = "cucarrón";
    } else {
        mascotaEnemigo.innerHTML = "cucaracha";
    }

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


