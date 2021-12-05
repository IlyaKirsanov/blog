import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { CreatePostPortal } from "./components";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchUsers } from "./store/asyncAction";
import { Route, Routes } from "react-router-dom";
import About from "pages/About/About";
import Blog from "pages/Blog/Blog";
import Contacts from "pages/Contacts/Contacts";

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
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="blog" element={<Blog />} />
				<Route path="contacts" element={<Contacts />} />
			</Routes>
		</>
	);
}

export default App;
