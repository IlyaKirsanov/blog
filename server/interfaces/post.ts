import { IUser } from "./user";

export interface IPost {
	id: string,
	title: string,
	content: string,
	createdDate: number,
	likes?: IUser["id"][],
	author: IUser['id'],
	tags?: string[],
	mainImage?: string,
}