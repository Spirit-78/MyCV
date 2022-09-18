import { Fieldset, Frame } from "@react95/core";
import { GrLinkedin } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { Mail } from "@react95/icons";

export const ContactMe = () => {
	return (
		<Frame>
			<Fieldset legend="Phone Number" className="fieldsetColumn">
				<Frame className="languageFrame">
					<span className="fi fi-mk infoFlags"></span>
				</Frame>
				<p className="infoText">+38977926520</p>
			</Fieldset>

			<Fieldset legend="Email" className="fieldsetColumn">
				<div
					style={{
						display: "flex",
						flexFlow: "row",
						padding: "10px",
						alignItems: "center",
						justifyItems: "left",
					}}
				>
					<Mail variant="32x32_4" />
					<a
						href="mailto:elena_papazova@hotmail.com"
						className="infoText"
						style={{ color: "blue" }}
					>
						elena_papazova@hotmail.com
					</a>
				</div>
			</Fieldset>

			<Fieldset legend="Social Media" className="fieldsetColumn">
				{/* icon of linkedin/ etc.. */}
				<div
					style={{
						display: "flex",
						flexFlow: "row",
						padding: "10px",
						alignItems: "center",
						justifyItems: "left",
					}}
				>
					<GrLinkedin size={25} color="DodgerBlue" />
					{/* <p className="infoText"> */}
					<a
						href="https://www.linkedin.com/in/elena-papazova-75375620a/"
						className="infoText"
						style={{ color: "blue" }}
					>
						Elena Papazova
					</a>
					{/* </p> */}
				</div>

				<div
					style={{
						display: "flex",
						flexFlow: "row",
						padding: "10px",
						alignItems: "center",
						justifyItems: "left",
					}}
				>
					<BsWhatsapp size={25} color="ForestGreen" />
					<p className="infoText">+38977926520</p>
				</div>
			</Fieldset>
		</Frame>
	);
};
