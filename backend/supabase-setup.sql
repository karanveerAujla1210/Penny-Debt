-- Supabase Table Creation Script for Penny Debt CRM

-- Email OTPs table
CREATE TABLE IF NOT EXISTS email_otps (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  otp VARCHAR(6) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Verified emails table
CREATE TABLE IF NOT EXISTS verified_emails (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  verified_at TIMESTAMP DEFAULT NOW()
);

-- Debt applications table
CREATE TABLE IF NOT EXISTS debt_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  total_debt DECIMAL(12,2) NOT NULL,
  monthly_income DECIMAL(12,2) NOT NULL,
  loan_type VARCHAR(50) NOT NULL,
  employment_status VARCHAR(50) NOT NULL,
  city VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  message TEXT,
  source VARCHAR(50) DEFAULT 'website',
  lead_type VARCHAR(50) DEFAULT 'debt_relief',
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lead activities table
CREATE TABLE IF NOT EXISTS lead_activities (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER NOT NULL,
  lead_type VARCHAR(50) NOT NULL,
  activity_type VARCHAR(50) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Career applications table
CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  resume_filename VARCHAR(255) NOT NULL,
  resume_path VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  mobile VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE email_otps ENABLE ROW LEVEL SECURITY;
ALTER TABLE verified_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE debt_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access
CREATE POLICY "Service role can manage email_otps" ON email_otps FOR ALL USING (true);
CREATE POLICY "Service role can manage verified_emails" ON verified_emails FOR ALL USING (true);
CREATE POLICY "Service role can manage debt_applications" ON debt_applications FOR ALL USING (true);
CREATE POLICY "Service role can manage lead_activities" ON lead_activities FOR ALL USING (true);
CREATE POLICY "Service role can manage career_applications" ON career_applications FOR ALL USING (true);
CREATE POLICY "Service role can manage customers" ON customers FOR ALL USING (true);