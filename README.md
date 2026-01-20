# Express.js REST API Project

This project is a clean and modular REST API built with **Express.js** and a refactored folder structure following best practices.
It includes routing, controllers, services, middleware, logging, and MongoDB integration using Mongoose.

---

## Features

* Modular Express app structure
* MongoDB connection using Mongoose
* Service layer for business logic
* Controller layer for HTTP handling
* Authentication middleware (dummy version)
* Custom logger middleware
* Centralized routing (`/api`)
* User CRUD example (in-memory store)

---

## Project Structure

```
src/
│── app.js
│── server.js
│── config/
│   └── db.js
│── controllers/
│   └── user.controller.js
│── middleware/
│   └── auth.middleware.js
│── routes/
│   ├── index.js
│   └── user.routes.js
│── services/
│   └── user.service.js
│── utils/
│   └── logger.js
```

---

## Installation

### 1. Clone Project

```
git clone <your-repo-url>
cd project-folder
```

### 2. Install Dependencies

```
npm install
```

### 3. Create `.env` File

```
MONGO_URI=mongodb://localhost:27017
PORT=5000
```

---

## Running the Server

### Development Mode

```
npm run dev
```

### Production Mode

```
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## API Endpoints

### 1. Get All Users

**GET** `/api/users`

Headers:

```
Authorization: token
```

Response:

```json
{
  "success": true,
  "data": [...]
}
```

---

### 2. Create User

**POST** `/api/users`

Headers:

```
Authorization: token
```

Body:

```json
{
  "name": "User Name",
  "email": "user@example.com"
}
```

Response:

```json
{
  "success": true,
  "data": { ... }
}
```

---

## Middlewares

### 1. Authentication

`src/middleware/auth.middleware.js`

* Checks if `Authorization` header exists.
* If empty → returns 401.

### 2. Logger

`src/utils/logger.js`

Logs every request:

```
[LOG] GET /api/users
```

---

## MongoDB Connection

`src/config/db.js` connects to:

```
process.env.MONGO_URI
```

Database name:

```
express_app
```

---

## Notes

* Current user service uses **in-memory array**.
  For production, replace it with Mongoose models.

---

