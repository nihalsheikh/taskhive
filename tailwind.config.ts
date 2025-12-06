import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class", // Changed from 'selector' to 'class' for reliability
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				marquee: "marquee 25s linear infinite",
				// New animation for the pricing card border
				"border-beam":
					"border-beam calc(var(--duration)*1s) infinite linear",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				// Keyframes for the racing light
				"border-beam": {
					"100%": { offsetDistance: "100%" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
