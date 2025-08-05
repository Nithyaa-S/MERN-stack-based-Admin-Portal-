
# Agent Task Manager - MERN Stack Project 🧑‍💼📋

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application built for managing agents, uploading CSV task lists, and distributing them equally among agents. It includes admin login, agent management, file upload, task distribution, and dashboard UI.

---

## 🚀 Features

- ✅ Admin login with JWT authentication
- ✅ Add agents with name, email, phone, and password
- ✅ Upload `.csv`, `.xls`, or `.xlsx` files with task data (First Name, Phone, Notes)
- ✅ Auto-distribute tasks equally among available agents
- ✅ View assigned tasks in a neat, responsive UI
- ✅ Protected routes and secure backend APIs

---

## 📁 Folder Structure

```
project-root/
│
├── backend/            # Express.js + MongoDB + APIs
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/        # Uploaded CSV files temporarily stored here
│   └── .env            # MongoDB URI, JWT secret
│
├── frontend/           # React.js client
│   ├── pages/          # Login, Dashboard, Agents, Upload, Tasks
│   ├── components/     # Reusable components (if any)
│   └── .env            # VITE or REACT app environment variables
│
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, JWT, Multer, XLSX
- **Database**: MongoDB Atlas / Local MongoDB

---

## 🔐 Environment Variables

### `backend/.env`

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Do not expose this file publicly.

---

## 🧪 How to Run the Project

### 📦 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/agent-task-manager.git
cd agent-task-manager
```

### 🔧 Step 2: Setup Backend

```bash
cd backend
npm install
npm run dev
```

> Make sure to create a `.env` file as shown above

### 💻 Step 3: Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### ✅ Step 4: Admin Login

Use the default admin credentials (if seeded), or create one manually in the DB:

```
- **Email:** admin@example.com  
- **Password:** admin123
```

---

## 📌 Notes

- Works best with 5 agents (tasks are distributed equally)
- Auto CSV parsing with `.csv`, `.xls`, `.xlsx`
- Responsive Tailwind UI for clean presentation
- Error handling and form validations included
