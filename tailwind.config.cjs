/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sans': ['Source Code Pro']
			},
			colors: {
				'text': '#231710',
				'background': '#f7f1ed',
				'primary': '#325f2b',
				'secondary': '#cedfe9',
				'accent': '#9649a2',
				'dark': '#231710'
			}
		},			
	},

	plugins: []
};

module.exports = config;
