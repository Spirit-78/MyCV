import { Button, Frame } from "@react95/core";
import { useState } from "react";
import "../styles/infomodals.css";

export const DownloadCV = () => {
	const [value, setValue] = useState("");

	return (
		<div
			style={{
				marginTop: 10,
				padding: 10,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 10,
			}}
		>
			<p style={{ width: "300px" }}>
				if you liked my website or have any kind of feedback feel free to let me
				know :)
			</p>
			{/* <TextArea /> */}

			<Frame style={{ padding: 1, paddingBottom: 0 }}>
				<textarea
					className="text-area"
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
			</Frame>

			<Button>Download</Button>
		</div>
	);
};
