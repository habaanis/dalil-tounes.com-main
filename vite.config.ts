import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",       // ✅ le build sortira dans dist/
    emptyOutDir: true,    // ✅ supprime l’ancien contenu à chaque build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          maps: ['@googlemaps/js-api-loader'],
          ui: ['lucide-react'],
        },
      },
    },
  },
});
