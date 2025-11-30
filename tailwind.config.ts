// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// ...
		// make sure it's pointing to the ROOT node_module
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		heroui({
			layout: {
				dividerWeight: "1px", // h-divider the default height applied to the divider component
				disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
				fontSize: {
					tiny: "0.75rem", // text-tiny
					small: "0.875rem", // text-small
					medium: "1rem", // text-medium
					large: "1.125rem", // text-large
				},
				lineHeight: {
					tiny: "1rem", // text-tiny
					small: "1.25rem", // text-small
					medium: "1.5rem", // text-medium
					large: "1.75rem", // text-large
				},
				radius: {
					small: "2px", // rounded-small
					medium: "4px", // rounded-medium
					large: "6px", // rounded-large
				},
				borderWidth: {
					small: "1px", // border-small
					medium: "2px", // border-medium (default)
					large: "3px", // border-large
				},
			},
			themes: {
				light: {
					layout: {
						hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
							// shadow-medium
							medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
							// shadow-large
							large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
						},
					},
					colors: {
						background: "#FFFFFF", // or DEFAULT
						foreground: "#11181C", // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: "#FFFFFF",
							DEFAULT: "#006FEE",
						},
						// ... rest of the colors
					},
				},
				dark: {
					layout: {
						hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small: "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
							// shadow-medium
							medium: "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
							// shadow-large
							large: "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
						},
					},
					colors: {
						background: "#000000", // or DEFAULT
						foreground: "#ECEDEE", // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: "#FFFFFF",
							DEFAULT: "#006FEE",
						},
					},
					mytheme: {
						// custom theme
						extend: "dark",
						colors: {
							primary: {
								DEFAULT: "#BEF264",
								foreground: "#000000",
							},
							focus: "#BEF264",
						},
					},
				},
			},
		}),
	],
};
