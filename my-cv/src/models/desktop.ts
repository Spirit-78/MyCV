import { ReactNode } from "react";

export interface desktopIcon {
	icon: ReactNode;
	iconTitle: string;
	selectedStyle: boolean;
}

export interface selectedIcon {
	[title: string]: boolean;
}
