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
		name: "Alex Morgan",
		role: "Product Manager at TechFlow",
		content:
			"TaskHive completely transformed how we ship products. The visual workflows are intuitive and the 3D visualizations give us a perspective we didn't know we needed.",
		avatar: "AM",
	},
	{
		name: "Sarah Chen",
		role: "Engineering Lead at DevCorp",
		content:
			"Finally, a project management tool that doesn't feel like a spreadsheet. It's fast, minimal, and gets out of the way so we can focus on coding.",
		avatar: "SC",
	},
	{
		name: "Jordan Lee",
		role: "Designer at Creative Studio",
		content:
			"The interface is stunning. Dark mode is perfectly balanced. It's the first productivity tool I actually enjoy opening every morning.",
		avatar: "JL",
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
