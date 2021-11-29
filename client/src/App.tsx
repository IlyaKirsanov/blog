import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { AppModalProvider } from "./utils/app-context";
import { CreatePostPortal } from "./components";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchUsers } from "./store/asyncAction";

function App(): JSX.Element {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
		dispatch(fetchPosts());
	}, []);

	return (
		<AppModalProvider>
			<CreatePostPortal />
			<Home />
		</AppModalProvider>
	);
}

export default App;
