import { Checkbox, Fieldset, Frame } from "@react95/core";
import "../styles/infomodals.css";

export const Skills = () => {
	return (
		<Frame style={{ display: "flex", flexWrap: "wrap" }} width={500}>
			<Fieldset
				legend="Languages"
				className="fieldsetRow"
				style={{ flex: "25%" }}
			>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Typescript/Javascript
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Python
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Java
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					C/C++
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Unix Shell
				</Checkbox>
			</Fieldset>

			<Fieldset
				legend="Frameworks"
				className="fieldsetRow"
				style={{ flex: "25%" }}
			>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					React.js
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Node.js
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Express.js
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Flask
				</Checkbox>
			</Fieldset>

			<Fieldset legend="Other" className="fieldsetRow" style={{ flex: "25%" }}>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					AWS Lambda
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					AWS API Gateway
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Firebase
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Docusign
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Stripe
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Elasticsearch
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Biopython
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Jupyter Notebooks
				</Checkbox>
			</Fieldset>

			<Fieldset
				legend="Hobbies"
				className="fieldsetRow"
				style={{ flex: "25%" }}
			>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Cybersecurity
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Metasploit
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Digital Forensics
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Documenting Code
				</Checkbox>
				<Checkbox checked style={{ display: "block", margin: 15 }}>
					Video Games
				</Checkbox>
			</Fieldset>
		</Frame>
	);
};
