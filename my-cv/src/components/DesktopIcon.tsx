import { useState } from "react";
import { desktopIconsList } from "../constants/desktopIcons";
import { selectedIcon } from "../models/desktop";
import "../styles/desktopIcons.css";

const defaultStyle = {
	backgroundColor: "transparent",
	border: "none",
	color: "black",
};

const selectedStyle = {
	backgroundColor: "blue",
	border: "1px dotted gray",
	color: "white",
};

export const DesktopIcon = () => {
	const [selectedIcon, setSelectedIcon] = useState(
		desktopIconsList.reduce(
			(obj, item) => ({ ...obj, [item.iconTitle]: item.selectedStyle }),
			{}
		) as selectedIcon
	);

	const handleSelectedIcon = (iconTitle: string) => {
		const tempSelectedIcon = { ...selectedIcon };
		Object.keys(tempSelectedIcon).forEach((v) => (tempSelectedIcon[v] = false));
		tempSelectedIcon[iconTitle] = true;
		setSelectedIcon(tempSelectedIcon);
	};
	return (
		<>
			{desktopIconsList.map((icon) => (
				<button
					className="desktopIcon"
					key={icon.iconTitle}
					style={
						selectedIcon[icon.iconTitle as any] ? selectedStyle : defaultStyle
					}
					onClick={() => handleSelectedIcon(icon.iconTitle)}
				>
					{icon.icon}
					<br />
					<p>{icon.iconTitle}</p>
				</button>
			))}
			{/* modal here ** */}
		</>
	);
};
