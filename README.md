# Venzo Feedback Management App

A modern, full-stack feedback management application designed to streamline the collection, organization, and management of user feedback. Built with React and Node.js, this application provides an intuitive interface for users to submit feedback and administrators to track and manage requests efficiently.

## Live Demo

**Frontend:** [https://venzo-frontend.web.app/](https://venzo-frontend.web.app/)  
**Backend API:** [https://venzo-x5v3.onrender.com/api/](https://venzo-x5v3.onrender.com/api/)

## Table of Contents

<details>
<summary>Click to expand</summary>

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Quick Start](#quick-start)
5. [API Documentation](#api-documentation)
6. [Deployment](#deployment)
7. [Design & UX](#design--ux)

</details>

---

## Features

<details>
<summary>Click to expand</summary>

### Core Features
- **Feedback Submission** - Users can submit detailed feedback with title, description, and category
- **Feedback Dashboard** - Comprehensive view of all feedback items with status indicators
- **Upvoting System** - Community-driven feedback prioritization through upvotes
- **Categorization** - Organize feedback by type (Feature, Bug, UI, etc.)
- **Status Tracking** - Real-time status updates (Open, Planned, In Progress, Done)

### Bonus Features
- **Advanced Filtering** - Filter feedback by status and category
- **Smart Sorting** - Sort by most upvoted or newest submissions
- **Admin Dashboard** - Administrative interface for status management
- **Search Functionality** - Quick search through feedback items
- **Responsive Design** - Mobile-friendly interface built with Tailwind CSS

</details>

---

## Tech Stack

<details>
<summary>Click to expand</summary>

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Deployment & Hosting
- **Firebase Hosting** - Frontend deployment
- **Render.com** - Backend API hosting
- **MongoDB Atlas** - Cloud database

</details>

---

## Project Structure

<details>
<summary>Click to expand</summary>

```
Venzo/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API service functions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
│
├── Backend/                 # Node.js backend API
│   ├── models/             # Mongoose data models
│   ├── routes/             # Express route handlers
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
```

</details>

---

## Quick Start

<details>
<summary>Click to expand</summary>

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (or local MongoDB)
- **Firebase CLI** (for deployment)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Venzo
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the `/Backend` directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```
Backend will be running at `http://localhost:5001`

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

*Optional: Create a `.env` file for custom API configuration:*
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

Start the development server:
```bash
npm run dev
```
Frontend will be running at `http://localhost:5173`

</details>

---

## API Documentation

<details>
<summary>Click to expand</summary>

### Base URL
- **Development:** `http://localhost:5001/api`
- **Production:** `https://venzo-x5v3.onrender.com/api`

### Endpoints

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| `GET` | `/feedbacks` | Retrieve all feedback items | Query: `status`, `category`, `sort` |
| `GET` | `/feedbacks/:id` | Get specific feedback by ID | Path: `id` |
| `POST` | `/feedbacks` | Submit new feedback | Body: `title`, `description`, `category` |
| `PATCH` | `/feedbacks/:id/upvote` | Increment upvote count | Path: `id` |
| `PATCH` | `/feedbacks/:id/status` | Update feedback status | Path: `id`, Body: `status` |

### Example API Calls

**Submit Feedback:**
```bash
curl -X POST https://venzo-x5v3.onrender.com/api/feedbacks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Improve UI Design",
    "description": "The current interface could be more intuitive",
    "category": "UI"
  }'
```

**Upvote Feedback:**
```bash
curl -X PATCH https://venzo-x5v3.onrender.com/api/feedbacks/:id/upvote
```

</details>

---

## Deployment

<details>
<summary>Click to expand</summary>

### Frontend Deployment (Firebase)
```bash
cd Frontend
npm run build
firebase deploy
```


### Environment Variables
Ensure these variables are set in your deployment environment:
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (usually set automatically by hosting provider)

</details>

---

## Design & UX

<details>
<summary>Click to expand</summary>

- **User-Centric Design** - Intuitive interface focused on user experience
- **Mobile-First Approach** - Responsive design that works on all devices
- **Performance Optimized** - Fast loading times and smooth interactions
- **Accessibility** - Built with accessibility best practices
- **Modern UI** - Clean, professional design using Tailwind CSS

</details>

---

