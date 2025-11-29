import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}'],
	theme: {
		extend: {
		  fontFamily: {
			Rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
		  },
		  colors: {
			tealish: '#00918E',
		  },
		},
	  },
	plugins: [],
}
