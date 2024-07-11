import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es-MX',
    locales: ['es-MX', 'en-US']
  },
  integrations: [tailwind()],
  site: 'https://angeldev.me',
  base: '/',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
