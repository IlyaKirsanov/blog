import React, { FC } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import SearchField from "../SearchField/SearchField";
import blogiumIcon from "../../static/images/Blogium-logo.png";
import AddPost from "../AddPost/AddPost";

const Header: FC<HeaderProps> = (): JSX.Element => {
	//TODO MUI
	return (
		<header className={styles.header}>
			<img src={blogiumIcon} className={styles.logo}/>
			<div className={styles.headerContent}>
				<SearchField className={styles.search}/>
				<Navigation className={styles.navigation}/>
				<AddPost/>
			</div>
		</header>
	);
};

export default Header;
