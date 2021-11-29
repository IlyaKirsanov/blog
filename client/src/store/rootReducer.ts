import { Post, User } from "../utils/interface";
import {
	Action,
	GET_POSTS,
	GET_USERS,
	IS_FETCHING_POSTS,
	IS_FETCHING_USERS,
	SET_POSTS,
	TOGGLE_POST_PORTAL
} from "./actions";

export type RootState = {
	posts: Post[],
	users: User[],
	isPostPortalOpen: boolean,
	isFetchingPosts: boolean
	isFetchingUsers: boolean
};

const initialState: RootState = {
	posts: [],
	users: [],
	isPostPortalOpen: false,
	isFetchingPosts: false,
	isFetchingUsers: false
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
			localStorage.setItem("posts", JSON.stringify(action.posts));

			return {
				...state,
				posts: action.posts
			};
		}
		default:
			return state;
	}
};
