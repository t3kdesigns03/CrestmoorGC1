import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.crestmoorgc.com',
  vite: {
    plugins: [tailwindcss()]
  }
});