/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'neon-blue': '#81d2d0',
				'neon-shadow-blue':
					'0 0 10px rgba(129, 210, 208, 0.7), 0 0 40px rgba(129, 210, 208, 0.7)',
				'neon-white': '#ffffff',
				'neon-shadow-white':
					'0px -1px 5px #cecece, 0px -1px 0px #cecece, 0px -1px 20px #cecece',
				'neon-violet': '#bb99fa',
				'neon-shadow-violet':
					'0px -1px 5px #bb99fa, 0px -1px 0px #bb99fa, 0px -1px 20px #bb99fa',
				'neon-green': '#b6d161',
				'neon-shadow-green':
					'0px -1px 5px #b6d161, 0px -1px 0px #b6d161, 0px -1px 20px #b6d161',
				'neon-beige': '#f5b7a4',
				'neon-shadow-beige':
					'0px -1px 5px #f5b7a4, 0px -1px 0px #f5b7a4, 0px -1px 20px #f5b7a4'
			}
		}
	},
	plugins: []
}
