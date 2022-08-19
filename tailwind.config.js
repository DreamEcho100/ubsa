/** @type {import('tailwindcss').Config} */

const fullContentPageHight = 'calc(100vh - var(--nav-height))';
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
				'full-content-page': fullContentPageHight,
			},
			maxHeight: {
				'full-content-page': fullContentPageHight,
			},
			minHeight: {
				'full-content-page': fullContentPageHight,
			},
			spacing: {
				'main-nav-page': 'var(--nav-height)',
				// 'content-page': 'calc(var(--nav-height))',
			},
		},
	},
	plugins: [],
};
