"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { plans } from "@/constants";
import VideoBackground from "@/components/VideoBackground";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PricingCarousel() {
	const [index, setIndex] = useState(0);
	const count = plans.length;
	const containerRef = useRef<HTMLDivElement | null>(null);

	const prev = useCallback(
		() => setIndex((i) => (i - 1 + count) % count),
		[count]
	);
	const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

	// keyboard navigation
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev]);

	// touch/swipe support
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		let startX = 0;
		let currentX = 0;
		let touching = false;

		const onTouchStart = (e: TouchEvent) => {
			touching = true;
			startX = e.touches[0].clientX;
			currentX = startX;
		};

		const onTouchMove = (e: TouchEvent) => {
			if (!touching) return;
			currentX = e.touches[0].clientX;
		};

		const onTouchEnd = () => {
			touching = false;
			const dx = currentX - startX;
			if (Math.abs(dx) > 50) {
				if (dx < 0) next();
				else prev();
			}
		};

		el.addEventListener("touchstart", onTouchStart);
		el.addEventListener("touchmove", onTouchMove);
		el.addEventListener("touchend", onTouchEnd);

		return () => {
			el.removeEventListener("touchstart", onTouchStart);
			el.removeEventListener("touchmove", onTouchMove);
			el.removeEventListener("touchend", onTouchEnd);
		};
	}, [next, prev]);

	return (
		<section
			id="pricing"
			className="pt-24 pb-28 md:pt-28 md:pb-36 bg-transparent"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="relative">
					<div
						ref={containerRef}
						className="relative w-full flex items-center justify-center min-h-[600px] md:min-h-[720px] lg:min-h-[760px] overflow-hidden"
						aria-roledescription="carousel"
						aria-label="Pricing plans"
					>
						{/* Left arrow */}
						<button
							aria-label="Previous plan"
							onClick={prev}
							className="absolute left-8 -translate-x-2 md:-translate-x-6 z-30 rounded-full bg-black/40 hover:bg-black/80 p-2 md:p-3 transition"
						>
							<ChevronLeft className="h-6 w-6 text-white" />
						</button>

						<div className="w-full max-w-3xl md:max-w-[900px] flex items-center justify-center">
							{plans.map((plan, i) => {
								const offset = i - index;
								let displayOffset = offset;
								if (offset > count / 2)
									displayOffset = offset - count;
								if (offset < -count / 2)
									displayOffset = offset + count;

								const isActive = i === index;
								const scale = isActive ? 1 : 0.86;
								const opacity =
									Math.abs(displayOffset) > 1
										? 0
										: 1 - Math.abs(displayOffset) * 0.4;
								const translateX = displayOffset * 120;

								return (
									<article
										key={plan.name}
										className="absolute w-full md:w-2/3 lg:w-1/2 transition-transform duration-500"
										style={{
											transform: `translateX(${translateX}%) scale(${scale})`,
											opacity,
											pointerEvents: isActive
												? "auto"
												: "none",
										}}
										aria-hidden={!isActive}
										tabIndex={isActive ? 0 : -1}
									>
										{/* Frame wrapper — make this a flex container so inner card centers */}
										<div className="relative mx-auto w-full rounded-[34px] p-[18px] h-[620px] md:h-[640px] isolate flex items-center justify-center">
											{/* Video Background */}
											{plan.backgroundVideo ? (
												<VideoBackground
													src={plan.backgroundVideo}
													type={
														plan.backgroundVideo.endsWith(
															".webm"
														)
															? "video/webm"
															: "video/mp4"
													}
													className=""
													backgroundVideo={
														plan.backgroundVideo ??
														undefined
													}
												/>
											) : (
												<div className="absolute inset-0 bg-linear-to-tr from-zinc-900/60 to-zinc-800/40" />
											)}

											{/* Inner content card — centered via parent flex */}
											<div className="relative z-10 w-[70%] h-[76%] md:h-[88%] rounded-[22px] p-8 flex flex-col justify-between backdrop-blur-sm border border-transparent mx-auto text-white">
												<div>
													<h4 className="text-sm text-zinc-300">
														{plan.name}
													</h4>

													<div className="flex items-baseline gap-2 mt-2">
														<span className="text-4xl md:text-5xl font-bold text-white">
															{plan.price}
														</span>
														{plan.price !==
															"Custom" && (
															<span className="text-sm text-zinc-400 mt-2">
																/monthly
															</span>
														)}
													</div>

													<p className="mt-4 text-sm text-zinc-300 max-w-[70%]">
														{plan.description}
													</p>
												</div>

												<div>
													<ul className="space-y-3 mb-6">
														{plan.features.map(
															(f, idx) => (
																<li
																	key={idx}
																	className="flex items-start gap-3"
																>
																	<div className="mt-0.5 inline-flex items-center justify-center h-7 w-7 rounded-full bg-black/40 border border-white/6">
																		<svg
																			className="h-4 w-4 text-green-400"
																			viewBox="0 0 24 24"
																			fill="none"
																			stroke="currentColor"
																		>
																			<path
																				d="M20 6L9 17l-5-5"
																				strokeWidth="2.5"
																				strokeLinecap="round"
																				strokeLinejoin="round"
																			></path>
																		</svg>
																	</div>
																	<span className="text-sm text-zinc-300">
																		{f}
																	</span>
																</li>
															)
														)}
													</ul>

													<div className="flex flex-col gap-3">
														<button
															className={`w-full py-3 rounded-full font-semibold transition ${
																plan.recommended
																	? "bg-white text-black shadow-lg"
																	: "bg-zinc-800/70 text-zinc-100 hover:bg-zinc-700/70"
															}`}
														>
															{plan.recommended
																? `Start ${plan.name}`
																: `Choose ${plan.name}`}
														</button>
													</div>
												</div>
											</div>
										</div>

										{/* Badge */}
										{plan.recommended && (
											<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 z-20">
												<div className="px-4 py-1 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-xs font-bold text-black">
													MOST POPULAR
												</div>
											</div>
										)}
									</article>
								);
							})}
						</div>

						{/* Right arrow */}
						<button
							aria-label="Next plan"
							onClick={next}
							className="absolute right-8 translate-x-2 md:translate-x-6 z-30 rounded-full bg-black/60 hover:bg-black/70 p-2 md:p-3 transition"
						>
							<ChevronRight className="h-6 w-6 text-white" />
						</button>
					</div>

					{/* Indicators */}
					<div className="mt-6 flex items-center justify-center gap-2">
						{plans.map((_, i) => (
							<button
								key={i}
								aria-label={`Show plan ${i + 1}`}
								onClick={() => setIndex(i)}
								className={`h-2 w-8 rounded-full transition ${
									i === index
										? "bg-linear-to-r from-cyan-400 to-violet-500"
										: "bg-white/10"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
