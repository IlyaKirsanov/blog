import { FC, useEffect, useState } from "react";
import { PostItemProps } from "./PostItem.props";
import { User } from "../../utils/interface";
import { find, map, size } from "lodash";
import { format } from "date-fns";
import styles from './PostItem.module.scss';
import { ReactComponent as HeartIcon } from './heart.svg';
import { useSelector } from "react-redux";
import { usersSelector } from "../../store/selectors";
import { Link } from "react-router-dom";

export const PostItem: FC<PostItemProps> = ({ post }): JSX.Element => {

	const [postAuthor, setPostAuthor] = useState<User | null>(null);

	const users = useSelector(usersSelector);

	useEffect(() => {
		const author = find(users, (user: User) => user.id === post.author);
		author && setPostAuthor(author);
	}, []);

	//TODO MUI

	//! TODO https://github.com/IlyaKirsanov/blog/commit/f3a6107fa8132027e82daa6374c4e1cf8b12c628#r61113221
	/*
		again a lot of div's 😃
		I saw you want to use this project as a personal blog, it's a good idea to do it not just as homework, but use for more (still I will recommend looking into Gatsby or any other static generator for such task)
		But still, if you do something that will depend on searching it's better to consider SEO principles, semantic HTML is one of those, especially correct buttons, links, and headers, it's very important if you want google bots to love you 😄
		you can read any article about semantics, I remember I opened every one even if I knew I already read something similar, it helps remember all those rules and tags.
		But as an example
	*/
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
						<Link
							className={styles.readMore}
							to={`/blog/${post.id}`}
							key={post.id}
						>
							Read More ...
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
