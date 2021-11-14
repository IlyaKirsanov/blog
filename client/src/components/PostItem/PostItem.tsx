import { FC, useEffect, useState } from "react";
import { PostItemProps } from "./PostItem.props";
import { User } from "../../utils/interface";
import { find } from "lodash";

export const PostItem: FC<PostItemProps> = ({ post, className }): JSX.Element => {

	const [postAuthor, setPostAuthor] = useState<User | null>(null);

	//TODO Replace with state
	useEffect(()=>{
		const users = JSON.parse(localStorage.getItem('users') as string);
		const author = find(users, (user:User) => user.id === post.id);
		setPostAuthor(author);
	},[]);

	return (
		<div>
			{post.id}
			{post.title}
			<img src={postAuthor?.avatar}/>
		</div>
	);
};
