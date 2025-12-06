import { LucideIcon } from "lucide-react";
import React from "react";

export interface ThemeWrapperProps {
	theme: "light" | "dark" | "system";
	children: React.ReactNode;
}

export interface NavbarLinks {
	id: string;
	label: string;
	href: string;
}

export interface Feature {
	title: string;
	description: string;
	icon: LucideIcon;
}

export interface Testimonials {
	text: string;
	name: string;
	role: string;
}

export interface PricingPlan {
	name: string;
	price: string;
	description: string;
	features: string[];
	recommended?: boolean;
	backgroundVideo?: string;
}

export interface FooterLinks {
	id: string;
	title: string;
	href: string;
}

export interface VideoBackgroundProps {
	src: string;
	poster?: string;
	className?: string;
	type?: string; // e.g. "video/webm" or "video/mp4"
	muted?: boolean;
	loop?: boolean;
	preload?: "auto" | "metadata" | "none";
}
