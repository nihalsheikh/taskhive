import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/constants";

const Testimonials: React.FC = () => {
	return (
		<section
			id="testimonials"
			className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Loved by Builders
					</h2>
					<p className="text-zinc-600 dark:text-zinc-400">
						Join thousands of teams shipping faster with TaskHive.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="flex gap-1 mb-6 text-yellow-500">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={16}
										fill="currentColor"
									/>
								))}
							</div>
							<p className="text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">
								&quot;{t.content}&quot;
							</p>
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
									{t.avatar}
								</div>
								<div>
									<div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
										{t.name}
									</div>
									<div className="text-xs text-zinc-500 dark:text-zinc-500">
										{t.role}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
