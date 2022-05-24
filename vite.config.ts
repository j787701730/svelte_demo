import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: {
        default: '/index.html',
        user: '/user.html'
      }
    }
  }
})
