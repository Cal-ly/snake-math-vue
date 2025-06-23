import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
    },
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    outDir: 'dist'
  },
  base: '/snake-math-vue/'
})
