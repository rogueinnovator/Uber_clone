# User Routes - Backend API

This documentation provides an overview of the user routes available in the backend API. These routes enable user registration, login, and logout functionality, leveraging modern tools like **Express**, **express-validator**, **jsonwebtoken**, and **bcryptjs**.

---

## Table of Contents

1. [Installation](#installation)
2. [Dependencies](#dependencies)
3. [Available Routes](#available-routes)
   - [User Registration](#user-registration)
   - [User Login](#user-login)
   - [User Logout](#user-logout)
4. [Example Requests](#example-requests)
   - [Register User](#register-user)
   - [Login User](#login-user)
5. [Notes](#notes)
6. [License](#license)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables in a `.env` file:**

   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   SECRET_KEY=<your-jwt-secret-key>
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

---

## Dependencies

The following dependencies are used:

- **express**: Web framework for handling routing.
- **express-validator**: Middleware for input validation and sanitization.
- **jsonwebtoken**: For generating and verifying JWTs (JSON Web Tokens).
- **bcryptjs**: For hashing and verifying passwords.

Install these dependencies using:

```bash
npm install express express-validator jsonwebtoken bcryptjs
```

---

## Available Routes

### 1. **User Registration**

- **Endpoint:** `POST /users/register`
- **Description:** Registers a new user by validating input fields and encrypting the password.
- **Validation Rules:**
  - `email`: Must be a valid email.
  - `fullname.firstname`: Must be at least 3 characters long.
  - `password`: Must be at least 6 characters long.

---

### 2. **User Login**

- **Endpoint:** `POST /users/login`
- **Description:** Logs in an existing user by verifying credentials and generating a JWT.
- **Validation Rules:**
  - `email`: Must be a valid email.

---

### 3. **User Logout**

- **Endpoint:** `GET /users/logout`
- **Description:** Logs out the current user and invalidates the session.

---

## Example Requests

### Register User

**Request:**

```json
POST /users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

**Response:**

- **Success (201):**

  ```json
  {
    "token": "your-generated-jwt-token",
    "user": {
      "_id": "60d21b4667d0d8992e610c85",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- **Validation Errors (400):**

  ```json
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
  ```

---

### Login User

**Request:**

```json
POST /users/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- **Success (200):**

  ```json
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
  ```

- **Validation Errors (400):**

  ```json
  {
    "errors": [
      {
        "msg": "Email is not valid",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

- **Authentication Error (401):**

  ```json
  {
    "message": "Invalid credentials"
  }
  ```

---

### Logout User

**Request:**

```json
GET /users/logout
```

**Response:**

- **Success (200):**

  ```json
  {
    "message": "User logged out successfully"
  }
  ```

---

## Notes

1. **Password Hashing:** User passwords are securely hashed using **bcryptjs** before being saved to the database.
2. **Token Generation:** A JWT is generated upon successful registration and login for authentication purposes.
3. **Error Handling:** All input validation errors and authentication failures return appropriate HTTP status codes with descriptive error messages.

---

### Register Captain

**Endpoint**: `POST /captains/register`  
**Description**: Registers a new captain after validating input fields, hashing the password, and saving the data to the database.

#### Request

**Headers**:

```plaintext
Content-Type: application/json
```

**Body**:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Validation Rules

- `fullname.firstname`: Must be at least 3 characters long.
- `fullname.lastname`: Must be at least 3 characters long.
- `email`: Must be a valid email address.
- `password`: Must not be empty.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.plate`: Must be at least 3 characters long.
- `vehicle.capacity`: Must be a number greater than or equal to 1.
- `vehicle.vehicleType`: Must be one of the following: `car`, `motorcycle`, `auto`.

#### Responses

**Success (201 Created)**:

```json
{
  "captain": {
    "_id": "64b6f99fc1234567890abcde",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "your-generated-jwt-token"
}
```

**Validation Errors (400 Bad Request)**:

```json
{
  "errors": [
    { "msg": "Email is not valid", "param": "email", "location": "body" },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must not be empty",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Conflict (400 Conflict)**:

```json
{
  "message": "A captain with this email already exist"
}
```

## Login Captain

**Endpoint:** `POST /captains/login`  
**Description:** Logs in an existing captain by verifying credentials and generating a JWT.

### Request

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Responses

#### Success (200 OK):

```json
{
  "token": "your-generated-jwt-token",
  "captain": {
    "_id": "64b6f99fc1234567890abcde",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "active",
    "vehicle": {
      "color": "red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Validation Errors (400 Bad Request):

```json
{
  "errors": [
    { "msg": "Email is not valid", "param": "email", "location": "body" },
    {
      "msg": "Password must not be empty",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error (401 Unauthorized):

```json
{
  "message": "Invalid credentials"
}
```

---

## Logout Captain

**Endpoint:** `GET /captains/logout`  
**Description:** Logs out the current captain and invalidates the session.

### Request

**Headers:**

```
Authorization: Bearer <your-jwt-token>
```

### Responses

#### Success (200 OK):

```json
{
  "message": "Captain logged out successfully"
}

#### Notes

- **Password Hashing**: Passwords are hashed using `bcryptjs` before saving them in the database.
- **Token Generation**: A JWT token is generated upon successful registration for authentication purposes.
- **Error Handling**: Validation errors and business logic errors are returned with appropriate status codes and descriptive messages.

## License

This project is licensed under the [MIT License](LICENSE).

---
```
