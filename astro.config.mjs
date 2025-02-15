import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://nicofani.github.io',
  base: 'nicofani.github.io',
  integrations: [tailwind()]
})
