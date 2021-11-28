import React from "react";
import styles from './About.module.scss';
import cn from "classnames";

const Home: React.FC = (): JSX.Element => {

	return (
		<div>
			<h1 className={cn(styles.title)}>ABOUT</h1>
		</div>
	);
};

export default Home;
