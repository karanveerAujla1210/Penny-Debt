# Penny Debt CRM System

Full-stack debt relief CRM application with React frontend, Node.js backend, and MongoDB database.

## 📋 Recent Updates

✅ **Complete routing structure** for Website (15 routes) and CRM (25+ routes)  
✅ **Role-based dashboards** for 18+ employee types  
✅ **6 new MongoDB models** (Employee, Case, Payment, Document, Task, Report)  
✅ **6 new API route files** with full CRUD operations  
✅ **Functional navigation components** with active link highlighting  
✅ **Comprehensive documentation** (5 new files)  

📚 **See**: `ROUTING_AND_DATABASE_SETUP.md` for complete details

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (Atlas or local)

### Installation

```bash
# Install backend
cd backend
npm install

# Install website
cd ../frontend/website
npm install

# Install CRM
cd ../crm
npm install
```

### Configuration

1. **Backend** (`backend/.env`):
```env
MONGODB_URI=your_mongodb_connection_string
SMTP_USER=your_email
SMTP_PASS=your_password
JWT_SECRET=your_secret
```

2. **Website** (`frontend/website/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

3. **CRM** (`frontend/crm/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api/crm
```

### Start Development

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Website
cd frontend/website
npm run dev

# Terminal 3 - CRM
cd frontend/crm
npm run dev
```

## 🌐 Access

- Backend: http://localhost:5000
- Website: http://localhost:5173
- CRM: http://localhost:3001

## 📁 Structure

```
Penny-Debt/
├── backend/              # Node.js + Express + MongoDB
├── frontend/
│   ├── website/          # Public website (React)
│   └── crm/              # Internal CRM (React)
└── Junk/                 # Old files (for reference)
```

## 🔌 API Routes

- Website: `/api/*`
- CRM: `/api/crm/*`

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Vite, Tailwind CSS
- **Auth**: JWT, bcryptjs
- **Email**: Nodemailer

## 📦 Deployment

- Backend → Render/Railway
- Website → Vercel
- CRM → Vercel (separate)
