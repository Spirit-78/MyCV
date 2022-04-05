import {
	AppBar,
	Toolbar,
	Panel,
	Button,
	List,
	ListItem,
	Divider,
} from "react95";
import logoIMG from "../assets/win95logo.png";
import { useEffect, useState } from "react";
import { Shdocvw257, User, User7 } from "@react95/icons";
import { formatTime } from "../functions/formatTime";

export const Win95AppBar = () => {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(formatTime(new Date()));

	useEffect(() => {
		setInterval(() => setTime(formatTime(new Date())), 1000);
	});

	return (
		<div style={{ marginBottom: "60px" }}>
			<AppBar>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<div
						style={{
							position: "relative",
							display: "inline-block",
						}}
					>
						<Button
							onClick={() => setOpen(!open)}
							active={open}
							style={{
								fontWeight: "bold",
							}}
							className="appBar"
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
									<User variant="32x32_4" />
									Profile
								</ListItem>
								<ListItem disabled>
									<Shdocvw257
										variant="32x32_4"
										style={{ paddingRight: "10px" }}
									/>
									The Internet
								</ListItem>
								<Divider />
								<ListItem>
									<User7 variant="32x32_4" />
									Log Out
								</ListItem>
							</List>
						)}
					</div>
					<Panel variant="well" style={{ padding: "5px" }}>
						{time}
					</Panel>
					{/* <TextField placeholder="Search..." width={150} /> */}
				</Toolbar>
			</AppBar>
		</div>
	);
};
