"use client";

import { ThemeWrapperProps } from "@/types";

export default function ThemeWrapper({ theme, children }: ThemeWrapperProps) {
	return <div data-theme={theme}>{children}</div>;
}
