import { Button, Frame } from "@react95/core";
import { useState } from "react";
import { send } from "emailjs-com";
import "../styles/infomodals.css";

export const DownloadCV = () => {
	const [value, setValue] = useState("");
	const [feedback, setFeedback] = useState(false);

	const sendMail = () => {
		if (!value) {
			setValue("Please enter some feedback for me!");
			return;
		}
		send(
			process.env.REACT_APP_SERVICE_ID!,
			process.env.REACT_APP_TEMPLATE_ID!,
			{ message: value },
			process.env.REACT_APP_PUBLIC_KEY
		)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				setFeedback(true);
			})
			.catch((err) => {
				console.log("FAILED...", err);
				setValue(`Something went wrong, please try again!, ${err}`);
			});
	};

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
			<p style={{ width: "300px", textAlign: "center" }}>
				if you liked my website or have any kind of feedback feel free to let me
				know :)
			</p>
			{/* <TextArea /> */}

			{(!feedback && (
				<>
					<Frame
						style={{
							padding: 1,
							paddingBottom: 0,
						}}
					>
						<textarea
							className="text-area"
							value={value}
							onChange={(e) => setValue(e.currentTarget.value)}
						/>
					</Frame>
					<Button onClick={sendMail}>Send!</Button>
				</>
			)) || (
				<>
					<p>Thank you for your feedback! It means a lot to me!</p>
					<button
						style={{
							color: "blue",
							fontStyle: "italic",
							background: "transparent",
							border: "none",
						}}
						onClick={() => setFeedback(false)}
					>
						Leave another comment?
					</button>
				</>
			)}

			<Frame
				style={{
					display: "flex",
					flexDirection: "row",
					columnGap: 10,
					justifyContent: "space-between",
					width: "100%",
					padding: 10,
				}}
			>
				<p style={{ width: "350px" }}>
					You can download a short copy of my resume here:
				</p>
				<Button>Download</Button>
			</Frame>
		</div>
	);
};
