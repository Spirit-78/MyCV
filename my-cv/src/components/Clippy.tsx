import { useClippy } from "@react95/clippy";
import { getRandomClippyLine } from "../functions/getRandomLine";

export const Clippy = () => {
	const { clippy } = useClippy();

	setTimeout(() => {
		console.log("clippy animations: ", clippy.animations());
		clippy.speak(getRandomClippyLine());
	}, 1000);

	return <></>;
};
