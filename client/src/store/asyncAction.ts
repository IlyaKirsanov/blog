import { Post, Statuses } from './../utils/interface';
import { createPost, CREATE_POST, getPosts, getUsers, GET_POSTS, GET_USERS, setAsyncActionStatus, setIsFetchingPosts, setIsFetchingUsers, setIsSendingData } from "./actions";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
import { AnyAction } from "redux";
import axios, { AxiosResponse } from "axios";

export const fetchPosts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch): Promise<void> => {
		dispatch(setIsFetchingPosts(true));
		try {
			const response: AxiosResponse = await axios.get('http://localhost:4000/posts');
			if (response.status === 200) {
				dispatch(setAsyncActionStatus(GET_POSTS, Statuses.Succes));
				dispatch(getPosts(response.data));
			}
		} catch {
			dispatch(setAsyncActionStatus(GET_POSTS, Statuses.Fail));
		}
		dispatch(setIsFetchingPosts(false));
	};
};

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch): Promise<void> => {
		dispatch(setIsFetchingUsers(true));

		try {
			const response: AxiosResponse = await axios.get('http://localhost:4000/users');
			if (response.status === 200) {
				dispatch(setAsyncActionStatus(GET_USERS, Statuses.Succes));
				dispatch(getUsers(response.data));
			}
		} catch {
			dispatch(setAsyncActionStatus(GET_USERS, Statuses.Fail));
		}
		dispatch(setIsFetchingUsers(false));
	};
};


export const sendPost = (post: Post): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch): Promise<void> => {
		dispatch(setIsSendingData(true));
		try {
			const response: AxiosResponse = await axios.post('http://localhost:4000/post', post);
			if (response.status === 200) {
				dispatch(setAsyncActionStatus(CREATE_POST, Statuses.Succes));
				dispatch(createPost(post));
			}
		} catch {
			dispatch(setAsyncActionStatus(CREATE_POST, Statuses.Fail));
		}
		dispatch(setIsSendingData(false));
	};
};
