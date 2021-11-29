import React from "react";
import { ReactComponent as AddPostIcon } from './add-post.svg';
import styles from './AddPost.module.scss';
import { useDispatch } from "react-redux";
import { togglePostPortal } from "../../store/actions";

const AddPost = (): JSX.Element => {

	const dispatch = useDispatch();

	//TODO MUI
	return (
		<div title="Create new post" className={styles.addPost}>
			<button className={styles.addButton} onClick={() => dispatch(togglePostPortal())}>
				<AddPostIcon className={styles.addIcon} />
			</button>
		</div>
	);
};

export default AddPost;
