import { ActionData } from './../utils/interface';
import { Post, User } from "../utils/interface";
import {
	Action,
	CREATE_POST,
	GET_POSTS,
	GET_USERS,
	IS_FETCHING_POSTS,
	IS_FETCHING_USERS,
	IS_SENDING_DATA,
	SET_ACTION_STATUS,
	SET_POSTS,
	TOGGLE_POST_PORTAL
} from "./actions";

export type RootState = {
	posts: Post[],
	users: User[],
	ayncActions: ActionData[],
	isPostPortalOpen: boolean,
	isFetchingPosts: boolean,
	isFetchingUsers: boolean,
	isSendingData: boolean,
};

const initialState: RootState = {
	posts: [],
	users: [],
	ayncActions: [],
	isPostPortalOpen: false,
	isFetchingPosts: false,
	isFetchingUsers: false,
	isSendingData: false,
};

export const rootReducer = (state: RootState = initialState, action: Action): RootState => {
	switch (action.type) {
		case TOGGLE_POST_PORTAL: {
			return {
				...state,
				isPostPortalOpen: !state.isPostPortalOpen
			};
		}
		case IS_FETCHING_POSTS: {
			return {
				...state,
				isFetchingPosts: action.isFetchingPosts
			};
		}

		case IS_FETCHING_USERS: {
			return {
				...state,
				isFetchingUsers: action.isFetchingUsers
			};
		}

		case GET_USERS: {
			return {
				...state,
				users: action.users
			};
		}
		case GET_POSTS: {
			return {
				...state,
				posts: action.posts
			};
		}
		case SET_POSTS: {

			return {
				...state,
				posts: action.posts
			};
		}

		case CREATE_POST: {

			return {
				...state,
				posts: [...state.posts, action.post]
			};
		}

		case IS_SENDING_DATA: {
			return {
				...state,
				isSendingData: action.isSendingData
			};
		}


		case SET_ACTION_STATUS: {
			return {
				...state,
				ayncActions: [...state.ayncActions, action.actionData]
			};
		}
		default:
			return state;
	}
};
