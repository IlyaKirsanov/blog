import React from "react";
import Home from "./pages/Home/Home";
import { AppModalProvider } from "./utils/app-context";

function App(): JSX.Element {
	return (
		<AppModalProvider>
			<Home />
		</AppModalProvider>
	);
}

export default App;
