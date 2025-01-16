import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    dist:new URL('./dist/', import.meta.url),
    redirects:false,
  }),
  integrations: [tailwind(), react()],
});