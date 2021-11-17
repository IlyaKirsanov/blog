import React from "react";
import { useAppModal } from "../../utils/app-context";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styles as s } from "./AddPostForm.styles";

export const AddPostForm = (): JSX.Element => {

	const { dispatch } = useAppModal();

	const handleCloseForm = () => dispatch({ type: 'toggleModal' });

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
					label="Post title"
				/>
				<TextField
					label="Post content"
					multiline
					rows={10} />
			</form>
			<Button
				onClick={handleCloseForm}
				sx={s.submitBtn}
			>
				Submit
			</Button>
		</Container>
	);
};
