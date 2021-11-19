export interface User {
	id: string,
	name: string,
	email: string;
	posts: Post["id"][],
	likes: Post["id"][],
	avatar: string
}

//TODO implement all fields in create post form (also needed post page)
export interface Post {
	id: string,
	title: string,
	content: string,
	createdDate: number,
	likes?: User["id"][],
	author: User['id'],
	tags?: string[],
	mainImage?: string,
}

export interface MockData {
	users: User[],
	posts: Post[]
}
