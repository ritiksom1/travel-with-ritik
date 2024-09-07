import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // If you need to explicitly externalize certain modules, list them here.
      // Otherwise, make sure `react-icons` is not listed if you want it bundled.
      external: [], // Example: ['some-external-module']

      // Ensure that `react-icons` is not causing issues by explicitly resolving its imports.
      // You can uncomment and modify the `input` and `output` properties if needed.
      // input: 'src/main.jsx', // Adjust according to your entry point
      // output: {
      //   format: 'es',
      //   dir: 'dist',
      // },
    },
  },
  resolve: {
    alias: {
      // Optionally, you can add aliases here if needed for resolving paths.
      // Example:
      // '@': '/src',
    },
  },
  // Optional: Enable verbose logging for debugging purposes
  // logLevel: 'info',
});
