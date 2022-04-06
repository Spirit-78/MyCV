import { Fieldset, Frame } from "@react95/core";
import profilePicture from "../assets/profile.png";
import AWS from "../assets/AWS.png";
import cybersecurity from "../assets/cybersecurity.png";
import "../styles/infomodals.css";

export const AboutMe = () => {
	return (
		<Frame>
			<Fieldset legend="Who am I?" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={profilePicture} alt="Profile" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						Jan 2022 - Present
					</p>
				</div>
			</Fieldset>

			<Fieldset legend="What I do" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={AWS} alt="AWS" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						Jan 2022 - Present
					</p>
				</div>
			</Fieldset>

			<Fieldset legend="What I like" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={cybersecurity} alt="Profile" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						Jan 2022 - PresentJan 2022 - PresentJan 2022 - PresentJan 2022 -
						PresentJan 2022 - PresentJan 2022 - PresentJan 2022 - PresentJan
						2022 - Present
					</p>
				</div>
			</Fieldset>
		</Frame>
	);
};
