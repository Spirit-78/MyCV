import { useState } from "react";
import { DesktopIcon } from "../components/DesktopIcon";
import { Win95AppBar } from "../components/Win95AppBar";
import { ClippyProvider } from "@react95/clippy";
import { Clippy } from "../components/Clippy";

export const Desktop = () => {
	const [showClippy, setShowClippy] = useState(false);

	setTimeout(() => setShowClippy(true), 5000);
	return (
		<>
			<Win95AppBar />
			<div style={{ display: "flex", flexDirection: "column" }}>
				{/* {desktopIconsList.map((icon) => (
						<DesktopIcon {...icon} />
					))} */}
				<DesktopIcon />
			</div>
			{showClippy && (
				<ClippyProvider>
					<Clippy />
				</ClippyProvider>
			)}
		</>
	);
};
