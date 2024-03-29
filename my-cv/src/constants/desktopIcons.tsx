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
import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";
import { DownloadCV } from "../components/DownloadCV";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Languages } from "../components/Languages";
import { Skills } from "../components/Skills";
import { WorkExperience } from "../components/WorkExperience";
import { desktopIcon } from "../models/desktop";

export const desktopIconsList: desktopIcon[] = [
	{
		icon: <Bookmark variant="32x32_4" />,
		iconTitle: "About Me",
		selectedStyle: false,
		clicked: false,
		content: <AboutMe />,
	},
	{
		icon: <Explorer103 variant="32x32_4" />,
		iconTitle: "Education",
		selectedStyle: false,
		clicked: false,
		content: <Education />,
	},
	{
		icon: <Desk100 variant="32x32_4" />,
		iconTitle: "Work Experience",
		selectedStyle: false,
		clicked: false,
		content: <WorkExperience />,
	},
	{
		icon: <Grpconv100 variant="32x32_4" />,
		iconTitle: "Skills",
		selectedStyle: false,
		clicked: false,
		content: <Skills />,
	},
	{
		icon: <Textchat variant="32x32_4" />,
		iconTitle: "Languages",
		selectedStyle: false,
		clicked: false,
		content: <Languages />,
	},
	{
		icon: <Gcdef100 variant="32x32_4" />,
		iconTitle: "Projects",
		selectedStyle: false,
		clicked: false,
		content: <Projects />,
	},
	{
		icon: <Mapi32501 variant="32x32_4" />,
		iconTitle: "Contact Me",
		selectedStyle: false,
		clicked: false,
		content: <ContactMe />,
	},
	{
		icon: <Explorer102 variant="32x32_4" />,
		iconTitle: "Download CV",
		selectedStyle: false,
		clicked: false,
		content: <DownloadCV />,
	},
];
