import { Fieldset, Frame } from "@react95/core";
import profilePicture from "../assets/profile.png";
import AWS from "../assets/AWS.png";
import cybersecurity from "../assets/cybersecurity.png";
import "../styles/infomodals.css";

export const AboutMe = () => {
	return (
		<Frame>
			<Fieldset legend="Who am I" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={profilePicture} alt="Profile" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						Hello! I'm a computer science student working on her bachelor's
						degree. Currently based in Skopje - Macedonia, but I'm very open to
						relocation, and have been actively planning to move after my
						graduation.
					</p>
				</div>
			</Fieldset>

			<Fieldset legend="What I do" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={AWS} alt="AWS" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						I primarily work with serverless solutions on AWS Cloud, utilizing
						React.js and typescript, both frontend and node.js backend. Other
						than that, I also have some experience with Google Cloud and
						Firebase/Firestore. I've dabbled in some other random technologies
						and stacks, like Python, Objective C, Java and various scripting
						languages. I consider myself very adaptable and curious and I'm very
						open to working with, and learning new languages and tech stacks.
					</p>
				</div>
			</Fieldset>

			<Fieldset legend="What I like" className="fieldsetColumn">
				<Frame className="infoFrame">
					<img src={cybersecurity} alt="Profile" className="infoImage" />
				</Frame>
				<div className="infoContainer">
					<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
						I enjoy working with scripting languages the most, like Python,
						Javascript and a little bit of Unix Shell Scripts. I've had a lot of
						passion for cybersecurity and digital forensics ever since I started
						competing in the National CyberMK hackathons. So far, I've been a
						participant for 3 years and plan to continue to be one for as long
						as I meet the requirements.
					</p>
				</div>
			</Fieldset>
		</Frame>
	);
};
