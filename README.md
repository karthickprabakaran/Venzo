# Venzo Feedback Management App

A full-stack feedback management application for collecting, viewing, and managing user feedback.

---

## 📁 Folder Structure

```
/Venzo
  /Frontend   # React + Vite frontend
  /Backend    # Node.js + Express backend
```

---

## 🚀 Hosted Demo

Frontend: [[https://venzo-frontend.web.app/](https://venzo-frontend.web.app/)](https://venzo-frontend.web.app/)
Backend API: [https://venzo-x5v3.onrender.com/api/](https://venzo-x5v3.onrender.com/api/)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Deployment:** Firebase Hosting (Frontend), Render.com (Backend)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd Venzo
```

---

### 2. Backend Setup

```sh
cd Backend
npm install
```

- Create a `.env` file in `/Backend` with:
  ```
  MONGODB_URI=your_mongodb_connection_string
  PORT=5001
  ```

- Start the backend server:
  ```sh
  npm start
  ```
  The backend will run on `http://localhost:5001`.

---

### 3. Frontend Setup

```sh
cd ../Frontend
npm install
```

- (Optional) Create a `.env` file for API base URL:
  ```
  VITE_API_BASE_URL=https://venzo-x5v3.onrender.com/api/
  ```
  *(Currently, API URLs are hardcoded. For flexibility, update the code to use this variable if needed.)*

- Start the frontend in development:
  ```sh
  npm run dev
  ```

- Build for production:
  ```sh
  npm run build
  ```

---

### 4. Deploying Frontend to Firebase

- Build the frontend:
  ```sh
  npm run build
  ```
- Deploy:
  ```sh
  firebase deploy
  ```

---

## 📚 API Endpoints

- `POST   /api/feedbacks` — Submit feedback
- `GET    /api/feedbacks` — List all feedbacks
- `PATCH  /api/feedbacks/:id/upvote` — Upvote feedback
- `PATCH  /api/feedbacks/:id/status` — Update feedback status (admin)

---

## 🖼️ Screenshots

*(Add screenshots here if required by the process.)*

---

## ℹ️ Notes

- The frontend is hosted at: [https://venzo-frontend.web.app/](https://venzo-frontend.web.app/)
- The backend is hosted at: [https://venzo-x5v3.onrender.com/api/](https://venzo-x5v3.onrender.com/api/)
- For local development, update API URLs as needed.
