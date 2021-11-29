import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

const usersData = require('./users.json')
const postsData = require('./posts.json')

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config()
// @ts-ignore
const PORT: number = Number.parseInt(process.env.PORT) || 4000

try {
	app.listen(PORT, '0.0.0.0', () => {
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
		res.send(postsData)
	} catch (e: any) {
		console.log(e.message)
	}
}))


app.get('/users', ((req: Request, res: Response) => {
	console.log(`METHOD: ${req.method}, PATH: ${req.path}`)
	try {
		res.send(usersData)
	} catch (e: any) {
		console.log(e.message)
	}
}))
