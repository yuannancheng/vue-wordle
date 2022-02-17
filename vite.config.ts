import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/games/vue-wordle/',
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
});
