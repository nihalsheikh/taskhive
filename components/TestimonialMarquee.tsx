import { testimonials } from "@/constants";

const TestimonialMarquee = () => (
	<div className="relative flex overflow-x-hidden group">
		<div className="animate-marquee flex gap-6 whitespace-nowrap py-10">
			{[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
				<div
					key={i}
					className="w-[350px] shrink-0 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
				>
					<p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed whitespace-normal">
						&quot;{t.text}&quot;
					</p>
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
						<div className="text-xs">
							<div className="font-semibold">{t.name}</div>
							<div className="text-zinc-500">{t.role}</div>
						</div>
					</div>
				</div>
			))}
		</div>
		<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
		<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
	</div>
);

export default TestimonialMarquee;
