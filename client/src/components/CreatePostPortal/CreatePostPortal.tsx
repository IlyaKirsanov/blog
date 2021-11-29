import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import styles from './CreatePostPortal.module.scss';
import { useOnClickOutside } from "../../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { togglePostPortal } from "../../store/actions";
import { isPortalOpenSelector } from "../../store/selectors";

const CreatePostComponent = () => {

	const ref = useRef(null);
	const dispatch = useDispatch();

	const handleOutsideClick = () => {
		dispatch(togglePostPortal());
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

	const isPortalOpen = useSelector(isPortalOpenSelector);

	if (!isPortalOpen) return null;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return ReactDOM.createPortal(<CreatePostComponent />, document.getElementById('add-post-modal')!);
};
