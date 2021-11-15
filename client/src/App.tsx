import React from "react";
import Home from "./pages/Home/Home";
import { AppModalProvider } from "./utils/app-context";
import { CreatePostPortal } from "./components";

function App(): JSX.Element {
	return (
		<AppModalProvider>
			<CreatePostPortal />
			<Home />
		</AppModalProvider>
	);
}

export default App;
