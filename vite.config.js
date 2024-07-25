import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5110
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
});
