import React, { FC } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import SearchField from "../SearchField/SearchField";
import blogiumIcon from "../../static/images/Blogium-logo.png";
import AddPost from "../AddPost/AddPost";
import { Link } from "react-router-dom";

const Header: FC<HeaderProps> = (): JSX.Element => {
	//TODO MUI
	return (
		<header className={styles.header}>
			<Link to="/"><img src={blogiumIcon} className={styles.logo}/></Link>
			<div className={styles.headerContent}>
				<SearchField className={styles.search}/>
				<Navigation className={styles.navigation}/>
				<AddPost/>
			</div>
		</header>
	);
};

export default Header;
