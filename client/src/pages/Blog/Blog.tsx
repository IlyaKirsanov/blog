import { Typography, Container } from "@mui/material";
import { PostsList } from "components";
import { withLayout } from "layout/Layout";
import React from "react";

const Blog: React.FC = (): JSX.Element => {

	return (
		<Container>
			<Typography variant="h5">Blog page</Typography>
			<PostsList />
		</Container>
	);
};

export default withLayout(Blog);
