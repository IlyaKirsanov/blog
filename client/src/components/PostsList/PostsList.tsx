import React, { FC, useEffect, useState } from "react";
import { PostsListProps } from "./PostsList.props";
import { Post } from "../../utils/interface";
import { map } from "lodash";
import PostItem from "../PostItem/PostItem";

export const PostsList: FC<PostsListProps> = ({ className }): JSX.Element => {

	const [posts, setPosts] = useState<Post[]>([]);

	//TODO Replace with state
	useEffect(() => {
		try {
			const posts = localStorage.getItem('posts');
			posts && setPosts(JSON.parse(posts));
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className={className}>
			{map(posts, (postItem:Post) => <PostItem post={postItem} />)}
		</div>
	);
};
