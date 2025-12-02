import {
	Workflow,
	Zap,
	ShieldCheck,
	BarChart3,
	Users,
	Globe,
} from "lucide-react";

const Features: React.FC = () => {
	return (
		<section
			id="features"
			className="py-24 bg-white dark:bg-zinc-950 relative border-t border-zinc-100 dark:border-zinc-900"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-20 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-6">
						Everything you need. <br />
						<span className="text-zinc-400">
							Nothing you don&apos;t.
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400">
						Modular building blocks to construct the perfect
						workflow for your organization.
					</p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
					{/* Large Card 1 */}
					<div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="relative z-10 flex flex-col h-full justify-between">
							<div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit mb-4 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200 dark:border-zinc-700">
								<Workflow size={24} />
							</div>
							<div>
								<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
									Visual Workflows
								</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Drag-and-drop interface that feels natural.
									Connect tasks, set dependencies, and
									visualize progress instantly.
								</p>
							</div>
						</div>
						<div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform translate-x-1/4 translate-y-1/4">
							<Workflow size={300} />
						</div>
					</div>

					{/* Tall Card */}
					<div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-black p-8 flex flex-col justify-between">
						<div className="relative z-10">
							<div className="p-3 bg-zinc-800 rounded-xl w-fit mb-4 text-white border border-zinc-700">
								<Zap size={24} />
							</div>
							<h3 className="text-2xl font-bold text-white mb-2">
								Instant Sync
							</h3>
							<p className="text-zinc-400 text-sm">
								Real-time collaboration with zero latency. Your
								team sees updates as they happen.
							</p>
						</div>

						{/* Abstract visual for sync */}
						<div className="relative h-40 w-full mt-8 rounded-xl bg-zinc-800/50 border border-zinc-700/50 overflow-hidden flex items-center justify-center">
							<div className="w-2 h-2 bg-white rounded-full animate-ping absolute"></div>
							<div className="w-16 h-16 border border-zinc-600 rounded-full flex items-center justify-center">
								<div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
							</div>
						</div>
					</div>

					{/* Regular Card */}
					<div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit mb-4 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200 dark:border-zinc-700">
							<ShieldCheck size={24} />
						</div>
						<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
							Enterprise Security
						</h3>
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							SOC2 Type II compliant. End-to-end encryption for
							all your sensitive data.
						</p>
					</div>

					{/* Regular Card */}
					<div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit mb-4 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200 dark:border-zinc-700">
							<BarChart3 size={24} />
						</div>
						<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
							Analytics
						</h3>
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							Deep insights to identify bottlenecks and optimize
							team velocity.
						</p>
					</div>

					{/* Wide Card */}
					<div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-8 flex flex-col md:flex-row items-center gap-8">
						<div className="flex-1">
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white shadow-sm">
									<Users size={20} />
								</div>
								<div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white shadow-sm">
									<Globe size={20} />
								</div>
							</div>
							<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
								Global Infrastructure
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
								Deployed on the edge. TaskHive ensures that no
								matter where your team is located, access is
								instant and reliable.
							</p>
						</div>
						<div className="hidden md:block w-1/3 h-full">
							<div
								className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%,transparent_100%)]"
								style={{ backgroundSize: "20px 20px" }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
