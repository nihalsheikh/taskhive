import React, { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { envConf } from "@/env-conf/envConf";

const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
			{/* Subtle Background Gradients - Neutral */}
			<div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-50">
				<div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-200/50 dark:bg-zinc-800/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
			</div>

			<div className="max-w-7xl mx-auto px-6 w-full z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column: Text Content */}
					<div className="flex flex-col items-start text-left gap-8">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
							<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
							<span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
								Taskhive v1.0
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50">
							Build Better. <br />
							<span className="text-zinc-500 dark:text-zinc-400">
								Faster.
							</span>
						</h1>

						<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
							The all-in-one workspace that adapts to your team.
							Experience project management in a whole new
							dimension.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
							<button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:scale-105 transition-transform duration-200">
								Get Started Free
								<ArrowRight size={18} />
							</button>
						</div>
					</div>

					{/* Right Column: 3D Spline Viewer */}
					<div className="w-full h-[500px] md:h-[600px] relative group">
						{/* Decorative border/glow */}
						<div className="absolute -inset-1 bg-linear-to-tr from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent rounded-[2.5rem] blur-sm opacity-50"></div>

						<div className="h-full w-full bg-white dark:bg-black rounded-4xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl relative">
							<Suspense
								fallback={
									<div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 animate-pulse bg-white dark:bg-black/50">
										<div className="w-12 h-12 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mb-4"></div>
										<span className="text-sm font-medium tracking-widest uppercase text-black dark:text-white">
											Loading Environment...
										</span>
									</div>
								}
							>
								<Spline
									scene={envConf.splineSceneUrl}
									className="w-full h-full bg-black"
								/>
							</Suspense>

							{/* Overlay for interaction hint */}
							<div className="absolute bottom-3 right-4 px-4 py-4 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full text-xs text-white/90 pointer-events-none border border-white/10 flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
								Interactive 3D Model
							</div>
							<div className="absolute bottom-3 left-4 px-4 py-4 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full text-xs text-white/90 pointer-events-none border border-white/10 flex items-center gap-2">
								Zoom, Hover, Move Around
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
