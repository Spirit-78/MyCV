import { Fieldset, Frame } from "@react95/core";
import { GrLinkedin } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

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
				{/* mailto: link?? icon of mail? */}
				<Frame className="languageFrame"></Frame>
				<a
					href="mailto:elena_papazova@hotmail.com"
					className="infoText"
					style={{ color: "blue" }}
				>
					elena_papazova@hotmail.com
				</a>
			</Fieldset>

			<Fieldset legend="Social Media" className="fieldsetColumn">
				{/* icon of linkedin/ etc.. */}
				<GrLinkedin size={25} />
				<p className="infoText">elena.papazova</p>
				<BsWhatsapp size={25} />
				<p className="infoText">+38977926520</p>
			</Fieldset>
		</Frame>
	);
};
