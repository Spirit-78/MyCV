import { Checkbox, Fieldset, Frame } from "@react95/core";
import "../styles/infomodals.css";

export const Skills = () => {
	return (
		<Frame style={{ display: "flex", flexWrap: "wrap" }} width={500}>
			<Fieldset
				legend="💻 Languages"
				className="fieldsetRow"
				style={{ flex: "25%", fontWeight: "bold" }}
			>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Typescript/Javascript
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Python
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Java
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					C/C++
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Unix Shell
				</Checkbox>
			</Fieldset>

			<Fieldset
				legend="🏛 Frameworks"
				className="fieldsetRow"
				style={{ flex: "25%", fontWeight: "bold" }}
			>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					React.js
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Node.js
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Express.js
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Flask
				</Checkbox>
			</Fieldset>

			<Fieldset
				legend="🤖 Miscellaneous"
				className="fieldsetRow"
				style={{ flex: "25%", fontWeight: "bold" }}
			>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					AWS Services
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Firebase/Firestore
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Docusign
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Stripe
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Elasticsearch
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Biopython
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Jupyter Notebooks
				</Checkbox>
			</Fieldset>

			<Fieldset
				legend="🌟 Hobbies"
				className="fieldsetRow"
				style={{ flex: "25%", fontWeight: "bold" }}
			>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Cybersecurity
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Metasploit
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Digital Forensics
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Documenting Code
				</Checkbox>
				<Checkbox
					checked
					style={{ display: "block", margin: 15, fontWeight: "normal" }}
				>
					Video Games
				</Checkbox>
			</Fieldset>
		</Frame>
	);
};
