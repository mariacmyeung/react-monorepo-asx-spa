import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../../packages/ui/src')
    }
  },
  server: {
    port: 3001,
    open: true,
    historyApiFallback: true
  }
});