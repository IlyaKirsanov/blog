import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { IPost, IUser } from "./interfaces";
import mongoose from "mongoose";
import PostModel from "./models/post";
import UserModel from "./models/user";

const cors = require('cors');

dotenv.config()

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//!Connect to db
const db = `mongodb+srv://${process.env.MONGO_CREDS}@cluster0.wgqyb.mongodb.net/node-blog?retryWrites=true&w=majority`

mongoose.connect(db)
	.then(() => console.log('Connected DB'))
	.catch((error: any) => console.log(error));


// @ts-ignore
const PORT: number = Number.parseInt(process.env.PORT) || 4000

try {
	app.listen(PORT, () => {
		console.log(`App listen to port: ${process.env.PORT}`)
	})
} catch (error: any) {
	console.log(process.env.PORT)
	console.error(`Error occurred: ${error.message}`)
}

app.get('/', ((req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	try {
		res.send('Hello NodeJs server')
	} catch (e: any) {
		console.log(e.message)
	}
}))


app.get('/posts', ((req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	try {
		PostModel.find()
			.then((posts: IPost[]) => res.send(posts))
	} catch (e: any) {
		console.log(e.message)
	}
}))

app.post('/post', (async (req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	const { id, title, content, createdDate, author, mainImage, tags, likes } = req.body
	const post = new PostModel({ id, title, content, createdDate, author, mainImage, tags, likes })
	try {
		const result = await post.save()
		res.send(result)
	} catch (e: any) {
		console.log(e.message);
	}
}))


app.get('/users', ((req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	try {
		UserModel.find()
			.then((users: IUser[]) => res.send(users))
	} catch (e: any) {
		console.log(e.message)
	}
}))


app.post('/user', (async (req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	const { id, name, email, posts, likes, avatar } = req.body
	const user = new UserModel({ id, name, email, posts, likes, avatar })
	try {
		const result = await user.save()
		res.send(result)
	} catch (e: any) {
		console.log(e.message);
	}
}))