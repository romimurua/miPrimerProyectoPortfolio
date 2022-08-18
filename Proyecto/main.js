const menu = document.querySelector("ul.nav--menu")
const icon = document.getElementById ("menu-icon")


icon.addEventListener("click", toggleMenu)

function toggleMenu() {
    menu.classList.toggle("active")
}



const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.container--areas')


prev.addEventListener('click', ( ) => {
    slider.scrollLeft -= 300
}

)

next.addEventListener('click', ( ) => {
    slider.scrollLeft += 300
}

)


const visual = document.querySelector('.visual')
const pasar = document.querySelector('.pasar')
const cambiar = document.querySelector('.cambiar')
const seleccionar = document.querySelector('.seleccionar')
const deslizar = document.querySelector('.portfolio')


visual.addEventListener('click', ( ) => {
    deslizar.scrollLeft -= 1000
}

)


pasar.addEventListener('click', ( ) => {
    deslizar.scrollLeft += 1000
}

)

cambiar.addEventListener('click', ( ) => {
    deslizar.scrollLeft -= 300
}

)


seleccionar.addEventListener('click', ( ) => {
    deslizar.scrollLeft += 300
}

)


