
 #  Library App Documentation
Overview
This document provides a comprehensive guide for the development and deployment of a small library application using Node.js (Express) for the backend and ReactJS for the frontend. The application aims to create a secure environment for managing books through JWT authentication and role-based access control.

Table of Contents
Setting Up the Project

Dependencies
Project Structure
Web Interface

Login Screen
Displaying Books
Filtering and Sorting
Time-based Book Filtering
Book Management APIs

Authentication and Authorization
CRUD Operations
Supplementary Endpoints
User Permissions

Roles
Permissions
Technical Implementation

MongoDB Integration
Environment Property for Connection
UI Validations

1. Setting Up the Project
Dependencies
Ensure the following dependencies are installed:

Node.js
Express
ReactJS
MongoDB
JSON Web Tokens (JWT)
Other necessary packages (body-parser, mongoose, etc.)
Project Structure
Create a project structure with separate folders for the frontend and backend. Consider the following structure:
/library-app
|-- /frontend
|   |-- /src
|   |   |-- /components
|   |   |-- /pages
|   |   |-- /services
|   |   |-- ...
|   |-- package.json
|-- /backend
|   |-- /routes
|   |-- /models
|   |-- /middlewares
|   |-- server.js
|   |-- package.json
|-- .env
2. Web Interface
Login Screen
Create a simple login screen using ReactJS with input fields for username and password. Implement authentication through JWT.

Displaying Books
Design a user-friendly interface to display all books in a tabular format. Implement filtering and sorting options for ease of use.

Time-based Book Filtering
Include an option to view books created within the last 10 minutes and those created beyond that timeframe.

3. Book Management APIs
Authentication and Authorization
Implement JWT authentication for securing APIs. Create roles such as "CREATOR" and "VIEW_ALL" for role-based access control.

CRUD Operations
Create API endpoints /books and /books/delete for users with the "CREATOR" role to perform CRUD operations. The /books endpoint allows users with the "VIEW_ALL" role to view all books.

Supplementary Endpoints
Implement additional endpoints /books?old=1 and /books?new=1 to display books created beyond 10 minutes and within the last 10 minutes, respectively.

4. User Permissions
Roles
Define two roles: "CREATOR" and "VIEW_ALL". Users can have multiple roles for flexible access.

Permissions
Specify that "CREATOR" role users can perform all CRUD operations, while "VIEW_ALL" role users can only view books.

5. Technical Implementation
MongoDB Integration
Utilize a MongoDB collection for storing book information. Store MongoDB connection information in an environment property for flexibility.

Environment Property for Connection
Store MongoDB connection information in a separate .env file for easy configuration.

UI Validations
Implement basic UI validations to enhance the user experience, providing feedback on input errors.

