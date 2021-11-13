import React from "react";
import { socialsData } from "./socials.data";
import { SocialItem } from "../../components";
import { SocialItemProps } from "../../components/SocialItem/SocialItem.props";
import styles from "./Socials.module.scss";
import { map } from "lodash";

const Socials = (): JSX.Element => {

	console.log(socialsData);

	return (
		<div className={styles.socialsContainer}>
			{map(socialsData, (item: SocialItemProps) =>
				<SocialItem icon={item.icon} link={item.link} key={item.link} title={item.title} className={styles.socialItem}/>
			)}
		</div>
	);
};

export default Socials;
