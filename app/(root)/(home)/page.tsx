"use client";

import BentoItem from "@/components/BentoItem";
import GridBackground from "@/components/Grid";
import HeroCard from "@/components/HeroCard";
import PricingCard from "@/components/PricingCard";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { ThemeWrapper, ThemeToggle } from "@/components/theme/ThemeWrapper";
import clsx, { ClassValue } from "clsx";
import { motion } from "framer-motion";
import {
	Layout,
	Zap,
	Users,
	BarChart3,
	Command,
	ArrowRight,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const TaskhiveLanding = () => {
	return (
		<ThemeWrapper>
			<div className="relative isolate">
				<GridBackground />

				{/* Navbar */}
				<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl transition-all">
					<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
						<div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
							<div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
								<Layout className="w-4 h-4 text-white dark:text-black" />
							</div>
							Taskhive
						</div>
						<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
							<a
								href="#features"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Features
							</a>
							<a
								href="#testimonials"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Customers
							</a>
							<a
								href="#pricing"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Pricing
							</a>
						</div>
						<div className="flex items-center gap-4">
							<ThemeToggle />
							<button className="hidden sm:block px-4 py-2 text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-opacity">
								Get Started
							</button>
						</div>
					</div>
				</nav>

				{/* Hero */}
				<section className="relative pt-32 pb-20 px-6">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400"
						>
							<span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
							Taskhive 2.0 is now live
						</motion.div>

						<motion.h1
							className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white pb-2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Project management <br />
							<span className="text-zinc-400 dark:text-zinc-600">
								for purists.
							</span>
						</motion.h1>

						<motion.p
							className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Strip away the noise. Focus on the code. Taskhive is
							the minimalist workspace designed for
							high-performance engineering teams.
						</motion.p>

						<motion.div
							className="flex items-center justify-center gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
								Start Building
							</button>
							<button className="px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
								Cmd+K Demo
							</button>
						</motion.div>
					</div>
					<HeroCard />
				</section>

				{/* Features */}
				<section id="features" className="py-32 px-6 max-w-7xl mx-auto">
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Master your workflow.
						</h2>
						<p className="text-zinc-500 dark:text-zinc-400">
							Everything you need, nothing you don&apos;t.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
						<BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
							<div className="mb-4">
								<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
									<Zap size={20} />
								</div>
								<h3 className="text-2xl font-semibold mb-2">
									Instant Sync
								</h3>
								<p className="text-zinc-500 dark:text-zinc-400 max-w-md">
									Real-time multiplayer by default. Changes
									reflect instantly across all client
									instances via websockets.
								</p>
							</div>
							<div className="w-full h-48 bg-zinc-100 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden flex items-center justify-center gap-4">
								{[0, 1, 2].map((i) => (
									<motion.div
										key={i}
										animate={{
											scaleY: [1, 1.5, 1],
											opacity: [0.5, 1, 0.5],
										}}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											delay: i * 0.2,
										}}
										className="w-8 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-sm"
									/>
								))}
							</div>
						</BentoItem>

						<BentoItem delay={0.1}>
							<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
								<Users size={20} />
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Collaborative
							</h3>
							<p className="text-zinc-500 dark:text-zinc-400 text-sm">
								See who&apos;s viewing what. Follow mode for
								pair programming sessions.
							</p>
						</BentoItem>

						<BentoItem
							delay={0.2}
							className="bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black"
						>
							<div className="w-10 h-10 rounded-lg bg-white/20 dark:bg-black/10 flex items-center justify-center mb-4">
								<BarChart3 size={20} />
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Velocity Tracking
							</h3>
							<p className="opacity-80 text-sm">
								Automated burn-down charts that actually make
								sense.
							</p>
						</BentoItem>

						<BentoItem
							delay={0.3}
							className="md:col-span-2 flex items-center gap-8"
						>
							<div className="flex-1">
								<h3 className="text-2xl font-semibold mb-4">
									Keyboard First
								</h3>
								<p className="text-zinc-500 dark:text-zinc-400 mb-6">
									Never touch your mouse again. Every action
									has a shortcut.
								</p>
								<div className="flex gap-2">
									{["Cmd+K", "G then I", "C"].map((key) => (
										<span
											key={key}
											className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono"
										>
											{key}
										</span>
									))}
								</div>
							</div>
							<div className="flex-1 flex justify-center">
								<Command
									size={120}
									strokeWidth={1}
									className="text-zinc-200 dark:text-zinc-800"
								/>
							</div>
						</BentoItem>

						<BentoItem delay={0.3}>
							<div className="w-full h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-around mb-4">
								<Zap size={20} />
								<Users size={20} />
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Early Bird Offer
							</h3>
							<p className="text-zinc-500 dark:text-zinc-400 text-sm">
								Join us now, and get 50% off on all billings
							</p>
						</BentoItem>
					</div>
				</section>

				{/* Testimonials */}
				<section
					id="testimonials"
					className="py-20 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20"
				>
					<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
						<h2 className="text-3xl font-bold">
							Loved by builders.
						</h2>
					</div>
					<TestimonialMarquee />
				</section>

				{/* Pricing */}
				<section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							Simple pricing.
						</h2>
						<p className="text-zinc-500 dark:text-zinc-400">
							No hidden fees. Cancel anytime.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
						<PricingCard
							title="Hobby"
							price="0"
							features={[
								"Up to 3 projects",
								"7-day history",
								"Community Support",
							]}
						/>
						{/* Popular Card with special effects */}
						<PricingCard
							title="Pro"
							price="29"
							popular={true}
							features={[
								"Unlimited projects",
								"Unlimited history",
								"Priority Support",
								"Guests access",
							]}
						/>
						<PricingCard
							title="Team"
							price="99"
							features={[
								"SAML SSO",
								"Audit logs",
								"Dedicated Success Manager",
								"SLA",
							]}
						/>
					</div>
				</section>

				{/* CTA */}
				<section className="py-32 px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
							Ready to work{" "}
							<span className="text-zinc-400">differently?</span>
						</h2>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
								Get Started for Free <ArrowRight size={18} />
							</button>
							<button className="px-8 py-4 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold transition-colors">
								Contact Sales
							</button>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6 bg-zinc-50 dark:bg-zinc-950">
					<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
						<div className="flex items-center gap-2 font-bold">
							<div className="w-6 h-6 rounded bg-zinc-900 dark:bg-white flex items-center justify-center">
								<Layout className="w-3 h-3 text-white dark:text-black" />
							</div>
							Taskhive
						</div>
						<div className="flex gap-8 text-sm text-zinc-500">
							<a
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Privacy
							</a>
							<a
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Terms
							</a>
							<a
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								Twitter
							</a>
							<a
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors"
							>
								GitHub
							</a>
						</div>
						<div className="text-xs text-zinc-400">
							© 2025 Taskhive Inc.
						</div>
					</div>
				</footer>
			</div>
		</ThemeWrapper>
	);
};

export default TaskhiveLanding;
