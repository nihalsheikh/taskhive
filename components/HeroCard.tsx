import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const HeroCard = () => {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

	function onMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent) {
		const { left, top, width, height } =
			currentTarget.getBoundingClientRect();
		x.set((clientX - left) / width - 0.5);
		y.set((clientY - top) / height - 0.5);
	}

	const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
	const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

	return (
		<motion.div
			ref={ref}
			onMouseMove={onMouseMove}
			onMouseLeave={() => {
				x.set(0);
				y.set(0);
			}}
			style={{ perspective: 1000, transformStyle: "preserve-3d" }}
			className="w-full max-w-5xl mx-auto mt-20 relative group"
		>
			<motion.div
				style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
				initial={{ opacity: 0, y: 50, rotateX: 10 }}
				animate={{ opacity: 1, y: 0, rotateX: 0 }}
				transition={{
					type: "spring",
					damping: 20,
					stiffness: 100,
					delay: 0.2,
				}}
				className="relative aspect-video rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
			>
				{/* Header */}
				<div className="h-10 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 gap-2 bg-zinc-100/50 dark:bg-zinc-900/50">
					<div className="flex gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
						<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
						<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
					</div>
				</div>

				{/* Body */}
				<div className="p-6 grid grid-cols-12 gap-6 h-full bg-white dark:bg-zinc-950">
					<div className="col-span-3 space-y-3 border-r border-zinc-100 dark:border-zinc-900 pr-4">
						<div className="h-6 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
						<div className="space-y-2 mt-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900"
								/>
							))}
						</div>
					</div>
					<div className="col-span-9 space-y-6">
						<div className="flex justify-between items-center">
							<div className="h-8 w-48 rounded bg-zinc-200 dark:bg-zinc-800" />
							<div className="flex gap-2">
								<div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
								<div className="h-8 w-20 rounded bg-zinc-900 dark:bg-zinc-100" />
							</div>
						</div>
						<div className="grid grid-cols-3 gap-4">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="h-28 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 space-y-3"
								>
									<div className="h-3 w-8 rounded bg-zinc-300 dark:bg-zinc-700" />
									<div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-zinc-500/10 blur-[100px] -z-10" />
		</motion.div>
	);
};

export default HeroCard;
