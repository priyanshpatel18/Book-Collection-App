# Book Collection App

A simple web application for managing a collection of books.

## Overview

This project consists of a frontend and a backend for managing a collection of books. The frontend is built using React, and the backend is built with Node.js and Express. MongoDB is used as the database to store book information.

## Features

- **Create, Read, Update, and Delete (CRUD) operations:** Allows users to perform CRUD operations on books.
- **Responsive Design:** The application is designed to work seamlessly on various screen sizes.

## Project Structure

- **frontend:** Contains the React application for the user interface.
- **backend:** Contains the Node.js and Express server with MongoDB integration.
- **model:** Defines the MongoDB schema for the Book model.
- **controller:** Implements controllers for handling CRUD operations on books.
- **routes:** Defines API routes for handling book-related requests.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/book-collection-app.git
   cd book-collection-app
   ```
2. Install dependencies
    ```bash
    cd frontend
    npm install
    ```
- Install backend dependencies
    ```bash
    cd ../backend
    npm install
    ```
3. Run the Application
   ```bash
   cd backend
   npm start
   ```
    ```bash
    cd ../frontend
    npm start
    ```
4. Open the Application
   Open your browser and visit `http:3000/localhost:3000/` to access the application
