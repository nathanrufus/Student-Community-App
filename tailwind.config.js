/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2C5F2D",
				secondary: "#97BC62",
				tertiary: "#707070",
				pink: "#EE9AE5",
			},
		},
	},
	plugins: [],
}
