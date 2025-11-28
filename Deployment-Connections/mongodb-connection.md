# MongoDB Atlas Connection

## Connection String Format
```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

## Environment Variable
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pennydebt?retryWrites=true&w=majority
```

## Test Connection
```bash
cd backend
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('✅ MongoDB Connected')).catch(err => console.error('❌ Error:', err.message));"
```

## Collections Used
- users
- leads
- customers
- applications
- careers
- contacts
- testimonials
- services
- faqs
- blogs
- otps
