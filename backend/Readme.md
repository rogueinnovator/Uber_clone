User Routes - Backend API

This document provides an overview of the user routes available in your backend. These routes are designed for user registration and authentication, utilizing express, express-validator, and jsonwebtoken for request handling, validation, and token generation.
Table of Contents

    Installation
    Dependencies
    Available Routes
        User Registration
    Example Requests
        Register User

Installation

    Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install

Set up environment variables in a .env file:

MONGO_URI=<your-mongodb-uri>
SECRET_KEY=<your-jwt-secret-key>

Start the server:

    npm start

Dependencies

The following dependencies are used in the user routes:

    express: Web framework for handling routing.
    express-validator: Middleware for validating and sanitizing user input.
    jsonwebtoken: For generating and verifying authentication tokens.
    bcryptjs: For hashing and comparing passwords.

Install them using:

npm install express express-validator jsonwebtoken bcryptjs

Available Routes

1. User Registration

   Endpoint: POST /users/register
   Description: Registers a new user after validating input fields and encrypting the password.
   Validation Rules:
   email: Must be a valid email.
   fullname.firstname: Must be at least 3 characters long.
   password: Must be at least 6 characters long.
   Controller Function: registerUser

Example Requests
Register User

Endpoint: POST /users/register

Request Body:

{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securepassword123"
}

Response:

{
"token": "your-generated-jwt-token",
"user": {
"\_id": "60d21b4667d0d8992e610c85",
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com"
}
}

Validation Errors:

If validation fails, the response might look like this:

{
"errors": [
{
"msg": "Email is not valid",
"param": "email",
"location": "body"
},
{
"msg": "First name must be at least 3 characters long",
"param": "fullname.firstname",
"location": "body"
},
{
"msg": "Password must be at least 6 characters long",
"param": "password",
"location": "body"
}
]
}

Notes

    Password Hashing: Passwords are hashed before being saved to the database using bcryptjs.
    Token Generation: A JWT (JSON Web Token) is generated upon successful registration for user authentication.
    Error Handling: Input validation errors are returned with appropriate error messages to help identify issues.

License

This project is licensed under the MIT License. See the LICENSE file for details.


POST /login
This endpoint logs in an existing user.

URL: /login
Method: POST
Validation:
email: Must be a valid email.
Request Body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}

Response:
Success: 200 OK
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

Validation Error: 400 Bad Request

{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    }
  ]
}

Authentication Error: 401 Unauthorized
{
  "message": "Invalid credentials"
}

Example Request

curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'

Example Response

{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}