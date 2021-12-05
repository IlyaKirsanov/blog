import { Container, Typography } from "@mui/material";
import { withLayout } from "layout/Layout";
import React from "react";

const About: React.FC = (): JSX.Element => {

	return (
		<Container>
			<Typography variant="h5">About page</Typography>
		</Container>
	);
};

export default withLayout(About);
