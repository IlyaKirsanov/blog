import { Post, User } from "../utils/interface";

export const GET_POSTS = 'GET_POSTS';
export const GET_USERS = 'GET_USERS';
export const SET_POSTS = 'SET_POSTS';
export const TOGGLE_POST_PORTAL = 'TOGGLE_POST_PORTAL';
export const IS_FETCHING_POSTS = 'IS_FETCHING_POSTS';
export const IS_FETCHING_USERS = 'IS_FETCHING_USERS';

export type Action =
	| { type: typeof SET_POSTS, posts: Post[] }
	| { type: typeof GET_POSTS, posts: Post[] }
	| { type: typeof GET_USERS, users: User[] }
	| { type: typeof TOGGLE_POST_PORTAL }
	| { type: typeof IS_FETCHING_POSTS, isFetchingPosts: boolean }
	| { type: typeof IS_FETCHING_USERS, isFetchingUsers: boolean }
	;

export const setPosts = (posts: Post[]): Action => {
	return { type: SET_POSTS, posts };
};

export const getPosts = (posts: Post[]): Action => {
	return { type: GET_POSTS, posts };
};

export const setIsFetchingPosts = (isFetchingPosts: boolean): Action =>{
	return {type: IS_FETCHING_POSTS, isFetchingPosts};
};

export const getUsers = (users: User[]): Action => {
	return { type: GET_USERS, users };
};

export const setIsFetchingUsers = (isFetchingUsers: boolean): Action =>{
	return {type: IS_FETCHING_USERS, isFetchingUsers};
};

export const togglePostPortal = (): Action => {
	return { type: TOGGLE_POST_PORTAL };
};
