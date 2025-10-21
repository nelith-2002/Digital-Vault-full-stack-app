# Quick Start Guide

This guide will help you get the Expense Management app running in minutes.

## Prerequisites Checklist

- [ ] Node.js v14+ installed
- [ ] npm or yarn installed
- [ ] MongoDB installed or MongoDB Atlas account
- [ ] iOS Simulator or Android Emulator (or Expo Go app on phone)

## 5-Minute Setup

### Step 1: Clone and Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/nelith-2002/Expense-Managment-Fullstack-app.git
cd Expense-Managment-Fullstack-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies  
cd ../frontend
npm install
```

### Step 2: Configure Backend (1 minute)

```bash
# Go to backend directory
cd backend

# Copy environment file
cp .env.example .env

# Edit .env file with your settings
# For quick start with local MongoDB:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/expense-management
# JWT_SECRET=your_secret_key_here
```

### Step 3: Start MongoDB (30 seconds)

**Option A: Local MongoDB**
```bash
mongod
```

**Option B: MongoDB Atlas**
- Use your Atlas connection string in `.env`

### Step 4: Start Backend (30 seconds)

```bash
cd backend
npm start
```

You should see:
```
Connected to MongoDB
Server is running on port 5000
```

### Step 5: Start Frontend (1 minute)

```bash
# Open a new terminal
cd frontend
npm start
```

Then:
- Press `i` for iOS
- Press `a` for Android
- Scan QR with Expo Go app

## First Time Use

1. **Register**: Create your account
   - Name: Your name
   - Email: your@email.com
   - Password: minimum 6 characters

2. **Add Expense**: Click the + button
   - Title: "Coffee"
   - Amount: 5.50
   - Category: Food
   - Tap "Add Expense"

3. **Done!** You're now tracking expenses!

## Testing the API

You can test the API with curl:

```bash
# Test health check
curl http://localhost:5000

# Register a user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
```

## Troubleshooting

### Backend won't start
- Check MongoDB is running
- Check port 5000 is available
- Verify `.env` file exists

### Frontend won't connect
- Check backend is running on port 5000
- For physical device, update API_URL in `frontend/src/services/api.js` with your IP

### Can't see the app
- Check Expo Go app is installed
- Ensure phone and computer on same WiFi
- Try clearing Expo cache: `expo start -c`

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Check out [Backend API Documentation](backend/README.md)
- Explore [Frontend Documentation](frontend/README.md)

## Support

Having issues? Check:
1. All prerequisites are installed
2. MongoDB is running
3. Port 5000 is available
4. No firewall blocking connections

## Video Tutorials (Coming Soon)

- [ ] Setup walkthrough
- [ ] Adding first expense
- [ ] Deploying to production
