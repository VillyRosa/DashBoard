var header = window.document.querySelector('header#headerPrincipal')
var menu = window.document.querySelector('div#menu')
var home = window.document.querySelector('div#home')
var graphics = window.document.querySelector('div#graphics')
var config = window.document.querySelector('div#config')
var contador = 0
var estic = 0

// Clicar no menu
function clickMenu() {
    if (contador == 0) {

        header.style.width = `200px`
        menu.innerHTML += `Menu`
        home.innerHTML += `Home` 
        graphics.innerHTML += `Gráficos`
        config.innerHTML += `Configurações`

        estic = 1
        contador = 1
    } else {
        header.style.width = `80px`
        menu.innerHTML = `<i class="fa-solid fa-bars" id="menu-icon"></i>`
        home.innerHTML = `<i class="fa-solid fa-house"></i>`
        graphics.innerHTML = `<i class="fa-solid fa-chart-line"></i>`
        config.innerHTML = `<i class="fa-solid fa-gear"></i>`

        estic = 0
        contador = 0
    }
}


// Passar o mouse e tirar nos ícones
function enterHome() {
    if (estic == 0) {  
        home.innerHTML += `Home` 
        home.style.width = `200px`
    } 
    home.style.backgroundColor = `white`
    home.style.color = `black`
}

function leaveHome() {
    if (estic == 0) { 
        home.innerHTML = `<i class="fa-solid fa-house"></i>`
    } 
    home.style.backgroundColor = ``
    home.style.color = `white`
}

function enterGraphics() {
    if (estic == 0) {
        graphics.innerHTML += `Gráficos` 
        graphics.style.width = `200px`
    }
    graphics.style.backgroundColor = `white`
    graphics.style.color = `black`
}

function leaveGraphics() {
    if (estic == 0) {
        graphics.innerHTML = `<i class="fa-solid fa-chart-line"></i>`
    }   
    graphics.style.backgroundColor = ``
    graphics.style.color = `white`
}

function enterConfig() {
    if (estic == 0) {
        config.innerHTML += `Configurações` 
        config.style.width = `200px`
    }
    config.style.backgroundColor = `white`
    config.style.color = `black` 
}

function leaveConfig() {
    if (estic == 0) {
        config.innerHTML = `<i class="fa-solid fa-gear"></i>`
    }
    config.style.backgroundColor = ``
    config.style.color = `white`
}