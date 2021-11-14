import React from "react";
import { withLayout } from "../../layout/Layout";
import styles from './Home.module.scss';
import { PostsList } from "../../components/";

const Home: React.FC = (): JSX.Element => {

	return (
		<div>
			<PostsList className={styles.postsList}/>
		</div>
	);
};

export default withLayout(Home);
