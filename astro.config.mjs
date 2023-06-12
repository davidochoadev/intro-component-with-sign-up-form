import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://davidochoadev.github.io',
  base: '/intro-component-with-sign-up-form',
  integrations: [react(), tailwind()]
});