import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure the output directory is correct
    rollupOptions: {
      input: './index.html',
    }
  },
  server: {
    port: 5110
  }
});
