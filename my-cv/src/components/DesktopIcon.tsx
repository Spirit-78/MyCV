import { useState } from "react";
import { desktopIcon } from "../models/desktop";
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

export const DesktopIcon = (props: desktopIcon) => {
	const [clickedStyle, setClickedStyle] = useState(defaultStyle);
	return (
		<button
			className="desktopIcon"
			key={props.iconTitle}
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "10px",
				padding: "10px",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				textAlign: "center",
				border: clickedStyle.border,
				backgroundColor: clickedStyle.backgroundColor,
				color: clickedStyle.color,
				width: "5%",
			}}
			onClick={() => setClickedStyle(selectedStyle)}
		>
			{props.icon}
			<br />
			<p>{props.iconTitle}</p>
		</button>
	);
};
