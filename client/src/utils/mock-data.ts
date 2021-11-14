import { MockData } from "./interface";

export const mockData: MockData = {
	users: [
		{
			"id": "1",
			"name": "Leanne Graham",
			"email": "Sincere@april.biz",
			"posts": ["1", "2"],
			"likes": ["1", "3"],
			"avatar": "https://www.svgrepo.com/show/52358/superhero.svg"
		},
		{
			"id": "2",
			"name": "Ervin Howell",
			"email": "Shanna@melissa.tv",
			"posts": ["3", "4"],
			"likes": ["2", "3"],
			"avatar": "https://www.svgrepo.com/show/66244/superhero.svg"
		}
	],
	posts: [
		{
			"id":"1",
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"content": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			"createdDate": 1636921501000,
			"likes": ["1"],
			"author": "1",
			"tags":["react", "node"],
			"mainImage":"https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
		},
		{
			"id": "2",
			"title": "qui est esse",
			"content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
			"createdDate": 1636921501000,
			"likes": ["2"],
			"author": "2",
			"tags":["vue", "php"],
			"mainImage":"https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
		},
		{
			"id": "3",
			"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
			"content": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
			"createdDate": 1636921501000,
			"likes": ["1", "2"],
			"author": "2",
			"tags":["docker", "kubernetes"],
			"mainImage":"https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		},
		{
			"id": "4",
			"title": "eum et est occaecati",
			"content": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
			"createdDate": 1636921501000,
			"likes": [],
			"author": "2",
			"tags": ["react", "vue"],
			"mainImage":"https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
		},
	]
};
