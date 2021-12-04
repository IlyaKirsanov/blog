import { ActionData, Statuses } from './../utils/interface';
import { Post, User } from "../utils/interface";

export const GET_POSTS = 'GET_POSTS';
export const GET_USERS = 'GET_USERS';
export const SET_POSTS = 'SET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const TOGGLE_POST_PORTAL = 'TOGGLE_POST_PORTAL';
export const IS_FETCHING_POSTS = 'IS_FETCHING_POSTS';
export const IS_FETCHING_USERS = 'IS_FETCHING_USERS';
export const IS_SENDING_DATA = 'IS_SENDING_DATA';
export const SET_ACTION_STATUS = 'SET_ACTION_STATUS';

export type Action =
	| { type: typeof SET_POSTS, posts: Post[] }
	| { type: typeof GET_POSTS, posts: Post[] }
	| { type: typeof GET_USERS, users: User[] }
	| { type: typeof CREATE_POST, post: Post }
	| { type: typeof TOGGLE_POST_PORTAL }
	| { type: typeof IS_FETCHING_POSTS, isFetchingPosts: boolean }
	| { type: typeof IS_FETCHING_USERS, isFetchingUsers: boolean }
	| { type: typeof IS_SENDING_DATA, isSendingData: boolean }
	| { type: typeof SET_ACTION_STATUS, actionData: ActionData }
	;

export const setPosts = (posts: Post[]): Action => {
	return { type: SET_POSTS, posts };
};

export const createPost = (post: Post): Action => {
	return { type: CREATE_POST, post };
};

export const getPosts = (posts: Post[]): Action => {
	return { type: GET_POSTS, posts };
};

export const setIsFetchingPosts = (isFetchingPosts: boolean): Action => {
	return { type: IS_FETCHING_POSTS, isFetchingPosts };
};

export const getUsers = (users: User[]): Action => {
	return { type: GET_USERS, users };
};

export const setIsFetchingUsers = (isFetchingUsers: boolean): Action => {
	return { type: IS_FETCHING_USERS, isFetchingUsers };
};

export const togglePostPortal = (): Action => {
	return { type: TOGGLE_POST_PORTAL };
};

export const setIsSendingData = (isSendingData: boolean): Action => {
	return { type: IS_SENDING_DATA, isSendingData };
};

export const setAsyncActionStatus = (action: string, status: Statuses): Action => {
	return { type: SET_ACTION_STATUS, actionData: { id: new Date().getTime(), action, status }};
};

