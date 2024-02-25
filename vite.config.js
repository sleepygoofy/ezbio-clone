import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map 'react-router-dom' to its actual location
      'react-router-dom': 'react-router-dom'
    }
  }
});
