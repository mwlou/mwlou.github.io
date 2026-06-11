import { Link } from "react-router";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router";

const useStyles = createUseStyles(() => {
	return {
		navMenu: {
			width: "100%",
			borderBottom: "1px solid #d1d1d1",
			height: "48px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "0 24px",
			zIndex: 2,
		},
		navContent: {
			padding: "0 24px",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			// "@media (min-width: 769px)": {
			// 	maxWidth: "980px",
			// },
		},
		navGroup: {
			display: "flex",
			gap: "24px",
		},
		home: {
			fontSize: "18px",
		},
		pageLink: {
			fontWeight: 400,
			fontSize: "18px",
		},
		selectedPage: {
			fontWeight: 700,
		},
	};
});

export const Nav = () => {
	const classes = useStyles();
	const location = useLocation();
	console.log("location: ", location);
	const isSelected = (path) =>
		location?.pathname?.includes(path) ? classes.selectedPage : "";

	return (
		<nav className={classes.navMenu}>
			<div className={classes.navContent}>
				<Link className={classes.home} to="/">
					LOU
				</Link>
				<div className={classes.navGroup}>
					{/* <Link
						className={classnames(isSelected("ceramics"), classes.pageLink)}
						to="/ceramics">
						Ceramics
					</Link>
					<Link
						className={classnames(isSelected("stationery"), classes.pageLink)}
						to="/stationery">
						Stationery
					</Link>
					<Link
						className={classnames(isSelected("about"), classes.pageLink)}
						to="/about">
						About
					</Link> */}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
