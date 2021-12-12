import { RootState } from "./rootReducer";
import { Post, User } from "../utils/interface";
import { find } from "lodash";


export const postsSelector = (state: RootState): Post[] => state.posts;
export const getPostById = (id: string) => (state: RootState): Post => {
	const post = find(state.posts, (postItem: Post) => postItem.id === id) || {} as Post;
	return post;
};
export const usersSelector = (state: RootState): User[] => state.users;
export const isPostsInProgress = (state: RootState): boolean => state.isFetchingPosts;
export const isUsersInProgress = (state: RootState): boolean => state.isFetchingUsers;
export const isPortalOpenSelector = (state: RootState): boolean => state.isPostPortalOpen;
