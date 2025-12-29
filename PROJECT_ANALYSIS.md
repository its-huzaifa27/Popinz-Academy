# Popinz Academy - Project Structure Analysis

## 📋 Overview
This is a **full-stack web application** for a baking academy platform called "Popinz Academy". The project is split into two main directories: **Backend** (Node.js/Express API) and **popinz** (React frontend).

---

## 🎨 FRONTEND (`popinz/`)

### **Technology Stack**
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18
- **Animations**: Framer Motion 12.23.26
- **Smooth Scrolling**: Lenis 1.3.16

### **Project Structure**

```
popinz/
├── public/
│   ├── images/          # Static images (courses, blogs, products, syllabus)
│   └── videos/          # Video assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── About.jsx
│   │   ├── CakeProduct.jsx
│   │   ├── courses.jsx
│   │   ├── Faq.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Questions.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Testimonial.jsx
│   ├── pages/           # Page components (routes)
│   │   ├── HomePage.jsx
│   │   ├── AboutUs.jsx
│   │   ├── AllCourses.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Shop.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── ResetPasswordPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── AdminDashboardPage.jsx
│   │   ├── CourseContentPage.jsx
│   │   └── EnrollPage.jsx
│   ├── data/            # Static data files
│   │   ├── coursesData.js
│   │   └── productsData.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

### **Key Features**
1. **Authentication Pages**: Login, Signup, Password Reset
2. **Public Pages**: Home, About, Courses, Blog, Contact, Shop
3. **Protected Pages**: Dashboard (user), Admin Dashboard
4. **Course Management**: Course listing, enrollment, content viewing
5. **API Integration**: Communicates with backend at `http://localhost:5000`

### **API Endpoints Used**
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/forgot-password` - Password reset request
- `PUT /api/auth/reset-password/:token` - Password reset
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses/enroll` - Enroll in course
- `GET /api/users/profile` - Get user profile
- `GET /api/users` - Get all users (admin only)
- `POST /api/courses` - Create course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)

---

## ⚙️ BACKEND (`Backend/`)

### **Technology Stack**
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB (via Mongoose 9.0.2)
- **Authentication**: JWT (jsonwebtoken 9.0.3)
- **Password Hashing**: bcryptjs 3.0.3
- **Email**: Nodemailer 7.0.12
- **CORS**: Enabled for cross-origin requests

### **Project Structure**

```
Backend/
├── config/
│   └── db.js                    # MongoDB connection configuration
├── controllers/                 # Request handlers (business logic)
│   ├── authController.js        # Authentication logic
│   ├── courseController.js      # Course CRUD operations
│   └── userController.js        # User management
├── middleware/
│   └── authMiddleware.js        # JWT authentication & admin authorization
├── models/                      # Mongoose schemas
│   ├── User.js                  # User model (student/admin roles)
│   └── Course.js                # Course model with syllabus
├── routes/                       # API route definitions
│   ├── authRoutes.js            # /api/auth/* routes
│   ├── courseRoutes.js          # /api/courses/* routes
│   └── userRoutes.js            # /api/users/* routes
├── utils/
│   └── sendEmail.js             # Email utility for password reset
├── data/
│   └── courses.js               # Course seed data
├── seeder.js                    # Database seeder script
├── server.js                    # Express server entry point
└── package.json                 # Dependencies and scripts
```

### **API Routes Structure**

#### **Authentication Routes** (`/api/auth`)
- `POST /signup` - Register new user
- `POST /login` - Authenticate user (returns JWT token)
- `POST /forgot-password` - Request password reset email
- `PUT /reset-password/:resetToken` - Reset password with token

#### **Course Routes** (`/api/courses`)
- `GET /` - Get all courses (public)
- `GET /:id` - Get course by ID (public, optional auth)
- `POST /enroll` - Enroll in course (protected)
- `POST /enroll-manual` - Manual enrollment (admin only)
- `POST /` - Create course (admin only)
- `POST /:id/content` - Add course content/chapter (admin only)
- `DELETE /:id` - Delete course (admin only)

#### **User Routes** (`/api/users`)
- `GET /profile` - Get current user profile (protected)
- `GET /` - Get all users (admin only)

### **Database Models**

#### **User Model**
- Fields: `fullName`, `email`, `phone`, `password`, `role` (student/admin)
- Features: Password hashing, enrolled courses array, password reset tokens
- Methods: `matchPassword()` for authentication

#### **Course Model**
- Fields: `title`, `category`, `description`, `duration`, `pricing` (online/offline), `image`, `syllabus[]`
- Syllabus: Array of chapters with `title`, `image`, `videoUrl`, `duration`

### **Security Features**
1. **JWT Authentication**: Token-based auth for protected routes
2. **Password Hashing**: bcrypt with salt rounds
3. **Role-Based Access Control**: Admin vs Student roles
4. **Middleware Protection**: `protect` and `admin` middleware
5. **CORS**: Configured for frontend communication

### **Server Configuration**
- **Port**: 5000 (default) or from `process.env.PORT`
- **Environment Variables**: Uses `.env` file (dotenv)
- **Database**: MongoDB connection via `MONGO_URI`

---

## 🔗 Frontend-Backend Communication

### **Connection Details**
- **Backend URL**: `http://localhost:5000`
- **API Base**: `/api`
- **Authentication**: Bearer token in `Authorization` header
- **Token Storage**: Frontend stores JWT in `localStorage` as `authToken`

### **Data Flow**
1. User logs in → Frontend sends credentials → Backend validates → Returns JWT
2. Frontend stores token → Includes in subsequent API requests
3. Backend validates token → Returns protected data
4. Admin operations require both authentication AND admin role

---

## 📦 Dependencies Summary

### **Frontend Dependencies**
- React ecosystem (React, React DOM, React Router)
- Tailwind CSS for styling
- Framer Motion for animations
- Lenis for smooth scrolling

### **Backend Dependencies**
- Express.js for server framework
- Mongoose for MongoDB ODM
- JWT for authentication
- bcryptjs for password security
- Nodemailer for email functionality
- CORS for cross-origin support

---

## 🚀 Running the Project

### **Backend**
```bash
cd Backend
npm install
npm run dev    # Development with nodemon
# or
npm start      # Production
```

### **Frontend**
```bash
cd popinz
npm install
npm run dev    # Development server
npm run build  # Production build
```

---

## 📝 Notes
- Both frontend and backend use **ES Modules** (`"type": "module"`)
- Frontend uses **lazy loading** for better performance
- Backend has **optional authentication** for public course viewing
- Admin functionality is restricted via middleware
- Password reset uses email tokens with expiration

