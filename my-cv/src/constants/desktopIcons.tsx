import {
	Bookmark,
	Desk100,
	Explorer102,
	Explorer103,
	Gcdef100,
	Grpconv100,
	Mapi32501,
	Textchat,
} from "@react95/icons";
import { desktopIcon } from "../models/desktop";

export const desktopIconsList: desktopIcon[] = [
	{
		icon: <Bookmark variant="32x32_4" />,
		iconTitle: "About Me",
		selectedStyle: false,
	},
	{
		icon: <Explorer103 variant="32x32_4" />,
		iconTitle: "Education",
		selectedStyle: false,
	},
	{
		icon: <Desk100 variant="32x32_4" />,
		iconTitle: "Experience",
		selectedStyle: false,
	},
	{
		icon: <Grpconv100 variant="32x32_4" />,
		iconTitle: "Skills",
		selectedStyle: false,
	},
	{
		icon: <Textchat variant="32x32_4" />,
		iconTitle: "Languages",
		selectedStyle: false,
	},
	{
		icon: <Gcdef100 variant="32x32_4" />,
		iconTitle: "Interests",
		selectedStyle: false,
	},
	{
		icon: <Mapi32501 variant="32x32_4" />,
		iconTitle: "Contact Me",
		selectedStyle: false,
	},
	{
		icon: <Explorer102 variant="32x32_4" />,
		iconTitle: "Download CV",
		selectedStyle: false,
	},
];
