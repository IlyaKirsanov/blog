import { IPost } from "./post";

export interface IUser {
	id: string,
	name: string,
	email: string;
	posts: IPost["id"][],
	likes: IPost["id"][],
	avatar: string
}