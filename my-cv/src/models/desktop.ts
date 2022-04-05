import { ReactNode } from "react";

export interface desktopIcon {
	icon: ReactNode;
	iconTitle: string;
	selectedStyle: boolean;
	clicked: boolean;
	content: ReactNode;
}

export interface selectedIcon {
	[title: string]: { selected: boolean; opened: boolean };
}
