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
	},
	{
		icon: <Explorer103 variant="32x32_4" />,
		iconTitle: "Education",
	},
	{
		icon: <Desk100 variant="32x32_4" />,
		iconTitle: "Experience",
	},
	{
		icon: <Grpconv100 variant="32x32_4" />,
		iconTitle: "Skills",
	},
	{
		icon: <Textchat variant="32x32_4" />,
		iconTitle: "Languages",
	},
	{
		icon: <Gcdef100 variant="32x32_4" />,
		iconTitle: "Interests",
	},
	{
		icon: <Mapi32501 variant="32x32_4" />,
		iconTitle: "Contact Me",
	},
	{
		icon: <Explorer102 variant="32x32_4" />,
		iconTitle: "Download CV",
	},
];
