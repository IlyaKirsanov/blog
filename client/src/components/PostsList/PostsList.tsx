import React, { FC } from "react";
import { PostsListProps } from "./PostsList.props";
import { Post } from "../../utils/interface";
import { isEmpty, map } from "lodash";
import { PostItem } from "../../components";
import styles from "./PostsList.module.scss";
import { useSelector } from "react-redux";
import { isPostsInProgress, postsSelector } from "../../store/selectors";

export const PostsList: FC<PostsListProps> = ({ className }): JSX.Element => {

	const posts = useSelector(postsSelector);
	const isFetchPostsInProgress = useSelector(isPostsInProgress);

	//TODO MUI
	return (
		<div className={className}>
			<div className={styles.postsWrapper}>
				<div className={styles.postsTitle}>
					<span className={styles.recent}>Recent Posts</span>
					<span className={styles.morePosts}>View all</span>
				</div>
				{isEmpty(posts) && isFetchPostsInProgress && <div>Loading Posts...</div>}
				{!isEmpty(posts) && !isFetchPostsInProgress
					&& map(posts, (postItem: Post) => <PostItem post={postItem} key={postItem.id} />)}
			</div>

		</div>
	);
};
