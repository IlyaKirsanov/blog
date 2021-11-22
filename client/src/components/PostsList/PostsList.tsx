import React, { FC } from "react";
import { PostsListProps } from "./PostsList.props";
import { Post } from "../../utils/interface";
import { map } from "lodash";
import { PostItem } from "../../components";
import styles from "./PostsList.module.scss";
import { useSelector } from "react-redux";
import { postsSelector } from "../../store/selectors";

export const PostsList: FC<PostsListProps> = ({ className }): JSX.Element => {

	const posts = useSelector(postsSelector);

	//TODO MUI
	return (
		<div className={className}>
			<div className={styles.postsWrapper}>
				<div className={styles.postsTitle}>
					<span className={styles.recent}>Recent Posts</span>
					<span className={styles.morePosts}>View all</span>
				</div>
				{map(posts, (postItem: Post) => <PostItem post={postItem} key={postItem.id} />)}
			</div>

		</div>
	);
};
