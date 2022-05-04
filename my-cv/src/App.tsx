import "@react95/icons/icons.css";
import { Win95AppBar } from "./components/Win95AppBar";
import { styleReset } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DesktopIcon } from "./components/DesktopIcon";
import "./index.css";
import { ClippyProvider } from "@react95/clippy";
import { useState } from "react";
import { Clippy } from "./components/Clippy";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
		background: teal;
  }
  ${styleReset}
`;

function App() {
	const [showClippy, setShowClippy] = useState(false);

	setTimeout(() => setShowClippy(true), 5000);

	return (
		<div>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<Win95AppBar />
				<div style={{ display: "flex", flexDirection: "column" }}>
					{/* {desktopIconsList.map((icon) => (
						<DesktopIcon {...icon} />
					))} */}
					<DesktopIcon />
				</div>
				{showClippy && (
					<ClippyProvider>
						<Clippy />
					</ClippyProvider>
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;
