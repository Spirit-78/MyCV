import { Tabs, Tab, Fieldset, Checkbox, Frame } from "@react95/core";
import MiracleMill from "../assets/MiracleMill.png";
import Exelerate from "../assets/exelerate.png";
import "../styles/infomodals.css";

export const WorkExperience = () => {
	return (
		<Tabs style={{ width: 350 }} defaultActiveTab="Miracle Mill">
			<Tab title="Miracle Mill (2022)">
				<Fieldset
					legend="Software Engineer - Full-time"
					style={{ marginBottom: "1em" }}
				>
					<Frame className="infoFrame">
						<img
							src={MiracleMill}
							alt="MiracleMill logo"
							className="infoImage"
						/>
					</Frame>
					<div style={{ display: "inline-block" }}>
						<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
							Jan 2022 - Present
						</p>
						<p style={{ marginBottom: 4, marginLeft: 22 }}>
							Skopje, Skopski, North Macedonia
						</p>
					</div>
				</Fieldset>

				<Fieldset legend="Technology Stack">
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						React.js/node.js/typescript/javascript
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						HTML/CSS
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						REST Calls
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						AWS Cloud Development
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Full-Stack Development
					</Checkbox>
				</Fieldset>
			</Tab>

			<Tab title="Exelerate (2021)">
				<Fieldset
					legend="Software Engineer - Full-time"
					style={{ marginBottom: "1em" }}
				>
					<Frame className="infoFrame">
						<img src={Exelerate} alt="Exelerate logo" className="infoImage" />
					</Frame>
					<div style={{ display: "inline-block" }}>
						<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
							Jul 2021 - Nov 2021
						</p>
						<p style={{ marginBottom: 4, marginLeft: 22 }}>
							Skopje, Skopski, North Macedonia
						</p>
					</div>
				</Fieldset>

				<Fieldset
					legend="Engineering Intern - Internship"
					style={{ marginBottom: "1em" }}
				>
					<Frame className="infoFrame">
						<img src={Exelerate} alt="Exelerate logo" className="infoImage" />
					</Frame>
					<div style={{ display: "inline-block" }}>
						<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
							Apr 2021 - Jul 2021
						</p>
						<p style={{ marginBottom: 4, marginLeft: 22 }}>
							Skopje, Skopski, North Macedonia
						</p>
					</div>
				</Fieldset>

				<Fieldset legend="Technology Stack">
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						React.js/node.js/typescript/javascript
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Full-Stack Development
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Serverless Solutions
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Google Cloud/Firestore/Firebase
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Elasticsearch/Docusign/Stripe
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						REST Calls
					</Checkbox>
					<Checkbox checked style={{ display: "block", margin: 15 }}>
						Unix Shell Scripting
					</Checkbox>
				</Fieldset>
			</Tab>
		</Tabs>
	);
};
