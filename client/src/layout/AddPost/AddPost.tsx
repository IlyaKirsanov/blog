import React from "react";
import { ReactComponent as AddPostIcon } from './add-post.svg';
import styles from './AddPost.module.scss';

const AddPost = (): JSX.Element => {

	return (
		<div title="Create new post" className={styles.addPost}>
			<button className={styles.addButton}>
				<AddPostIcon className={styles.addIcon} />
			</button>
		</div>
	);
};

export default AddPost;
