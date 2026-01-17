# 📚 BookVerse - MERN Stack Book Store Application

A full-stack web application for browsing and managing books, built with the MERN stack. Users can explore books, create accounts, and manage their reading collections.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## ✨ Features

- 📖 Browse books by categories (Fiction, Programming, Philosophy, etc.)
- 🔐 User authentication (Login/Signup)
- 📱 Responsive design with dark/light theme toggle
- 🔍 Search functionality
- 📄 About and Contact pages
- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 📊 Book management system
- 🌙 Dark mode support
- 📚 Sample book data seeding

## 🛠️ Tech Stack

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - Toast notifications
- **React Slick** - Carousel component
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server auto-restart

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **MongoDB** (v5.0.0 or higher) or MongoDB Atlas account

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sonu12426/BookVerse.git
   cd BookVerse
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

## 🌍 Environment Variables

Create a `.env` file in the `Backend` directory with the following variables:

```env
PORT=4001
MongoDBURI=mongodb://localhost:27017/bookStore
```

For production, replace the MongoDB URI with your MongoDB Atlas connection string:
```env
MongoDBURI=mongodb+srv://username:password@cluster.mongodb.net/bookStore
```

## 🚀 Running the Application

### Development Mode

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Seed the Database** (Optional - adds sample books)
   ```bash
   cd Backend
   npm run seed
   ```

3. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   # Server runs on http://localhost:4001
   ```

4. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   # Application runs on http://localhost:5173
   ```

### Production Build

1. **Build the Frontend**
   ```bash
   cd Frontend
   npm run build
   ```

2. **Start the Backend in Production**
   ```bash
   cd Backend
   npm start
   ```

## 🔌 API Endpoints

### Books
- `GET /book` - Get all books
- `POST /book` - Create a new book

### Users
- `POST /user/signup` - User registration
- `POST /user/login` - User login

## 📁 Project Structure

```
BookVerse/
├── Backend/
│   ├── controller/
│   │   ├── book.controller.js
│   │   └── user.controller.js
│   ├── model/
│   │   ├── book.model.js
│   │   └── user.model.js
│   ├── route/
│   │   ├── book.route.js
│   │   └── user.route.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── seedBooks.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── Cards.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Course.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Freebook.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Signup.jsx
│   │   ├── context/
│   │   │   └── AuthProvider.jsx
│   │   ├── courses/
│   │   │   └── Courses.jsx
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 👨‍💻 Author

**Sonu Kumar**
- GitHub: [@Sonu12426](https://github.com/Sonu12426)

---

⭐ **If you found this project helpful, please give it a star!** ⭐