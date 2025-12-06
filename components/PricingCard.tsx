import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const PricingCard = ({ title, price, features, popular = false }: any) => (
	<div className="relative h-full group">
		{popular && (
			<div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-sm dark:opacity-100 transition-all duration-1000 group-hover:duration-200 animate-tilt pointer-events-none" />
		)}

		<div
			className={cn(
				"relative p-8 rounded-2xl border flex flex-col h-full overflow-hidden transition-transform",
				popular
					? "bg-zinc-900 dark:bg-black text-white border-transparent z-10"
					: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700"
			)}
		>
			{/* The Racing Light Effect for Popular Card (Dark mode only) */}
			{popular && (
				<div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
					<span className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-move-right" />
				</div>
			)}

			{popular && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-zinc-200 to-zinc-400 text-black text-[10px] uppercase font-bold tracking-wider rounded-full shadow-lg">
					Most Popular
				</div>
			)}

			<h3 className="text-lg font-medium mb-2">{title}</h3>
			<div className="mb-6 flex items-baseline gap-1">
				<span className="text-4xl font-bold">${price}</span>
				<span
					className={cn(
						"text-sm",
						popular ? "text-zinc-400" : "text-zinc-500"
					)}
				>
					/month
				</span>
			</div>
			<ul className="space-y-4 mb-8 flex-1">
				{features.map((f: string, i: number) => (
					<li key={i} className="flex items-center gap-3 text-sm">
						<Check
							size={16}
							className={cn(
								popular
									? "text-white"
									: "text-zinc-900 dark:text-white"
							)}
						/>
						<span
							className={
								popular
									? "text-zinc-300"
									: "text-zinc-600 dark:text-zinc-400"
							}
						>
							{f}
						</span>
					</li>
				))}
			</ul>
			<button
				className={cn(
					"w-full py-3 rounded-lg font-medium transition-all text-sm relative z-20",
					popular
						? "bg-white text-black hover:bg-zinc-200"
						: "bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
				)}
			>
				Get Started
			</button>
		</div>
	</div>
);

export default PricingCard;
