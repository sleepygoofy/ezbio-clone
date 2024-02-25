import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map 'react-router-dom' to its actual location
      'react-router-dom': 'react-router-dom/esm/react-router-dom.js'
    }
  }
});
