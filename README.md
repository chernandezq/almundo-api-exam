# AlMundo Api Rest 
Almundo api rest for exam mobile developer

# Stack
Install dependences, this project created with nodejs, express and mongodb

- Nodejs: [Node](https://nodejs.org/es/)
- Mongodb: [Mongodb](https://www.mongodb.com/)

# Run project

Clone project
> **git clone [the project]**

Install dependences
>  **npm install**

Run develop
> **npm run dev** <br> Note: The project have nodemon the changes in files are automatic reload

Run test

> **npm run test** <br/> Note: The test make with mocha and chai

# Available Routes

> **/api/hotels** (GET) Get all hotels <br> **/api/hotels/:id** (GET) Get info hotel by id <br> **/api/hotels** (POST) Create a new hotel <br> **/api/hotels/:id** (DELETE) Delete hotel by id

# Creation hotel
> name: String <br>
	stars: Number <br>
	images: [
		{
			title: String,
			description: String,
			source: String,
		},
	] <br>
	price: Number <br>
	comments: [
		{
			user: String,
			comment: String,
			stars: Number,
		}
	]  <br>
	latitude: Number <br>
	longitude: Number <br>
	address: String <br>
  
[Url Api demo](https://almundo-exam.herokuapp.com/)
