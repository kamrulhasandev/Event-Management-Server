# 🎯 Event Management Backend

This is the backend of the Event Management Web Application built using **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**.

🔗 **Live API Base URL**:  
[https://event-management-server-ph.vercel.app/api/v1](https://event-management-server-ph.vercel.app/api/v1)

---

## 🚀 Features

- 🔐 Custom authentication (no third-party auth libraries)
- 🧾 Full CRUD operations for events
- 👥 Join event once with automatic attendee count tracking
- 🧑‍💼 User-specific "My Events" section
- 🛡 JWT-protected private routes
- ❌ Error handling for invalid credentials, duplicates, and missing fields

---

## 📬 Core API Endpoints

> All routes are prefixed with `/api/v1`

| Method | Endpoint                 | Description                        |
|--------|--------------------------|------------------------------------|
| POST   | `/users/register`         | Register new user                  |
| POST   | `/users/login`            | Login user                         |
| GET    | `/events`                | Get all events (with filters)      |
| POST   | `/events`                | Create a new event (private)       |
| PATCH  | `/events/:id`            | Update user’s own event (private)  |
| DELETE | `/events/:id`            | Delete user’s own event (private)  |
| POST   | `/events/join/:id`       | Join an event (once per user)      |
| GET    | `/my-events`             | Get all events created by user     |

---

## 🧠 Technologies Used

- Node.js + Express.js
- MongoDB + Mongoose
- TypeScript
- JWT for authentication
- bcrypt for password hashing
- CORS & dotenv

---

## 🌐 Deployment

This backend is deployed on [Vercel](https://vercel.com) as a serverless function.  
To integrate with the frontend, make sure your frontend uses the base URL: https://event-management-server-ph.vercel.app/api/v1

---

✅ Ready to be connected with the frontend via Axios or Fetch with token-based authentication.
