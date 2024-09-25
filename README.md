# E-Library-Management-app

This project provides the backend API for a E-Library-Management-app
The API uses Node.js, Express.js, JWT for authentication, and MongoDB as the database.

Features :-
User Authentication: JWT-based authentication for user registration and login.
CRUD Operations for Recipes:
Create, Read, Update, and Delete recipes.
MongoDB Database: books and user data stored with proper schema design.

Error Handling: Proper error handling for this E-Library-Management-app

Prerequisites:-
create a .env file for environment variables with jwt or mongodb etc.

Installation :-
Install dependencies like npm i express mongoose jwt cookie-parser jsonwebtoken bcrypt.
The server should now be running at http://localhost:8000.

API Endpoints :-

Register a new user :- POST route ---  http://localhost:8000/User/signup
Login user :- Create POST Route  ---   http://localhost:8000/User/login
Bokks CRUD Endpoints:-

Create a books :-  create a POST route --    http://localhost:8000/books/create
Requires JWT token in the Authorization header.

Get All books :-  create GET Route  ---     http://localhost:8000/books/AllBook.

Get a books by ID :- create GET Route ---    http://localhost:8000/books/SingleBook/:id.

Update a books :- create Patch / Put Route --  http://localhost:8000/books/updateBook/:id.

Delete a books :- create Delete Route ---    http://localhost:8000/books/DelteBook/:id.

Borrow Book  :-  create a borrow route ---     http://localhost:8000/books/:id/borrow.

return route  :-  create a return route ----   http://localhost:8000/books/:id/return.

Error Handling :-
400: Invalid or malformed request.
401: Unauthorized access (missing or invalid JWT token).
404: Resource not found (e.g., recipe or user).
500: Internal server error.
