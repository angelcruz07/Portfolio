import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },
  integrations: [tailwind()],
  site: 'https://angeldev.me',
  base: '/',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
