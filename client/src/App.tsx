import React, { useEffect } from "react";
import { CreatePostPortal } from "./components";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchUsers } from "./store/asyncAction";
import { Route, Routes } from "react-router-dom";
import { About, Blog, Home, Contacts, Post } from "pages";
import Layout from "layout/Layout";

function App(): JSX.Element {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
		dispatch(fetchPosts());
	}, []);

	return (
		<>
			<CreatePostPortal />
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/:postId" element={<Post />} />
					<Route path="contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
