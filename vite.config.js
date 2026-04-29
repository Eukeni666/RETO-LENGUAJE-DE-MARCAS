import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/RETO-LENGUAJE-DE-MARCAS/' : '/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        baseDeDatos: resolve(__dirname, 'src/pages/baseDeDatos.html'),
        digitalizacion: resolve(__dirname, 'src/pages/digitalizacion.html'),
        entornos: resolve(__dirname, 'src/pages/entornos.html'),
        ingles: resolve(__dirname, 'src/pages/ingles.html'),
        ipe: resolve(__dirname, 'src/pages/ipe.html'),
        lenguajeDeMarcas: resolve(__dirname, 'src/pages/lenguaje-de-marcas.html'),
        sostenibilidad: resolve(__dirname, 'src/pages/sostenibilidad.html')
      }
    }
  }
}))
