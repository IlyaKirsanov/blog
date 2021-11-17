import React, { FC } from "react";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import cn from "classnames";

const Footer: FC<FooterProps> = ({ className }): JSX.Element => {
	//TODO MUI
	return (
		<footer className={cn(className, styles.footerWrapper)}>
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
