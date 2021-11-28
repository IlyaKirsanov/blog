import React, { FC } from "react";
import { SocialItemProps } from "./SocialItem.props";
import cn from "classnames";
import styles from "./SocialItem.module.scss";

export const SocialItem: FC<SocialItemProps> = ({ icon, link, title, className,  }) => {

	const IconComponent = icon;

	//TODO MUI
	return (
		<div className={cn(className, styles.socialItem)}>
			<a href={link} rel="noopener" target="_blank"  className={styles.url} title={title}>
				<IconComponent/>
			</a>
		</div>
	);
};

