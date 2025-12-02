import PricingCarousel from "./PricingCarousel";
import React from "react";

const Pricing: React.FC = () => {
	return (
		<section className="py-24 bg-transparent dark:bg-transparent border-t border-zinc-200 dark:border-zinc-900">
			<PricingCarousel />
		</section>
	);
};

export default Pricing;
