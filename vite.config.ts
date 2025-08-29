import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Plugin pour mettre à jour automatiquement la date de publication
function updatePublicationDate() {
  return {
    name: 'update-publication-date',
    transformIndexHtml(html: string) {
      const currentDate = new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
      const currentDateTime = new Date().toISOString() // Format ISO complet

      return html
        .replace(/content="2025-08-29"/g, `content="${currentDate}"`)
        .replace(/content="2025-08-29T00:00:00\+00:00"/g, `content="${currentDateTime}"`)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    updatePublicationDate(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
