import React, { FC } from "react";
import { SocialItemProps } from "./SocialItem.props";
import cn from "classnames";
import styles from "./SocialItem.module.scss";

export const SocialItem: FC<SocialItemProps> = ({ icon, link, title, className,  }) => {

	const IconComponent = icon;

	//TODO MUI

	//! TODO https://github.com/IlyaKirsanov/blog/commit/49b71873cbb6b90b6b7dc29a76026262559a047d#r61109512
	/**
	
		racc-oo-n 4 days ago Collaborator
			Why do you need div wrapper here?

 		@IlyaKirsanov
			IlyaKirsanov 4 days ago Author Owner
			@racc-oo-n good question) I thought such wrapper could make component more solid

 			@racc-oo-n
			racc-oo-n 3 days ago Collaborator
			I'm asking such questions just because it's interesting for me if you have any specific reason for that.
			Once I worked with the team, where we split styles like inner and outer styles.
			For example, margin, width, height goes in outer style, bg-color, padding, etc goes in inner styles. And we had 2 			different classes for that, on your example it would be

			.socials__item {
			  width:.. 
			}

			.socialItem {
			  transition:...
			}
			But we used those classes together `class="socials__item socialItem". And I was thinking that maybe you split tags by 			similar logic. It's always interesting how and why people make their decisions.
	 */
	return (
		<div className={cn(className, styles.socialItem)}>
			<a href={link} rel="noopener" target="_blank"  className={styles.url} title={title}>
				<IconComponent/>
			</a>
		</div>
	);
};

