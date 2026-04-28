const botonatras = document.getElementById('atras');
const botonsiguiente = document.getElementById('siguiente');

const BASE_URL = './src/pages'
const enlaces = ['./index.html', 
    './baseDeDatos.html', 
    './lenguaje-de-marcas.html', 
    './entornosDeDesarrollo.html', 
    './sostenibilidad.html',
    './itinerario.html',
    './ingles.html',];


botonatras.addEventListener('click', () => {
    let urlActual = ''
    if (window.location.pathname.endsWith('/index.html')) {
        urlActual = window.location.href = BASE_URL + enlaces[enlaces.length - 1];
    }

    const urlActual = window.location.pathname;
    const indiceActual = enlaces.findIndex(enlace => urlActual.endsWith(enlace));
    
})

botonsiguiente.addEventListener('click', () => {
    const urlActual = window.location.pathname;
    const indiceActual = enlaces.findIndex(enlace => urlActual.endsWith(enlace));
    console.log(indiceActual);
})

