#!/bin/bash

# Build all projects
echo "🚀 Building all Penny-Debt projects..."

# Backend
echo "📦 Building backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"

# Website
echo "🌐 Building website..."
cd ../frontend/website
npm install
npm run build
echo "✅ Website built successfully"

# CRM
echo "🖥️  Building CRM..."
cd ../crm
npm install
npm run build
echo "✅ CRM built successfully"

# Mobile (optional)
# echo "📱 Building mobile..."
# cd ../../mobile
# npm install
# echo "✅ Mobile dependencies installed"

echo "🎉 All projects built successfully!"
