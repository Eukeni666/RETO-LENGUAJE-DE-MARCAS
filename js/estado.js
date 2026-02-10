export const contenerdorMain = document.getElementById('mainContenedor');

export const canvasHome = document.getElementById('canvasHome');

export const items = [
  { id: 1, tipo: 'texto', contenido: 'Hola Mundo', x: 0.5, y: 0.5, color: 'black', size: 80, fuente: 'Arial' },
  { id: 2, tipo: 'emoji', contenido: '🚀', x: 0.8, y: 0.9, size: 100, fuente: 'Arial' },
]

export let itemSeleccionado = null;

export const seleccionarItem = (valor) => {
  itemSeleccionado = valor;
}
