"use client";

import { useEffect, useState } from "react";

export default function ThemeWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		if (saved) setTheme(saved);
	}, []);

	return <div data-theme={theme}>{children}</div>;
}
