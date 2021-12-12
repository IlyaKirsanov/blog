import React from "react";
import { Typography, Container } from "@mui/material";
import { PostsList } from "components";

export const Blog: React.FC = (): JSX.Element => {

	return (
		<Container>
			<Typography variant="h5">Blog page</Typography>
			<PostsList />
		</Container>
	);
};
