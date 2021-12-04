import { getPosts, getUsers, setIsFetchingPosts, setIsFetchingUsers } from "./actions";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
import { AnyAction } from "redux";
import axios, { AxiosResponse } from "axios";

export const fetchPosts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch): Promise<void> => {
		dispatch(setIsFetchingPosts(true));
		const response: AxiosResponse = await axios.get('http://localhost:4000/posts');
		dispatch(getPosts(response.data));
		dispatch(setIsFetchingPosts(false));
	};
};

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch): Promise<void> => {
		dispatch(setIsFetchingUsers(true));
		const response: AxiosResponse = await axios.get('http://localhost:4000/users');
		dispatch(getUsers(response.data));
		dispatch(setIsFetchingUsers(false));
	};
};
