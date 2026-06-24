import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': fileURLToPath(new URL('./src/shared/ui', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/shared/styles', import.meta.url)),
      '@logos': fileURLToPath(new URL('./src/shared/logos', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/shared/icons', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
      '@theme': fileURLToPath(new URL('./src/theme', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
    },
  },
});