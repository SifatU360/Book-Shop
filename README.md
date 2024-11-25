# 📚 **Book Store Management Application**

🚀 A **full-stack Book Shop Management application** built with **TypeScript**, **Express**, and **MongoDB**, offering efficient management of books and orders. Features include **CRUD operations**, **inventory tracking**, and **revenue calculations**.

---

## 📝 **Features**

### 📖 Books Management
- **Create a Book**: Add books with details like title, author, price, and category.
- **Get All Books**: Fetch a list of books and search by **title, author, or category**.
- **Get a Book by ID**: Retrieve a book by its unique identifier.
- **Update a Book**: Modify book details such as price or stock quantity.
- **Delete a Book**: Remove a book from the system.

### 🛒 Orders Management
- **Place an Order**: Create orders by specifying product, quantity, and price.
- **Inventory Management**: Deduct stock and mark items as out of stock.
- **Revenue Calculation**: Aggregate total revenue using **MongoDB aggregation**.

---

## 🛠️ **Technologies Used**
- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Tools**: Nodemon, ESLint, Prettier
- **Architecture**: Modular pattern

---

## 🏗️ **Project Structure**
```plaintext
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

---

## 🚀 **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or cloud-based instance)

---

## 🛠️ **Steps to Set Up Locally**

### 1. Clone the Repository

```bash
git clone https://github.com/SifatU360/Book-Shop.git
cd Book-Shop
### 2. Install Dependencies

```bash
npm install

### 3. Set Up Environment Variables Create a .env file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore

### 4. Build the Project Compile the TypeScript code to JavaScript:

```bash
npm run build

### 5. Run the server using the compiled files:

bash
npm start

### 5. Access the API Open your browser or API client (e.g., Postman) and navigate to:

```bash
http://localhost:5000/api

### API Endpoints

```Books
Create a Book: POST /api/products
Get All Books: GET /api/products
Query: ?searchTerm={title|author|category}
Get a Book by ID: GET /api/products/:productId
Update a Book: PUT /api/products/:productId
Delete a Book: DELETE /api/products/:productId

```Orders
Place an Order: POST /api/orders
Calculate Revenue: GET /api/orders/revenue


## Example Requests

1. Create a Book
Endpoint: POST /api/books
Request Body:

```json
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

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
