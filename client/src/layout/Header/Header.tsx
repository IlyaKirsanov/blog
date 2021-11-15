import React, { FC } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Socials from "../Socials/Socials";
import SearchField from "../SearchField/SearchField";
import blogiumIcon from "../../static/images/Blogium-logo.png";

const Header: FC<HeaderProps> = (): JSX.Element => {

	return (
		<header className={styles.header}>
			<img src={blogiumIcon} className={styles.logo}/>
			<div className={styles.headerContent}>
				<SearchField className={styles.search}/>
				<Navigation className={styles.navigation}/>
				<Socials className={styles.socials}/>
			</div>
		</header>
	);
};

export default Header;
