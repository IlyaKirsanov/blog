import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
	Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styles as s } from "./AddPostForm.styles";
import { Post } from "../../utils/interface";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { togglePostPortal } from "../../store/actions";
import { head, isEmpty } from "lodash";
import { sendPost } from "../../store/asyncAction";
import { toBase64 } from "utils";

export const AddPostForm = (): JSX.Element => {

	const dispatch = useDispatch();
	const [newPost, setNewPost] = useState<Post>({} as Post);
	const [postTitle, setPostTitle] = useState<string>('');
	const [imageFile, setImageFile] = useState<string>('');
	const [postContent, setPostContent] = useState<string>('');
	const [tags, setTags] = useState<string[]>([]);

	const handleCloseForm = () => dispatch(togglePostPortal());

	const handleFormSubmit = async (e: FormEvent) => {
		e.preventDefault();
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
		!isEmpty(newPost) && dispatch(sendPost(newPost));
	}, [newPost]);

	const handleFileInput = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = head(event.target.files);
		const fileBase64 = file && await toBase64(file);
		setImageFile(fileBase64 as string);
	};

	const handleSelectTags = (event: SelectChangeEvent<typeof tags>) => {
		const { target: { value } } = event;
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

			<form
				style={s.form}
				onSubmit={handleFormSubmit}
			>
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
				<Button
					type="submit"
					sx={s.submitBtn}
				>
					Submit
				</Button>
			</form>

		</Container>
	);
};
