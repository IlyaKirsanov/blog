import { FC, useEffect, useState } from "react";
import { PostItemProps } from "./PostItem.props";
import { User } from "../../utils/interface";
import { find, map, size } from "lodash";
import { format } from "date-fns";
import styles from './PostItem.module.scss';
import { ReactComponent as HeartIcon } from './heart.svg';

export const PostItem: FC<PostItemProps> = ({ post }): JSX.Element => {

	const [postAuthor, setPostAuthor] = useState<User | null>(null);

	//TODO Replace with state
	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('users') as string);
		const author = find(users, (user: User) => user.id === post.author);
		setPostAuthor(author);
	}, []);

	//TODO MUI
	return (
		<div className={styles.postItem}>
			<div className={styles.postContainer}>
				<div className={styles.postImage}>
					<img src={post.mainImage} className={styles.image} alt="post image" />
				</div>
				<div className={styles.postContent}>
					<div className={styles.postHeader}>
						<div className={styles.authorAvatar}>
							<img src={postAuthor?.avatar} className={styles.avatar} alt="avatar" />
						</div>
						<div className={styles.postMetaData}>
							<div className={styles.authorName}>{postAuthor?.name}</div>
							<span className={styles.createDate}>{format(post.createdDate, 'MMMM dd, yyyy')}</span>
						</div>
						<div className={styles.postLikesContainer}>
							<div className={styles.likes}>
								<HeartIcon />
								<span className={styles.likesCounter}>{size(post.likes)}</span>
							</div>
						</div>
					</div>
					<div className={styles.postBody}>
						<div className={styles.postTitle}>{post.title}</div>
						<div className={styles.postPreview}>{post.content}</div>
					</div>
					<div className={styles.postFooter}>
						<div className={styles.postTags}>
							{map(post.tags, (tag: string) => <span key={tag} className={styles.tag}>{tag}</span>)}
						</div>
						<span className={styles.readMore}>Read More ...</span>
					</div>
				</div>
			</div>
		</div>
	);
};
