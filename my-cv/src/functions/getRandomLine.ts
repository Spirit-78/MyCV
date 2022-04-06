import { clippyLines } from "../constants/clippyLines";

export const getRandomClippyLine = () =>
	clippyLines[Math.floor(Math.random() * clippyLines.length)];
