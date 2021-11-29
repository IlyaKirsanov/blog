import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
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
		<>
			<CreatePostPortal />
			<Home />
		</>
	);
}

export default App;
