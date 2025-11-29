import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/crm/',
  build: {
    outDir: '../../public/crm',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3001,
  },
  optimizeDeps: {
    exclude: ['axios']
  },
  define: {
    global: 'globalThis',
  }
});
