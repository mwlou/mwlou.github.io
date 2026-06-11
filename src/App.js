import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { createUseStyles } from "react-jss";
import Home from "./Pages/Home";
import IG from "./assets/img/IG.png";
import TikTok from "./assets/img/TikTok.png";

const useStyles = createUseStyles(() => {
	return {
		appContainer: {
			backgroundColor: "#ddd0ba",
			padding: "24px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		brand: {
			color: "#FFFFFF",
			position: "fixed",
			left: "80px",
			top: "60px",
			"& h1": {
				fontSize: "32px",
				margin: 0,
				paddingBottom: "12px",
				"@media (min-width: 769px)": {
					fontSize: "80px",
				},
			},
		},
		links: {
			display: "flex",
			position: "fixed",
			right: "80px",
			top: "60px",
			gap: "8px",
		},
		social: {
			width: "64px",
		},
		footer: {
			position: "fixed",
			left: "80px",
			bottom: "40px",
			fontSize: "18px",
			padding: "16px",
			color: "#FFFFFF",
			"@media (min-width: 769px)": {
				fontSize: "24px",
			},
		},
	};
});

function App() {
	const classes = useStyles();

	return (
		<div className={classes.appContainer}>
			<BrowserRouter>
				<div className={classes.brand}>
					<h1>LOU</h1>
				</div>
				<div className={classes.links}>
					<a href="https://www.tiktok.com/@lous.mems">
						<img className={classes.social} src={TikTok} alt="TikTok" />
					</a>
					<a href="https://www.instagram.com/lous.mems">
						<img className={classes.social} src={IG} alt="Instagram" />
					</a>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<div className={classes.footer}>
					<p>Handmade in Florida, USA</p>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
