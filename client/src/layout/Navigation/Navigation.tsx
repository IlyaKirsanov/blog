import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavigationProps } from "./Navigation.props";
import cn from "classnames";

const Navigation:FC<NavigationProps> = ({className}):JSX.Element => {
	return (
		<nav className={cn(className, styles.navigation)}>
			<span className={styles.navItem}>Blog</span>
			<span className={styles.navItem}>About</span>
			<span className={styles.navItem}>Contacts</span>
		</nav>
	);
};

export default Navigation;
