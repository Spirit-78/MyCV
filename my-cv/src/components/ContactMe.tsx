import { Fieldset, Frame } from "@react95/core";

export const ContactMe = () => {
	return (
		<Frame>
			<Fieldset legend="Phone Number">
				<Frame className="languageFrame">
					<span className="fi fi-mk infoFlags"></span>
				</Frame>
				<p className="infoText">+38977926520</p>
			</Fieldset>

			<Fieldset legend="Email">
				{/* mailto: link?? icon of mail? */}
				<p className="infoText">elena_papazova@hotmail.com</p>
			</Fieldset>

			<Fieldset legend="Social Media">
				<Frame className="languageFrame">{/* icon of linkedin/ etc.. */}</Frame>
				<p className="infoText">elena.papazova</p>
			</Fieldset>
		</Frame>
	);
};
