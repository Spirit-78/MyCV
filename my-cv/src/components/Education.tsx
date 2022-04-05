import { Fieldset, Frame } from "@react95/core";
import FINKI from "../assets/finki.png";

export const Education = () => {
	return (
		<Fieldset
			legend="Faculty of Computer Science and Engineering"
			style={{ margin: "10px" }}
		>
			<Frame width={55} height={55} margin={5} display={"inline-block"}>
				<img
					src={FINKI}
					alt="FINKI logo"
					style={{ height: 45, width: 45, margin: 5 }}
				/>
			</Frame>
			<div style={{ display: "inline-block" }}>
				<p
					style={{
						marginLeft: 22,
						marginTop: 4,
						marginBottom: 5,
						fontWeight: "bolder",
					}}
				>
					Bachelor's Degree
				</p>
				<p style={{ marginLeft: 22, marginTop: 4, marginBottom: 5 }}>
					Sep 2017 - Jul 2023
				</p>
				<p style={{ marginBottom: 4, marginLeft: 22, marginRight: 10 }}>
					Skopje, Skopski, North Macedonia
				</p>
			</div>
		</Fieldset>
	);
};
