import { Container, Typography } from "@mui/material";
import { withLayout } from "layout/Layout";
import React from "react";

const Contacts: React.FC = (): JSX.Element => {

	return (
		<Container>
			<Typography variant="h5">Contacts page</Typography>
		</Container>
	);
};

export default withLayout(Contacts);
