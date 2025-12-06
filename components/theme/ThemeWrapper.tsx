"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useMounted = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return mounted;
};

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen transition-colors duration-500 ease-in-out bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
			{children}
		</div>
	);
};

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted) {
		return (
			<div className="p-2 w-[34px] h-[34px] rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
		);
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform active:scale-95"
		>
			<span className="sr-only">Toggle theme</span>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
};

export { ThemeToggle, ThemeWrapper };
