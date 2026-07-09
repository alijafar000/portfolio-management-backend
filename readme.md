# 🚀 Portfolio Management Backend API

A production-ready **Portfolio Management Backend API** built with **Node.js, Express.js, MongoDB, and JWT Authentication**. This project was developed during my **Backend Development Internship at Codiora** and enhanced over **5 weeks** by implementing authentication, CRUD operations, image upload, role-based authorization, API documentation, validation, logging, and other backend best practices.

---

# 📌 Project Overview

The Portfolio Management Backend API allows users to create and manage their professional portfolio.

Users can:

* Register & Login securely
* Manage Portfolio Information
* Manage Skills
* Manage Projects
* Upload Profile & Project Images
* Search, Filter & Paginate Projects
* View Dashboard Statistics
* Track User Activities
* Access Admin Routes (Role Based)
* Test APIs using Swagger Documentation

---

# 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* Multer
* Express Validator
* Swagger (OpenAPI)
* Winston Logger

---

# 📂 Folder Structure

```text
portfolio-management-backend
│
├── Controllers
├── Docs
├── Middleware
├── Models
├── Routes
├── Utils
├── uploads
├── logs
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

# ✨ Features

## 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Role-Based Authorization
* Profile Image Upload

---

## 📁 Portfolio Management

* Create Portfolio
* Get Portfolio
* Update Portfolio

---

## 💻 Project Management

* Add Project
* Get All Projects
* Get Project By ID
* Update Project
* Delete Project
* Upload Project Image
* Search Projects
* Filter Projects
* Pagination

---

## 🛠 Skill Management

* Add Skill
* Get All Skills
* Update Skill
* Delete Skill

---

## 📊 Dashboard

* Total Projects
* Total Skills
* Portfolio Status
* Activity Summary

---

## 📜 Activity Log

* User Login Activity
* Project Added
* Project Updated
* Project Deleted
* Skill Added
* Skill Updated
* Skill Deleted

---

## 👨‍💼 Admin Features

* Admin Dashboard
* Role Based Authorization

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Role-Based Access
* Express Validator
* Centralized Error Handling

---

## 📄 API Documentation

Interactive API documentation using Swagger UI.

```
http://localhost:2000/api-docs
```

---

# 📌 Complete API Endpoints

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/user/register |
| POST   | /api/user/login    |

---

## User

| Method | Endpoint                 |
| ------ | ------------------------ |
| PUT    | /api/user/upload-profile |

---

## Portfolio

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/portfolio/new |
| GET    | /api/portfolio     |
| PUT    | /api/portfolio     |

---

## Projects

| Method | Endpoint                    |
| ------ | --------------------------- |
| POST   | /api/project/new            |
| GET    | /api/project                |
| GET    | /api/project/:id            |
| PUT    | /api/project/:id            |
| DELETE | /api/project/:id            |
| PUT    | /api/project/upload-image/:id|
| GET    | /api/project/search         |
| GET    | /api/project?page=1&limit=5 |

---

## Skills

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | /api/skill/new        |
| GET    | /api/skill            |
| PUT    | /api/skill/:id        |
| DELETE | /api/skill/:id        |

---

## Dashboard

| Method | Endpoint             |
| ------ | --------------       |
| GET    | /api/dashboard/stats |

---

## Activity

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /api/activity |

---

## Admin

| Method | Endpoint             |
| ------ | -------------------- |
| GET    | /api/admin/dashboard |

---

# 📌 Validation

Implemented using **Express Validator**

Validation includes:

* Required Fields
* Email Validation
* Password Length Validation
* Input Validation
* Invalid Request Handling

---

# 📌 Logging System

Implemented using **Winston Logger**

Logs include:

* Server Start
* MongoDB Connection
* User Registration
* User Login
* Project CRUD Operations
* Skill CRUD Operations
* Portfolio Updates
* Profile Image Upload
* Project Image Upload
* Error Logs

---

# 📌 Search & Filtering

Supported Features

* Search by Project Name
* Search by Category
* Search by Technology
* Filter by Status
* Filter by Category
* Filter by Technology

---

# 📌 Pagination

Supports pagination for project listing.

Example:

```
GET /api/project?page=1&limit=5
```

---

# 📌 Authentication

Protected APIs require JWT Token.

Authorization Header

```
Bearer <your_jwt_token>
```

---

# 📌 Environment Variables

Create a `.env` file

```env
PORT=2000

MONGO_URI=your_mongodb_connection_string

JWT=your_secret_key
```

---

# ⚙ Installation

Clone Repository

```bash
git clone https://github.com/alijafar000/portfolio-management-backend.git
```

Install Dependencies

```bash
npm install
```

Run Server

```bash
npm run dev
```


---

# 🎯 Internship Progress

### ✅ Week 1

* User Authentication
* JWT Authentication
* Portfolio CRUD
* Skill CRUD
* Project CRUD
* MongoDB Integration

---

### ✅ Week 2

* Dashboard API
* Search API
* Filtering
* Pagination
* Better Project Structure
* GitHub Documentation

---

### ✅ Week 3

* Role-Based Authorization
* Image Upload using Multer
* Activity Logging
* Security Improvements
* Enhanced CRUD Operations

---

### ✅ Week 4

* Express Validator
* Advanced Search
* Centralized Error Handling
* Swagger Documentation
* API Testing using Swagger

---

### ✅ Week 5

* Advanced Validation
* Winston Logging System
* Environment Configuration
* Production Ready API Structure
* Backend Testing
* Deployment Ready Configuration

---

# 👨‍💻 Author

**Jafar Ali**

B.Tech CSE (3rd Year)

Jagannath University Jaipur

GitHub: https://github.com/alijafar000

LinkedIn: https://www.linkedin.com/in/jafar-ali-397826293

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub.
