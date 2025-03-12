# User Management REST API

- Introduction

This is a simple RESTful API built using Node.js and Express for managing users. It provides basic CRUD operations, allowing users to be created, retrieved, updated, and deleted. The API uses MongoDB as the database.

`Features`

- Create a new user with name, email, and age.

- Retrieve all users.

- Retrieve a single user by ID.

- Update a user by ID.

- Delete a user by ID.

- Proper error handling for invalid input and non-existent users.

- Responses are returned in JSON format.


`Technologies Used`

- Node.js

- Express.js

- MongoDB (Mongoose as ODM)

- Postman (for testing API endpoints)


`Setup Instructions`

Prerequisites

- Ensure you have the following installed:

- Node.js (https://nodejs.org/)

- MongoDB (https://www.mongodb.com/)

- npm (comes with Node.js)

1. Install dependencies:

```
npm install
```

2. Start the server:

```
npm start
```