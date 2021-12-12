import React, { FC } from "react";
import { LayoutProps } from "./Layout.props";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout: FC<LayoutProps> = (): JSX.Element => {

	//TODO MUI
	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<div className={styles.body}>
				<Outlet />
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export default Layout;
