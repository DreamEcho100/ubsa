/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {},
			backgroundColor: {},
			height: {
				'main-nav-page': 'var(--nav-height)',
				'full-content-page': 'calc(100vh - var(--nav-height))',
			},
			maxHeight: {
				'full-content-page': 'calc(100vh - var(--nav-height))',
			},
			spacing: {
				'content-page': 'calc(var(--nav-height))',
			},
		},
	},
	plugins: [],
};
