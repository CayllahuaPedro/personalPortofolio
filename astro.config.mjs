import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  // Remove any assets configuration as it's not supported
  // Use basic configuration only
});