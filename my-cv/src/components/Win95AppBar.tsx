import {
	AppBar,
	Toolbar,
	TextField,
	Button,
	List,
	ListItem,
	Divider,
} from "react95";
import logoIMG from "../assets/win95logo.png";
import { useState } from "react";

export const Win95AppBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div style={{ marginBottom: "60px" }}>
			<AppBar>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<div style={{ position: "relative", display: "inline-block" }}>
						<Button
							onClick={() => setOpen(!open)}
							active={open}
							style={{
								fontWeight: "bold",
							}}
						>
							<img
								src={logoIMG}
								alt="react95 logo"
								style={{ height: "20px", marginRight: 4 }}
							/>
							Start
						</Button>
						<span style={{ margin: "10px 10px" }}>Welcome, Elena</span>
						{open && (
							<List
								style={{
									position: "absolute",
									left: "0",
									top: "100%",
								}}
								onClick={() => setOpen(false)}
							>
								<ListItem>
									<span role="img" aria-label="👨‍💻">
										👨‍💻
									</span>
									Profile
								</ListItem>
								<ListItem>
									<span role="img" aria-label="📁">
										📁
									</span>
									My account
								</ListItem>
								<Divider />
								<ListItem disabled>
									<span role="img" aria-label="🔙">
										🔙
									</span>
									Logout
								</ListItem>
							</List>
						)}
					</div>

					<TextField placeholder="Search..." width={150} />
				</Toolbar>
			</AppBar>
		</div>
	);
};
