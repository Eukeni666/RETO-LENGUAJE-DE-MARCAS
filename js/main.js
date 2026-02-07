import { renderizar } from './render.js';

const contenerdorMain = document.getElementById('mainContenedor');
const canvasHome = document.getElementById('canvasHome');

function ajustarCanvas() {
    const anchoContenedor = contenerdorMain.clientWidth;
    const altoContenedor = contenerdorMain.clientHeight;
    
    canvasHome.width = anchoContenedor;
    canvasHome.height = altoContenedor;

    renderizar();
} 

window.addEventListener('load', ajustarCanvas);
window.addEventListener('resize', ajustarCanvas);
