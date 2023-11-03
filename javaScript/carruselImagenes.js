const imagenes = [
    {
         "url": "assets/Proyectos Bootcamp/4xcRlfHZPT.jpg",
         "nombre": "Proyecto 01",
         "descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas nam debitis ratione."
    },
    {
        "url": "assets/Proyectos Bootcamp/mvcDG11HOT.png",
        "nombre": "API New York Time",
        "descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas nam debitis ratione."
    },
    {
        "url": "assets/Proyectos Bootcamp/6f5eXqhrsS.png",
        "nombre": "API New York Time",
        "descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas nam debitis ratione."
    },
    {
        "url": "assets/Proyectos Bootcamp/Cp2fjyPcED.png",
        "nombre": "API New York Time",
        "descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas nam debitis ratione."
    }
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;
posicionCarrusel()



atras.addEventListener('click', function() {
    actual -= 1

    if (actual == -1) {
        actual = imagenes.length - 1
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen 1" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripción}</p>
    `
    
    posicionCarrusel()

})


adelante.addEventListener('click', function() {
    actual += 1

    if (actual == imagenes.length) {
        actual = 0
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen 1" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripción}</p>
    `

    posicionCarrusel()
})


function posicionCarrusel() {
    puntos.innerHTML = ""
    for (let i = 0; i <imagenes.length; i++){
        if(i == actual) {
            puntos.innerHTML += '<p class="bold>.<p>'
        }
        else{
            puntos.innerHTML += '<p>.</p>'
        }
    }
}