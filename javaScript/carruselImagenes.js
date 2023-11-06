const imagenes = [
    {
         "url": "assets/Proyectos Bootcamp/mvcDG11HOT.png",
         "nombre": "Tecnologías y Herramientas",
         "descripción": "HTML, CSS, JavaScript, Firebase, GitHub"
    },
    {
        "url": "assets/Proyectos Bootcamp/VVe3uqQfOs.png",
        "nombre": "Tecnologías y Herramientas",
        "descripción": "HTML, CSS, JavaScript, TypeScript, React, Docker Compose, MongoDB, Styled Components, Node, GitHub"
    },
    {
        "url": "assets/Proyectos Bootcamp/8CjPdV0l2f.png",
        "nombre": "Tecnologías y Herramientas",
        "descripción": "HTML, CSS, JavaScript, TypeScript, React, Docker Compose, PostgreSQL, Styled Components, Node, GitHub"
    },
    {
        "url": "assets/Proyectos Bootcamp/jpZvItl79C.png",
        "nombre": "Tecnologías y Herramientas",
        "descripción": "HTML, CSS, JavaScript, TypeScript, React, Docker Compose, PostgreSQL, MUI, Styled Components, Node, GitHub"
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
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.</p>'
        }
    }
}