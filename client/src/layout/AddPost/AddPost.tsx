import React from "react";
import { ReactComponent as AddPostIcon } from './add-post.svg';
import styles from './AddPost.module.scss';
import { useAppModal } from "../../utils/app-context";

const AddPost = (): JSX.Element => {

	const { dispatch } = useAppModal();

	return (
		<div title="Create new post" className={styles.addPost}>
			<button className={styles.addButton} onClick={() => dispatch({ type: 'toggleModal' })}>
				<AddPostIcon className={styles.addIcon} />
			</button>
		</div>
	);
};

export default AddPost;
