import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavigationProps } from "./Navigation.props";
import cn from "classnames";

const Navigation:FC<NavigationProps> = ({className}):JSX.Element => {

	//TODO MUI
	return (
		<nav className={cn(className, styles.navigation)}>
			<span className={styles.navItem}>Blog</span>
			<span className={styles.navItem}>About</span>
			<span className={styles.navItem}>Contacts</span>
			//! TODO https://github.com/IlyaKirsanov/blog/commit/45a9dfd3e11f707a89a36145383d1e7db42e1a3c#r61110559
			/**
				Yup 😊 it's better to use <a> here
if is a temporary solution, then it was not worth adding styles, it's extra work, keep it simple
Though I like

here. It's a perfect fit ❤️
			 */
		</nav>
	);
};

export default Navigation;
