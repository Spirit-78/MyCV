export const formatTime = (date: Date) =>
	date.toString().split(" ")[4].slice(0, 5);
