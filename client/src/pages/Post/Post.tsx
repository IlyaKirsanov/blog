import { Typography, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "store/selectors";

export const Post: React.FC = (): JSX.Element => {

	const params = useParams();

	const postData = useSelector(getPostById(params.postId || ''));

	return (
		<Container>
			<Typography variant="h5">Post page</Typography>
			<Typography>{postData.title}</Typography>
			<Typography>{postData.content}</Typography>
		</Container>
	);
};
