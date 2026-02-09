import { ajustarCanvas, escucharEventoClick } from './eventos.js';

window.addEventListener('load', () => {
    ajustarCanvas();
    escucharEventoClick();
});

window.addEventListener('resize', ajustarCanvas);
