var header = window.document.querySelector('header#headerPrincipal')
var menu = window.document.querySelector('div#menu')
var home = window.document.querySelector('div#home')
var carros = window.document.querySelector('div#car')
var graphics = window.document.querySelector('div#graphics')
var config = window.document.querySelector('div#config')
var contador = 0
var estic = 0
var section = window.document.querySelector('section#sectionPrincipal')
var title = window.document.querySelector('div#title')

// Clicar no menu
function clickMenu() {
    if (contador == 0) {

        header.style.width = `200px`

        setTimeout(function() {
            menu.innerHTML += `Menu`
            home.style.width = `200px`
            home.innerHTML += `Home` 
            carros.style.width = `200px`
            carros.innerHTML += `Carros`
            graphics.style.width = `200px`
            graphics.innerHTML += `Gráficos`
            config.style.width = `200px`
            config.innerHTML += `Configurações`
        }, 1100)
        
        estic = 1
        contador = 1
    } else {
        header.style.width = `80px`
        menu.innerHTML = `<i class="fa-solid fa-bars" id="menu-icon"></i>`
        home.innerHTML = `<i class="fa-solid fa-house"></i>`
        carros.innerHTML = `<i class="fa-solid fa-car"></i>`
        graphics.innerHTML = `<i class="fa-solid fa-chart-line"></i>`
        config.innerHTML = `<i class="fa-solid fa-gear"></i>`

        estic = 0
        contador = 0
    }
}

// Passar o mouse e tirar nos ícones
function enterHome() {
    if (estic == 0) {  
        home.style.width = `200px`
        setTimeout (function() {
            home.innerHTML = `<i class="fa-solid fa-house"></i>Home`
        }, 270) 
    } 
    home.style.backgroundColor = `white`
    home.style.color = `black`
}

function leaveHome() {
    if (estic == 0) { 
        home.innerHTML = `<i class="fa-solid fa-house"></i>`
        home.style.width = `80px`
    } 
    home.style.backgroundColor = ``
    home.style.color = `white`
}

function enterCar() {
    if (estic == 0) {  
        carros.style.width = `200px`
        setTimeout (function() {
            carros.innerHTML = `<i class="fa-solid fa-car"></i>Carros`
        }, 270) 
    } 
    carros.style.backgroundColor = `white`
    carros.style.color = `black`
}

function leaveCar() {
    if (estic == 0) { 
        carros.innerHTML = `<i class="fa-solid fa-car"></i>`
        carros.style.width = `80px`
    } 
    carros.style.backgroundColor = ``
    carros.style.color = `white`
}

function enterGraphics() {
    if (estic == 0) {
        graphics.style.width = `200px`
        setTimeout (function() {
            graphics.innerHTML = `<i class="fa-solid fa-chart-line"></i>Gráficos`
        }, 270) 
    }
    graphics.style.backgroundColor = `white`
    graphics.style.color = `black`
}

function leaveGraphics() {
    if (estic == 0) {
        graphics.innerHTML = `<i class="fa-solid fa-chart-line"></i>`
        graphics.style.width = `80px`
    } 
    graphics.style.backgroundColor = ``
    graphics.style.color = `white`
}

function enterConfig() {
    if (estic == 0) {
        config.style.width = `200px`
        setTimeout(function() {
            config.innerHTML = `<i class="fa-solid fa-gear"></i>Configurações` 
        }, 270) 
    }
    config.style.backgroundColor = `white`
    config.style.color = `black` 
}

function leaveConfig() {
    if (estic == 0) {
        config.innerHTML = `<i class="fa-solid fa-gear"></i>`
        config.style.width = `80px`
    }
    config.style.backgroundColor = ``
    config.style.color = `white`
}

// Clicar nos ícones do menu
function clickHome() {
    title.innerHTML = `<h1>Concessionária</h1><h1>Villy's</h1>`
    title.style.marginTop = `100px`
    section.style.backgroundImage = `url(../imgs/carro-de-fundo.jpg)`
    section.style.backgroundSize = `cover`
}

function clickCar() {
    title.innerHTML = `<h1>Carros</h1>`
    title.style.marginTop = `50px`
    section.style.background = `#384d68`
}

function clickGraphics() {
    title.innerHTML = `<h1>Gráficos</h1>`
    section.style.background = `#384d68`
}

function clickConfig() {
    title.innerHTML = `<h1>Configurações</h1>`
    section.style.background = `#384d68`
}