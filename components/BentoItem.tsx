import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BentoItem = ({
	children,
	className,
	delay = 0,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-50px" }}
		transition={{ duration: 0.5, delay, ease: "easeOut" }}
		className={cn(
			"relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:shadow-lg transition-shadow duration-300 group",
			className
		)}
	>
		{children}
	</motion.div>
);

export default BentoItem;
