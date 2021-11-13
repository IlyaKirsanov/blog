import React, { FC } from "react";
import { socialsData } from "./socials.data";
import { SocialItem } from "../../components";
import { SocialItemProps } from "../../components/SocialItem/SocialItem.props";
import styles from "./Socials.module.scss";
import { map } from "lodash";
import cn from "classnames";
import { SocialsProps } from "./Socials.props";

const Socials:FC<SocialsProps> = ({className}): JSX.Element => {

	return (
		<div className={cn(className, styles.socialsContainer)}>
			{map(socialsData, (item: SocialItemProps) =>
				<SocialItem icon={item.icon} link={item.link} key={item.link} title={item.title} className={styles.socialItem}/>
			)}
		</div>
	);
};

export default Socials;
