import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {resolve,dirname} from 'path'
import {fileURLToPath} from 'url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(_dirname(fileURLToPath(import.meta.url)), 'components'),
      '#pages': resolve(_dirname(fileURLToPath(import.meta.url)), 'pages'),
      '#store': resolve(_dirname(fileURLToPath(import.meta.url)), 'store'),
      '#hoc': resolve(_dirname(fileURLToPath(import.meta.url)), 'hoc'),
      '#windows': resolve(_dirname(fileURLToPath(import.meta.url)), 'windows'),
    },
  },
})
