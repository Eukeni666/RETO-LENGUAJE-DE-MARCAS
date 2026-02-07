const canvas = document.getElementById('canvas');

// Estado inicial de los elementos a renderizar
let items = [
  { id: 1, tipo: 'texto', contenido: 'Hola Mundo', x: 0.5, y: 0.5, color: 'black', fuente: '30px Arial' },
  { id: 2, tipo: 'emoji', contenido: '🚀', x: 0.8, y: 0.9, tamaño: 40 },
  { id: 3, tipo: 'imagen', src: 'ruta/a/tu/imagen.png', x: 200, y: 200, w: 100, h: 100, imgObj: null }];

export function renderizar() {
  const ctx = canvas.getContext('2d');

  // Limpiar el canvas antes de renderizar
  ctx.clearRect(0, 0, canvas.width, canvas.height); ç

  // Renderizar cada elemento
  items.forEach(item => {
    const x = item.x * canvas.width;
    const y = item.y * canvas.height;

    if (item.tipo === 'texto') {
      ctx.font = item.fuente;
      ctx.fillStyle = item.color;
      ctx.fillText(item.contenido, x, y);
    }
  })
}
