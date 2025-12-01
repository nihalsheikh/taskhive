"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Footer from "./Footer";
import ThemeWrapper from "./theme/ThemeWrapper";

const App: React.FC = () => {
	// Theme management
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		// Check system preference or saved preference
		const savedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		setIsDark((prev) => {
			const newTheme = !prev;
			if (newTheme) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
			return newTheme;
		});
	};

	return (
		<div className=" bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
			<ThemeWrapper>
				<Navbar isDark={isDark} toggleTheme={toggleTheme} />

				<main>
					<Hero />
					<Features />
					<Testimonials />
					<Pricing />
					<CTA />
				</main>

				<Footer />
			</ThemeWrapper>
		</div>
	);
};

export default App;
