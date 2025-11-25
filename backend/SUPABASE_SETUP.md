# Supabase Setup Guide

## Backend is now connected to Supabase!

### Setup Steps:

1. **Get your Supabase credentials:**
   - Go to https://supabase.com/dashboard
   - Select your project: `https://lbmrwhufxymdmuamjwor.supabase.co`
   - Go to Settings > API
   - Copy the `anon/public` key

2. **Update environment variables:**
   ```bash
   # Add to backend/.env
   SUPABASE_KEY=your_supabase_anon_key_here
   ```

3. **Create database tables:**
   - Go to Supabase Dashboard > SQL Editor
   - Run the SQL script from `supabase-setup.sql`

4. **Test the connection:**
   ```bash
   cd backend
   npm start
   ```

### What's Changed:

- ✅ Replaced MySQL with Supabase client
- ✅ Updated all routes to use Supabase queries
- ✅ Converted SQL queries to Supabase JavaScript API
- ✅ Added proper error handling
- ✅ Maintained all existing functionality

### Database Tables Created:
- `email_otps` - OTP verification
- `verified_emails` - Email verification tracking
- `debt_applications` - Lead applications
- `lead_activities` - Activity logging
- `career_applications` - Job applications
- `customers` - User accounts

### API Endpoints (unchanged):
- `POST /api/send-otp` - Send email OTP
- `POST /api/verify-otp` - Verify OTP
- `POST /api/leads/submit` - Submit debt relief application
- `GET /api/leads` - Get all applications
- `POST /api/careers` - Submit career application
- `POST /api/customers/signup` - Customer registration