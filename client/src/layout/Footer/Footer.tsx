import React from "react";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footerContent}>
				<p className={styles.text}>
					<span className={styles.textBold}>Blogium </span>
					Copyright ©{new Date().getFullYear()} All rights reserved
				</p>
				<Socials className={styles.socialsFooter} />
			</div>

		</footer>
	);
};


export default Footer;
