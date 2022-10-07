/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		fontFamily: {
			signature: ["Montserrat"],
			base: ["Nunito Sans", "Montserrat", "Roboto", "Arial", "sans-serif"],
		},
		backgroundColor: {
			secondary: "#464b4d",
			primary: "#181a1b",
		},
	},
	plugins: [],
};
