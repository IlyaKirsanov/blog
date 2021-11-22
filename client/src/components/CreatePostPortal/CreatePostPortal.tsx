import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useAppModal } from "../../utils/app-context";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import styles from './CreatePostPortal.module.scss';
import { useOnClickOutside } from "../../hooks/useOutsideClick";

const CreatePostComponent = () => {

	const { dispatch } = useAppModal();

	const ref = useRef(null);

	const handleOutsideClick = () => {
		dispatch({ type: 'toggleModal' });
	};

	useOnClickOutside(ref, handleOutsideClick);

	//TODO MUI
	return (
		<div className={styles.portalBackdrop}>
			<div className={styles.portalContainer} ref={null}>
				<AddPostForm />
			</div>
		</div>
	);

};


export const CreatePostPortal = (): JSX.Element | null => {

	const { state } = useAppModal();

	if (!state.isModalOpen) return null;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return ReactDOM.createPortal(<CreatePostComponent />, document.getElementById('add-post-modal')!);
};
