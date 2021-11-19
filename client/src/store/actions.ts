import { Post } from "../utils/interface";

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const TOGGLE_POST_PORTAL = 'TOGGLE_POST_PORTAL';

export type Action =
| {
	type: typeof SET_POSTS
	posts: (Post | null)[]
} | {
	type: typeof TOGGLE_POST_PORTAL
};

export const setPosts = (posts: (Post | null)[]): Action => {
	return { type: SET_POSTS, posts};
};

export const togglePostPortal = (): Action => {
	return { type: TOGGLE_POST_PORTAL };
};
