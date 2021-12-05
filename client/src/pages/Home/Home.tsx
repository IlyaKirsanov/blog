import { Container, Typography } from "@mui/material";
import React from "react";
import { withLayout } from "../../layout/Layout";

const Home: React.FC = (): JSX.Element => {

	return (
		<Container>
			<Typography variant="h3">Home page</Typography>
		</Container>
	);
};

export default withLayout(Home);
