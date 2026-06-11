import { createUseStyles } from "react-jss";
import mwl1 from "../assets/img/mwl1.jpg";
import mwl2 from "../assets/img/mwl2.jpg";
import mwl3 from "../assets/img/mwl3.jpg";
import mwl4 from "../assets/img/mwl4.jpg";

const useStyles = createUseStyles(() => {
	return {
		main: {
			overflow: "auto",
			width: "100%",
			height: "100%",
			display: "flex",
			justifyContent: "center",
		},
		gallery: {
			width: "100%",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
			// justifyContent: "center",
			// "@media (min-width: 769px)": {
			// 	maxWidth: "1024px",
			// },
		},
		image: {
			maxWidth: "80%",
			flex: "auto",
			margin: "8px",
			borderRadius: "8px",
			"@media (min-width: 769px)": {
				maxWidth: "50%",
			},
		},
	};
});
const Home = () => {
	const classes = useStyles();
	return (
		<main className={classes.main}>
			<div className={classes.gallery}>
				<img className={classes.image} src={mwl1} alt="Unglazed mugs" />
				<img
					className={classes.image}
					src={mwl2}
					alt="Glazed olive brown mugs"
				/>
				<img
					className={classes.image}
					src={mwl3}
					alt="Stacked glazed mugs of maroon color and olive brown color"
				/>
				<img
					className={classes.image}
					src={mwl4}
					alt="3 stacked olive brown mugs"
				/>
			</div>
		</main>
	);
};

export default Home;
