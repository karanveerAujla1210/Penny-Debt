import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@website': path.resolve(__dirname, '../website/src'),
      '@crm': path.resolve(__dirname, '../crm/src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'website-vendor': ['react', 'react-dom', 'react-router-dom'],
          'crm-vendor': ['axios'],
        },
      },
    },
  },
});
