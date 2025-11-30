"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const AppUI = ({ children }: { children: React.ReactNode }) => {
	return (
		<HeroUIProvider>
			<NextThemesProvider defaultTheme="dark">
				<main>{children}</main>
			</NextThemesProvider>
		</HeroUIProvider>
	);
};

export default AppUI;
