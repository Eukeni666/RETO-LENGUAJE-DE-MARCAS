// eventos.js
import { renderizar } from './render.js';
import { canvasHome, contenerdorMain, items, itemSeleccionado, seleccionarItem } from './estado.js';

let puntoDeArrastre = { x: 0, y: 0 };

export function ajustarCanvas() {
  canvasHome.width = contenerdorMain.clientWidth;
  canvasHome.height = contenerdorMain.clientHeight;

  renderizar(canvasHome, canvasHome.width, canvasHome.height);
}

function realizarMovimiento(e) {
  if (!itemSeleccionado) return;

  const rect = canvasHome.getBoundingClientRect();
  const x = (e.clientX - rect.left) / canvasHome.width;
  const y = (e.clientY - rect.top) / canvasHome.height;

  // Actualizamos posición con el offset
  itemSeleccionado.x = x - puntoDeArrastre.x;
  itemSeleccionado.y = y - puntoDeArrastre.y;

  renderizar(canvasHome, canvasHome.width, canvasHome.height);
}

export function escucharEventoClick() {
  canvasHome.addEventListener('mousedown', (e) => {
    const rect = canvasHome.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / canvasHome.width;
    const clickY = (e.clientY - rect.top) / canvasHome.height;

    items.forEach((item) => {
      const difX = Math.abs(item.x - clickX);
      const difY = Math.abs(item.y - clickY);

      if (difX < 0.05 && difY < 0.05) {
        seleccionarItem(item);

        puntoDeArrastre.x = clickX - item.x;
        puntoDeArrastre.y = clickY - item.y;

        // Funciones de control
        const mover = (ev) => realizarMovimiento(ev);
        const soltar = () => {
          seleccionarItem(null); // Soltamos el item en el estado
          window.removeEventListener('mousemove', mover);
          window.removeEventListener('mouseup', soltar);
        };

        // Eventos temporalmente
        window.addEventListener('mousemove', mover);
        window.addEventListener('mouseup', soltar);
      }
    });
  });
}
