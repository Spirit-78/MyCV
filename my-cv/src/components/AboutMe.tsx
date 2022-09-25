import { Fieldset, Frame } from "@react95/core";
import { useState } from "react";
import {
	hobbyPictures,
	profilePictures,
	workPictures,
} from "../constants/aboutMePictures";
import "../styles/infomodals.css";

interface Counter {
	[section: string]: number;
}

export const AboutMe = () => {
	const [profilePicture, setProfilePicture] = useState(profilePictures[0]);
	const [workPicture, setWorkPicture] = useState(workPictures[0]);
	const [hobbyPicture, setHobbyPicture] = useState(hobbyPictures[0]);
	const [pictureCounter, setPictureCounter] = useState<Counter>({
		profile: 1,
		work: 1,
		hobby: 1,
	});

	const mappedSections: { [section: string]: (i: number) => any } = {
		profile: (i: number) =>
			setProfilePicture(profilePictures[i % profilePictures.length]),
		work: (i: number) => setWorkPicture(workPictures[i % workPictures.length]),
		hobby: (i: number) =>
			setHobbyPicture(hobbyPictures[i % hobbyPictures.length]),
	};

	const cycleImage = (section: string) => {
		setPictureCounter({
			...pictureCounter,
			[section]: pictureCounter[section] + 1,
		});
		mappedSections[section](pictureCounter[section]);
	};

	return (
		<Frame>
			<Fieldset legend="Who am I" className="fieldsetColumn">
				<Frame className="infoFrame">
					<button
						onClick={() => cycleImage("profile")}
						style={{
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0,
						}}
					>
						<img src={profilePicture} alt="Profile" className="infoImage" />
					</button>
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
					<button
						onClick={() => cycleImage("work")}
						style={{
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0,
						}}
					>
						<img src={workPicture} alt="AWS" className="infoImage" />
					</button>
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
					<button
						onClick={() => cycleImage("hobby")}
						style={{
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0,
						}}
					>
						<img src={hobbyPicture} alt="Profile" className="infoImage" />
					</button>
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
