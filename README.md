Book Store Management Application
A full-stack Book Store Management application built with TypeScript, Express, and MongoDB using Mongoose for data modeling. This modular, scalable application allows users to manage books and orders efficiently, with features like CRUD operations, inventory management, and revenue calculation.

Features
Books Management
Create a Book: Add a new book to the inventory with detailed information, including title, author, price, category, and more.
Get All Books: Fetch a list of all books with the ability to search by title, author, or category using query parameters.
Get a Book by ID: Retrieve details of a specific book by its unique ID.
Update a Book: Update details like price, quantity, and availability for a specific book.
Delete a Book: Remove a book from the inventory.
Orders Management
Place an Order: Create a new order by specifying the product, quantity, and total price. Automatically updates inventory stock.
Inventory Management: Deduct stock for ordered products and mark them as out of stock when the quantity reaches zero.
Revenue Calculation: Calculate total revenue generated from all orders using MongoDB aggregation.
Error Handling
Comprehensive error responses, including stack traces and validation errors, for debugging and API consumers.
Technologies Used
Backend: Express.js with TypeScript
Database: MongoDB with Mongoose for schema validation
Language: TypeScript
Tools: Nodemon, ESLint, Prettier
Architecture: Modular pattern for scalability and maintainability
Project Structure
css
Copy code
project/
├── src/
│   ├── features/
│   │   ├── books/
│   │   │   ├── bookModel.ts
│   │   │   ├── bookController.ts
│   │   │   ├── bookRoutes.ts
│   │   │   └── bookService.ts
│   │   ├── orders/
│   │   │   ├── orderModel.ts
│   │   │   ├── orderController.ts
│   │   │   ├── orderRoutes.ts
│   │   │   └── orderService.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
Setup Instructions
Prerequisites
Node.js (v16+)
npm or yarn
MongoDB (local or cloud-based instance)
Steps to Set Up Locally
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/book-store-management.git
cd book-store-management
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables Create a .env file in the root directory and add the following:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
Build the Project Compile the TypeScript code to JavaScript:

bash
Copy code
npm run build
Start the Server Run the server using the compiled files:

bash
Copy code
npm start
Alternatively, for development:

bash
Copy code
npm run dev
Access the API Open your browser or API client (e.g., Postman) and navigate to:

bash
Copy code
http://localhost:5000/api
API Endpoints
Books
Create a Book: POST /api/books
Get All Books: GET /api/books
Query: ?searchTerm={title|author|category}
Get a Book by ID: GET /api/books/:bookId
Update a Book: PUT /api/books/:bookId
Delete a Book: DELETE /api/books/:bookId
Orders
Place an Order: POST /api/orders
Calculate Revenue: GET /api/orders/revenue
Example Requests
1. Create a Book
Endpoint: POST /api/books
Request Body:

json
Copy code
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
2. Get All Books with Search
Endpoint: GET /api/books?searchTerm=Fiction

3. Place an Order
Endpoint: POST /api/orders
Request Body:

json
Copy code
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
