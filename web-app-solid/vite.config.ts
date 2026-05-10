import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [devtools(), solidPlugin(), tailwindcss()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:6060',
                changeOrigin: true,
            }
        }
    },
    build: {
        target: 'esnext',
    },
});
