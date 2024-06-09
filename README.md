# E-Commerce Backend Project

This is a simple e-commerce backend project built using Node.js and Express.js. The project uses MongoDB as the database and Zod for schema validation. The backend allows for creating, updating, retrieving, and deleting products, as well as creating and retrieving orders.

## Features

- **Products**
  - Create a product
  - Update a product
  - Get a product
  - Delete a product
- **Orders**
  - Create an order
  - Get an order

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Zod**: TypeScript-first schema declaration and validation library.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/webdmamun/e-commerce-server.git
   cd e-commerce-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm run start:dev
   ```

   The server will start on `http://localhost:8000`.
