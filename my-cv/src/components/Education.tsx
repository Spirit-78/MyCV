import { Fieldset, Frame } from "@react95/core";
import FINKI from "../assets/finki.png";

export const Education = () => {
	return (
		<>
			<Fieldset
				legend="Faculty of Computer Science and Engineering"
				style={{ margin: "10px", display: "flex", alignItems: "center" }}
			>
				<Frame width={55} height={55} margin={5} display={"inline-block"}>
					<img
						src={FINKI}
						alt="FINKI logo"
						style={{ height: 45, width: 45, margin: 5 }}
					/>
				</Frame>
				<div style={{ display: "inline-block" }}>
					<p
						style={{
							marginLeft: 22,
							marginTop: 4,
							marginBottom: 5,
							fontWeight: "bolder",
						}}
					>
						Bachelor's Degree
					</p>
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						Sep 2017 - Jul 2023
					</p>
					<p style={{ marginBottom: 4, marginLeft: 22, marginRight: 10 }}>
						Skopje, Skopski, North Macedonia
					</p>
					{/* <br /> */}
					<p
						style={{
							marginBottom: 4,
							marginLeft: 22,
							marginRight: 10,
							marginTop: 10,
							fontStyle: "italic",
							width: "350px",
							fontSize: "12px",
						}}
					>
						Notable subjects: Structural Programming (C), Object Oriented
						Programming (C++), Advanced Programming (Java), Algorithms and Data
						Structures (Java), Artificial Intelligence (Python), Operating
						Systems (BASH) etc...
					</p>
				</div>
			</Fieldset>
			<Fieldset legend="Certificates" style={{ margin: "10px" }}>
				<div style={{ display: "inline-block" }}>
					<p
						style={{
							marginLeft: 22,
							marginTop: 4,
							marginBottom: 5,
							fontWeight: "bolder",
						}}
					>
						AWS Cloud Practitioner
					</p>
					<p
						style={{
							marginLeft: 22,
							marginTop: 4,
							marginBottom: 5,
							fontStyle: "italic",
						}}
					>
						Credential ID: VW1M6VVBHNRQ1P9K
					</p>
					<br />
					<p
						style={{
							marginLeft: 22,
							marginTop: 4,
							marginBottom: 5,
							fontWeight: "bolder",
						}}
					>
						Other Miscellaneous Certificates
					</p>
					<p
						style={{
							marginLeft: 22,
							marginTop: 4,
							marginBottom: 5,
							fontStyle: "italic",
							// fontSize: "15px",
						}}
					>
						<a
							href="https://drive.google.com/drive/folders/1qgis7oEFBQbEbzySYxr6KHIbkXjVetew?usp=sharing"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue" }}
						>
							Link to Google Drive
						</a>
					</p>
				</div>
			</Fieldset>
		</>
	);
};
