import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppModal } from "../../utils/app-context";
import {
	Box,
	Button,
	Container,
	MenuItem,
	OutlinedInput,
	Select, SelectChangeEvent,
	// SelectChangeEvent,
	TextField,
	Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styles as s } from "./AddPostForm.styles";
import { Post } from "../../utils/interface";
import { uid } from "uid";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector } from "../../store/selectors";
import { setPosts } from "../../store/actions";
import { head } from "lodash";

export const AddPostForm = (): JSX.Element => {

	const { dispatch: dispatchContext } = useAppModal();
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [newPost, setNewPost] = useState<Post | null>(null);
	const [postTitle, setPostTitle] = useState<string>('');
	const [imageFile, setImageFile] = useState<string>('');
	const [postContent, setPostContent] = useState<string>('');
	const [tags, setTags] = useState<string[]>([]);

	const handleCloseForm = () => dispatchContext({ type: 'toggleModal' });

	const toBase64 = (file: File) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

	const handleFormSubmit = async () => {

		const post: Post = {
			id: uid(),
			createdDate: new Date().getTime(),
			title: postTitle,
			content: postContent,
			author: '1',
			mainImage: imageFile,
			tags: tags
		};
		setNewPost(post);
		setPostTitle('');
		setPostContent('');
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

	const handleFileInput = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = head(event.target.files);
		const fileBase64 = file && await toBase64(file);
		setImageFile(fileBase64 as string);
	};

	const handleSelectTags = (event: SelectChangeEvent<typeof tags>) => {
		const {	target: { value }} = event;
		setTags(typeof value === 'string' ? value.split(',') : value);
	};

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
					type="file"
					sx={s.postTitleInput}
					onChange={handleFileInput}
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
				<Select
					id="tags"
					value={tags}
					onChange={handleSelectTags}
					label="Tags"
					input={<OutlinedInput label="Tags" />}
					multiple
				>
					<MenuItem value="React">React</MenuItem>
					<MenuItem value="Vue">Vue</MenuItem>
					<MenuItem value="Angular">Angular</MenuItem>
				</Select>
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
