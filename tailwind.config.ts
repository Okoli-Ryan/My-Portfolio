import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7843e9",
				dark: "#0e0e0e",
				light: "#f8f8f8",
				darkGray: "#262626",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["var(--font-poppins)"],
				mono: ["var(--font-raleway)"],
				poppins: ["var(--font-poppins)"],
				raleway: ["var(--font-raleway)"],
			},
		},
	},
	plugins: [],
};
export default config;
