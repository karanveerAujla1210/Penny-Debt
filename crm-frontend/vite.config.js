import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Image optimization
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
    // Bundle analyzer
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    // PWA support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Penny-Debt CRM',
        short_name: 'Penny-Debt',
        description: 'Penny-Debt CRM Application',
        theme_color: '#ffffff',
      },
    }),
  ],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other large dependencies here
        },
      },
    },
    chunkSizeWarningLimit: 1000, // in kbs
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
});