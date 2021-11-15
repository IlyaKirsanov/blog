import React from "react";
import { withLayout } from "../../layout/Layout";
import styles from './Home.module.scss';
import { PostsList } from "../../components/";

const Home: React.FC = (): JSX.Element => {

	return (
		<>
			<PostsList className={styles.postsList}/>
		</>
	);
};

export default withLayout(Home);
