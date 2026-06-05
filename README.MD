# NoLimit Backend Engineer Internship Test

Simple REST API for managing blog posts with JWT authentication.

## Tech Stack

* Node.js
* Express.js
* Prisma ORM
* MySQL
* JWT Authentication
* Jest
* Supertest

## Features

### Authentication

* Register User
* Login User (JWT)

### Posts

* Get All Posts
* Get Post By Id
* Create Post
* Update Post
* Delete Post

### Authorization

* JWT Authentication
* Only post owners can update or delete their posts

## Project Structure

```text
src
├── config
├── controllers
├── middlewares
├── routes
├── utils
└── app.js

tests
├── auth
├── post
└── setup

prisma
└── schema.prisma
```

## Installation

Clone repository

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
DATABASE_URL="mysql://root:password@localhost:3306/nolimit_db"
JWT_SECRET="secret_key"
PORT=3000
```

Run database migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

Start application

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Posts

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/posts     | Get all posts  |
| GET    | /api/posts/:id | Get post by id |
| POST   | /api/posts     | Create post    |
| PUT    | /api/posts/:id | Update post    |
| DELETE | /api/posts/:id | Delete post    |

## Running Tests

```bash
npm test
```

Test coverage includes:

* Register User
* Login User
* Create Post
* Get All Posts
* Get Post By Id
* Update Post
* Delete Post

## Postman Collection

Import the provided Postman Collection file to test all endpoints.

## Author

Satria Ibnu Safarudin
