import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations:[react(), tailwind()],
  // Remove any assets configuration as it's not supported
  // Use basic configuration only
});