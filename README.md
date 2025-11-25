# Penny Debt CRM System

Full-stack debt relief CRM application with React frontend, Node.js backend, and MongoDB database.

## Features

- 📧 Email OTP verification system
- 💼 Debt relief application processing
- 👥 Customer relationship management
- 🔐 Secure authentication and validation
- 📊 Lead tracking and management

## Tech Stack

- **Frontend**: React.js, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Email**: Nodemailer with SMTP
- **Deployment**: Vercel (Frontend) + Render (Backend) + MongoDB Atlas (Database)

## Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (local or cloud) and a connection URI
- SMTP email credentials

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd penny-debt-crm
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Configure your .env file with MongoDB connection and email credentials
# Example .env entry:
# MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
npm run dev
```

3. **Setup Frontend**
```bash
cd crm-frontend
npm install
npm start
```

4. **Database Setup**
If you're using a hosted MongoDB (Atlas) you typically do not need to import a schema file; collections are created automatically by Mongoose models. For local MongoDB, ensure the server is running and `MONGODB_URI` points to it.

## Environment Configuration

Create `backend/.env` with:
```env
# MongoDB connection string
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_app_password

# Security
JWT_SECRET=your_jwt_secret
```

## Deployment

### Frontend (Vercel)

- Deploy `crm-frontend/` directory
- Build command: `npm run build`
- Output directory: `dist` (Vite)
- Set environment variable: `VITE_API_BASE_URL` to your Render backend URL

### Backend (Render)

- Deploy from `backend/` directory via GitHub
- Environment variables: MongoDB URI, JWT secret, email config
- Free tier supports one backend instance

### Database (MongoDB Atlas)

- Create free tier cluster on MongoDB Atlas
- Whitelist Render IP addresses
- Share connection string as `MONGODB_URI` env var

See `DEPLOYMENT_FINAL.md` for detailed step-by-step instructions.

## Project Structure

```
penny-debt-crm/
├── crm-frontend/          # React application
├── backend/               # Node.js API server
├── database/              # MongoDB schema files
└── models/                # Mongoose models
```

## API Endpoints

- `POST /api/send-otp` - Send email OTP
- `POST /api/verify-otp` - Verify OTP
- `POST /api/leads/submit` - Submit debt relief application

## License

MIT License - see LICENSE file for details
