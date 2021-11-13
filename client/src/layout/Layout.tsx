import React, { FC } from "react";
import { LayoutProps } from "./Layout.props";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";


const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {

	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer}/>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FunctionComponent<T>) => {
	// This method return updated Component with Layout
	return (props: T): JSX.Element => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
