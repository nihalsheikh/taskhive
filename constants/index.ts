import { FooterLinks, NavbarLinks, PricingPlan, Testimonials } from "@/types";

export const APP_NAME = "TaskHive";
export const APP_DESCRIPTION =
	"The industrial-grade project management tool for the next generation of builders.";

export const navbarLinks: NavbarLinks[] = [
	{ id: "1", label: "Features", href: "#features" },
	{ id: "2", label: "Testimonials", href: "#testimonials" },
	{ id: "3", label: "Pricing", href: "#pricing" },
];

export const plans: PricingPlan[] = [
	{
		name: "Starter",
		price: "$0",
		description: "Perfect for hobbyists and small side projects.",
		features: [
			"Up to 3 projects",
			"2 GB Storage",
			"Basic Analytics",
			"Community Support",
		],
		backgroundVideo: "/assets/card-animation-effect/common.webm",
	},
	{
		name: "Pro",
		price: "$29",
		description: "For growing teams that need power and flexibility.",
		features: [
			"Unlimited projects",
			"50 GB Storage",
			"Advanced AI Insights",
			"Priority Support",
			"Custom Workflows",
		],
		recommended: true,
		backgroundVideo: "/assets/card-animation-effect/rare.webm",
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "Security, compliance, and control for large orgs.",
		features: [
			"Unlimited Everything",
			"SSO & SAML",
			"Dedicated Success Manager",
			"On-premise deployment",
			"SLA Guarantee",
		],
		backgroundVideo: "/assets/card-animation-effect/epic.webm",
	},
];

export const testimonials: Testimonials[] = [
	{
		text: "Taskhive totally changed how we ship code. It's shockingly fast.",
		name: "Alex Chen",
		role: "CTO, Vercel",
	},
	{
		text: "The cleanest project management tool I've ever used.",
		name: "Sarah Drasner",
		role: "VP Engineering",
	},
	{
		text: "Finally, a tool that doesn't feel like a spreadsheet.",
		name: "Guillermo Rauch",
		role: "Founder",
	},
	{
		text: "Dark mode is absolutely gorgeous. I live in this app now.",
		name: "Design Lead",
		role: "Stripe",
	},
];

export const footerLinks: FooterLinks[] = [
	{
		id: "01",
		title: "Overview",
		href: "/overview",
	},
	{
		id: "02",
		title: "Features",
		href: "/features",
	},
	{
		id: "03",
		title: "Pricing",
		href: "/pricing",
	},
	{
		id: "04",
		title: "Careers",
		href: "/careers",
	},
	{
		id: "05",
		title: "Help",
		href: "/help",
	},
	{
		id: "06",
		title: "Privacy",
		href: "/privacy",
	},
];
