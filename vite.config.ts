import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name } from './package.json';

// const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      // __APP_ENV__: env.APP_ENV,
    },
    server: {
      port: 8080,
      // 代理时使用
      /*proxy: {
        '/api': {
          target: 'https://xxx',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },*/
    },
    build: {
      minify: true,
      target: 'modules',
      outDir: 'dist',
      cssTarget: 'chrome61',
      sourcemap: false,
      cssCodeSplit: true,
      lib: {
        name,
        entry: new URL('src/main.tsx', import.meta.url).pathname,
        formats: ['es', 'umd'],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          globalVars: {},
          math: 'parens-division',
          javascriptEnabled: true,
        },
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  };
});
