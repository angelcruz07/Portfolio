import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://angelcruz07.github.io',
	base: '/angelcruz07/angelcruz07.github.io.git'
})
