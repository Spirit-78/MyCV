import { Fieldset, Frame } from "@react95/core";
import "../../node_modules/flag-icons/css/flag-icons.css";
import "../styles/infomodals.css";

export const Languages = () => {
	return (
		<Frame>
			<Fieldset legend="English" className="fieldsetColumn">
				<Frame className="languageFrame">
					<span className="fi fi-gb infoFlags"></span>
				</Frame>
				<div>
					<p className="infoTitle infoText">C2 - Full Working Proficiency</p>
					{/* <p className="infoText">{`Professional experience working with foreign clients`}</p> */}
					{/* <p className="infoText">{`hobbies allowing me to integrate it to my daily life`}</p> */}
				</div>
			</Fieldset>

			<Fieldset legend="Macedonian" className="fieldsetColumn">
				<Frame className="languageFrame">
					<span className="fi fi-mk infoFlags"></span>
				</Frame>
				<div>
					<p className="infoTitle infoText">C2 - Native Speaker</p>
				</div>
			</Fieldset>

			<Fieldset legend="German" className="fieldsetColumn">
				<Frame className="languageFrame">
					<span className="fi fi-de infoFlags"></span>
				</Frame>
				<div>
					<p className="infoTitle infoText">A2 - Elementary Proficiency</p>
				</div>
			</Fieldset>

			<Fieldset legend="Spanish" className="fieldsetColumn">
				<Frame className="languageFrame">
					<span className="fi fi-es infoFlags"></span>
				</Frame>
				<div>
					<p className="infoTitle infoText">A1 - Beginner</p>
				</div>
			</Fieldset>
		</Frame>
	);
};
