import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppModal } from "../../utils/app-context";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styles as s } from "./AddPostForm.styles";
import { Post } from "../../utils/interface";
import { uid } from "uid";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector } from "../../store/selectors";
import { setPosts } from "../../store/actions";

export const AddPostForm = (): JSX.Element => {

	const { dispatch: dispatchContext } = useAppModal();
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [newPost, setNewPost] = useState<Post | null>(null);
	const [postTitle, setPostTitle] = useState<string>('');
	const [postContent, setPostContent] = useState<string>('');

	const handleCloseForm = () => dispatchContext({ type: 'toggleModal' });

	const handleFormSubmit = () => {

		const post: Post = {
			id: uid(),
			createdDate: new Date().getTime(),
			title: postTitle,
			content: postContent,
			author: '1'
		};
		setNewPost(post);
		setPostTitle('');
		setPostContent('');
		console.log(post);
	};

	const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setPostTitle(e.target.value);
	};

	const handleContentInput = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setPostContent(e.target.value);
	};

	useEffect(() => {
		const updatedPosts = [...posts, newPost];
		newPost && dispatch(setPosts(updatedPosts));

	}, [newPost]);

	return (
		<Container
			sx={s.container}
		>
			<Box sx={s.topWrapper}>
				<Typography
					variant="h5"
					sx={s.title}>
					Create new post
				</Typography>
				<Button
					sx={s.closeBtn}
					onClick={handleCloseForm}>
					<CloseIcon />
				</Button>
			</Box>

			<form style={s.form}>
				<TextField
					sx={s.postTitleInput}
					label="Create title"
					id="postTitle"
					value={postTitle}
					onChange={handleTitleInput}
				/>
				<TextField
					sx={s.postContentInput}
					label="Add content"
					multiline
					rows={10}
					id="postContent"
					value={postContent}
					onChange={handleContentInput}
				/>
			</form>
			<Button
				onClick={handleFormSubmit}
				sx={s.submitBtn}
			>
				Submit
			</Button>
		</Container>
	);
};
