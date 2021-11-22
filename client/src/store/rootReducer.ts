import { Post, User } from "../utils/interface";
import { Action, SET_POSTS, TOGGLE_POST_PORTAL } from "./actions";

const persistedUsers = JSON.parse(window && localStorage.getItem("users")!);
const persistedPosts = JSON.parse(window &&  localStorage.getItem("posts")!);

export type RootState = {
	posts: (Post | null)[],
	users: (User | null)[],
	isPostPortalOpen: boolean
};

const initialState: RootState = {
	posts: persistedPosts,
	users: persistedUsers,
	isPostPortalOpen: false
};

export const rootReducer = (state: RootState = initialState, action: Action): RootState => {
	switch (action.type) {
		case TOGGLE_POST_PORTAL: {
			return {
				...state,
				isPostPortalOpen: !state.isPostPortalOpen
			};
		}
		case SET_POSTS: {
			localStorage.setItem("posts",JSON.stringify(action.posts));

			return {
				...state,
				posts: action.posts
			};
		}
		default:
			return state;
	}
};
