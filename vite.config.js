import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url';

// ESM ortamı için __dirname tanımı
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      'contexts': path.resolve(__dirname, 'src/contexts'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'components': path.resolve(__dirname, 'src/components'),
      'providers': path.resolve(__dirname, 'src/providers'),
    }
  }
});
