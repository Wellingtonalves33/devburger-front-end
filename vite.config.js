import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
      // eslint-disable-next-line no-undef
      'assets': path.resolve(__dirname, './src/assets')
    }
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        // eslint-disable-next-line no-undef
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  }
})