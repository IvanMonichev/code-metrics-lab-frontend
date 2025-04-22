import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { version } from './package.json'
import process from 'node:process'

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(version)
  },
  server: {
    port: Number(process.env.VITE_SERVER_PORT) || 3000
  },
  resolve: {
    alias: {
      '@': 'src'
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
})
