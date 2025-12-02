import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA: React.FC = () => {
	return (
		<section
			id="get-started"
			className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900"
		>
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
					Ready to streamline your workflow?
				</h2>
				<p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
					Join the next generation of product teams. Start your 14-day
					free trial today. No credit card required.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link
						href="/sign-up"
						className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
					>
						Get Started Free
						<ArrowRight size={18} />
					</Link>
					<Link
						href="/pricing"
						className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-100 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
					>
						Contact Sales
					</Link>
				</div>

				<p className="mt-6 text-sm text-zinc-400 dark:text-zinc-600">
					Free for teams up to 5 users. Cancel anytime.
				</p>
			</div>
		</section>
	);
};

export default CTA;
