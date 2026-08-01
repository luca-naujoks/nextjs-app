import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [solidPlugin(), tailwindcss()],
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
        assetsInlineLimit: 0,
    },
});
