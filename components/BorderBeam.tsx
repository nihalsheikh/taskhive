import { cn } from "@/lib/utils";

const GlowingBorder = () => (
	<div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none">
		<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-0 dark:opacity-100" />
		<div className="absolute inset-[1px] bg-zinc-900 rounded-2xl" />
	</div>
);

const BorderBeam = ({
	duration = 15,
	size = 300,
	className,
}: {
	duration?: number;
	size?: number;
	className?: string;
}) => (
	<div
		style={{ "--duration": duration } as React.CSSProperties}
		className={cn(
			"absolute inset-0 pointer-events-none rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
			className
		)}
	>
		<div
			className={cn(
				"absolute aspect-square bg-gradient-to-l from-transparent via-red-500 to-transparent animate-border-beam",
				className
			)}
			style={{
				width: size,
				offsetPath: `rect(0 auto auto 0 round ${size}px)`,
			}}
		/>
	</div>
);

export { BorderBeam, GlowingBorder };
