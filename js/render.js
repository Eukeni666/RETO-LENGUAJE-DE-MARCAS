import { items } from './estado.js';

export function renderizar(canvas, ancho, alto) {
  const ctx = canvas.getContext('2d');

  // Limpiar el canvas antes de renderizar
  ctx.clearRect(0, 0, ancho, alto);

  // Renderizar cada elemento
  items.forEach((item) => {
    const x = item.x * ancho;
    const y = item.y * alto;

    if (item.tipo === 'texto') {
      ctx.font = `${item.size}px ${item.fuente}`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = item.color;
      ctx.fillText(item.contenido, x, y);
    } else if (item.tipo === 'emoji') {
      ctx.font = `${item.size}px ${item.fuente}`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(item.contenido, x, y);
    }
  })
}
