// import { List, Modal } from "@react95/core";
import { Modal, List } from "@react95/core";
import { ReactElement, useState } from "react";
import { desktopIconsList } from "../constants/desktopIcons";
import { selectedIcon } from "../models/desktop";
import "../styles/desktopIcons.css";
import { ThemeProvider } from "@react95/core";

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
			(obj, item) => ({
				...obj,
				[item.iconTitle]: {
					selected: item.selectedStyle,
					opened: item.clicked,
				},
			}),
			{}
		) as selectedIcon
	);
	console.log(List);

	const handleSelectedIcon = (iconTitle: string) => {
		const tempSelectedIcon = { ...selectedIcon };
		Object.keys(tempSelectedIcon).forEach(
			(v) => (tempSelectedIcon[v].selected = false)
		);
		tempSelectedIcon[iconTitle].selected = true;
		tempSelectedIcon[iconTitle].opened = true;
		setSelectedIcon(tempSelectedIcon);
	};

	const handleCloseModal = (iconTitle: string) => {
		const tempSelectedIcon = { ...selectedIcon };
		tempSelectedIcon[iconTitle].opened = false;
		setSelectedIcon(tempSelectedIcon);
	};
	return (
		<ThemeProvider>
			{desktopIconsList.map((icon) => (
				<button
					className="desktopIcon"
					key={icon.iconTitle}
					style={
						selectedIcon[icon.iconTitle as any].selected
							? selectedStyle
							: defaultStyle
					}
					onClick={() => handleSelectedIcon(icon.iconTitle)}
				>
					{icon.icon}
					<br />
					<p>{icon.iconTitle}</p>
				</button>
			))}
			{
				/* modal here ** */
				Object.keys(selectedIcon)
					.filter((title) => selectedIcon[title].opened)
					.map((openedTitle) => {
						const openedObject = desktopIconsList.find(
							(obj) => obj.iconTitle === openedTitle
						);
						return (
							<Modal
								key={openedObject!.iconTitle}
								icon={openedObject!.icon as ReactElement}
								title={openedObject!.iconTitle}
								defaultPosition={{
									x: Math.floor(Math.random() * 10) * 100,
									y: Math.floor(Math.random() * 5) * 100,
								}}
								closeModal={() => handleCloseModal(openedObject!.iconTitle)}
								buttons={[
									// { value: "Ok", onClick: handleButtonClick },
									{
										value: "Close",
										onClick: () => handleCloseModal(openedObject!.iconTitle),
									},
								]}
								menu={[
									{
										name: "File",
										list: (
											<List>
												<List.Item
													onClick={() =>
														handleCloseModal(openedObject!.iconTitle)
													}
												>
													Exit
												</List.Item>
											</List>
										),
									},
									{
										name: "Edit",
										list: (
											<List>
												<List.Item
												// onClick={() => {
												// 	navigator.clipboard.writeText(
												// 		state.textToCopy
												// 	);
												// }}
												>
													Copy
												</List.Item>
											</List>
										),
									},
								]}
							>
								{openedObject!.content}
							</Modal>
						);
					})
			}
		</ThemeProvider>
	);
};
