import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Asegúrate de que esto esté aquí
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'tone',
        'lucide-react' // <<-- ESTO ES LO IMPORTANTE
      ],
    },
  },
});