import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact", // This base path is useful if you are deploying under a subdirectory
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
  },
});
