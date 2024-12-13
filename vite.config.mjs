import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import autoprefixer from 'autoprefixer';

export default defineConfig(() => {
  return {
    base: './', // Ensures relative paths for assets
    build: {
      outDir: 'build', // Output directory for production build
      sourcemap: true, // Useful for debugging production issues
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(), // Handles vendor prefixes
        ],
      },
      preprocessorOptions: {
        scss: {
          quietDeps: true, // Suppresses dependency warnings
        },
      },
    },
    esbuild: {
      loader: 'jsx', // Transpiles JSX files
      include: /src\/.*\.jsx?$/, // Matches JSX/JS files in the src directory
      exclude: [], // No exclusions for now
    },
    optimizeDeps: {
      force: true, // Forces dependency optimization
      esbuildOptions: {
        loader: {
          '.js': 'jsx', // Ensures ESBuild treats .js as JSX
        },
      },
    },
    plugins: [react()], // Enables React fast refresh and JSX support
    resolve: {
      alias: {
        'src/': `${path.resolve(__dirname, 'src')}/`, // Resolves absolute paths in the src directory
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'], // Ensures these extensions are resolved
    },
    server: {
      port: 3000, // Development server port
      proxy: {}, // Add proxy settings if needed
    },
  };
});
