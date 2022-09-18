import { useClippy } from "@react95/clippy";
import { useEffect } from "react";
import { getRandomClippyLine } from "../functions/getRandomLine";

export const Clippy = () => {
	const { clippy } = useClippy();

	const activateClippy = () => {
		clippy.speak(getRandomClippyLine());
		clippy.animate();
	};
	useEffect(() => {
		if (clippy) {
			clippy.speak("Hello! I am Clippy, your virtual assistant.");

			const timer = setInterval(() => activateClippy, 10000);

			return function stopTimer() {
				clearInterval(timer);
			};
		}
	}, [clippy]);

	return <></>;
};
