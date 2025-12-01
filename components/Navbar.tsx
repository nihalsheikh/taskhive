import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navbarLinks } from "@/constants";
import Image from "next/image";

interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
				isScrolled
					? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-3"
					: "bg-transparent border-transparent py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				{/* Logo Section */}
				<div className="flex items-center gap-2 cursor-pointer select-none">
					<div className="relative h-8 md:h-10 flex items-center">
						<span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-zinc-900 dark:text-zinc-100">
							TASKHIVE
						</span>
						{/* Decorative circuit dot - Neutral Color */}
						<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400 ml-1 mt-3"></div>
					</div>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navbarLinks.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
						>
							{item.label}
						</a>
					))}
					<a
						href="sign-in"
						className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
					>
						Sign In
					</a>
				</div>

				{/* Actions */}
				<div className="hidden md:flex items-center gap-4">
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
						aria-label="Toggle theme"
					>
						{isDark ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<a
						href="sign-up"
						className="px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:opacity-80 transition-opacity"
					>
						Get Started Free
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-4">
					<button
						onClick={toggleTheme}
						className="p-2 text-zinc-600 dark:text-zinc-400"
					>
						{isDark ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="text-zinc-900 dark:text-zinc-100"
					>
						{isMobileMenuOpen ? (
							<X size={24} />
						) : (
							<Menu size={24} />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl">
					{navbarLinks.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-lg font-medium text-zinc-900 dark:text-zinc-100"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{item.label}
						</a>
					))}
					<a
						href="sign-in"
						className="text-lg font-medium text-zinc-900 dark:text-zinc-100"
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Sign In
					</a>
					<div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
					<a
						href="sign-up"
						onClick={() => setIsMobileMenuOpen(false)}
						className="w-full py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-center font-semibold"
					>
						Get Started Free
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
