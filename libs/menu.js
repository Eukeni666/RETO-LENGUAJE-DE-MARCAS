const botonatras = document.getElementById('atras');
const botonsiguiente = document.getElementById('siguiente');

const enlaces = [
    '/index.html',
    '/src/pages/baseDeDatos.html',
    '/src/pages/lenguaje-de-marcas.html',
    '/src/pages/entornos.html',
    '/src/pages/sostenibilidad.html',
    '/src/pages/ipe.html',
    '/src/pages/ingles.html',
];

function navegarA(indice) {
    window.location.href = enlaces[(indice + enlaces.length) % enlaces.length];
}

function obtenerIndiceActual() {
    const rutaActual = window.location.pathname;
    const indiceActual = enlaces.findIndex(enlace => rutaActual.endsWith(enlace));

    return indiceActual === -1 ? 0 : indiceActual;
}

botonatras?.addEventListener('click', () => {
    navegarA(obtenerIndiceActual() - 1);
});

botonsiguiente?.addEventListener('click', () => {
    navegarA(obtenerIndiceActual() + 1);
});

