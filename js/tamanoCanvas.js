const contenerdorMain = document.getElementById('mainContenedor');
const canvasHome = document.getElementById('canvasHome');

function ajustarCanvas() {
    const anchoContenedor = contenerdorMain.clientWidth;
    const altoContenedor = contenerdorMain.clientHeight;
    canvasHome.width = anchoContenedor;
    canvasHome.height = altoContenedor;
} 

window.addEventListener('resize', ajustarCanvas);
window.addEventListener('load', ajustarCanvas);
