/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/**/*.{html,js}'],
	theme: {
		extend: {
			screens: {
				widescreen: { raw: '(min-aspect-ratio: 1)' },
				largescreen: { raw: '(max-aspect-ratio: 425/850)' },
			},
		},
	},
	plugins: [],
}
