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
- **Deployment**: Ready for Vercel/Netlify (Frontend) + Railway/Heroku (Backend)

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

### Frontend (Vercel/Netlify)
- Build command: `npm run build`
- Output directory: `build`
- Environment variables: API endpoint

### Backend (Railway/Heroku)
- Deploy from `backend/` directory
- Add environment variables
-- Connect MongoDB database

## Project Structure

```
penny-debt-crm/
├── crm-frontend/          # React application
├── backend/               # Node.js API server
├── database/              # SQL schema files
└── docs/                  # Documentation
```

## API Endpoints

- `POST /api/send-otp` - Send email OTP
- `POST /api/verify-otp` - Verify OTP
- `POST /api/leads/submit` - Submit debt relief application

## License

MIT License - see LICENSE file for details