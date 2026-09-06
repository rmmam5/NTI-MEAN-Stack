

#  MEAN Stack Web Application

Welcome to the **MEAN Stack Web Application**!  
This project is a full-stack web application built using the **M**ongoDB, **E**xpress.js, **A**ngular, and **N**ode.js stack.

The application provides a complete client-server architecture with authentication, authorization, CRUD operations, input validation, error handling, and a responsive user interface.

---

##  Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | Angular | Responsive Single Page Application |
| **Backend** | Node.js | Server-side JavaScript runtime |
| **Backend Framework** | Express.js | RESTful API development |
| **Database** | MongoDB | NoSQL database |
| **ODM** | Mongoose | MongoDB object modeling |
| **Authentication** | JWT | Secure user authentication |
| **Password Security** | bcrypt | Password hashing |
| **API Testing** | Postman | API development and testing |

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- User Logout
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes

### 🛡️ Authorization
- Role-Based Access Control
- Different permissions based on user roles
- Protected resources and endpoints

### 📦 CRUD Operations
- Create new records
- Read existing records
- Update records
- Delete records

### ✅ Validation
- Frontend input validation
- Backend input validation
- Required field validation
- Data type validation
- Meaningful validation error messages

### ⚠️ Error Handling
- Centralized error handling
- Proper HTTP status codes
- Meaningful error responses
- Handling invalid requests
- Handling server errors

### 🎨 Responsive UI
- Responsive Angular interface
- User-friendly forms
- Loading states
- Success and error messages
- Clean and organized UI

---

## 🏗️ Project Structure

```text
MEAN-STACK-PROJECT/
│
├── frontend/
│   └── Angular Application
│       ├── components/
│       ├── services/
│       ├── models/
│       ├── guards/
│       ├── interceptors/
│       └── pages/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── validators/
│   ├── config/
│   └── server.js
│
├── README.md
└── .gitignore