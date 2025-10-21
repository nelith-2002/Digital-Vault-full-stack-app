# Deployment Guide

This guide covers deploying the Expense Management app to various platforms.

## Table of Contents
1. [Backend Deployment](#backend-deployment)
2. [Frontend Deployment](#frontend-deployment)
3. [Database Setup](#database-setup)
4. [Environment Configuration](#environment-configuration)

---

## Backend Deployment

### Option 1: Heroku

1. **Install Heroku CLI**
   ```bash
   brew install heroku/brew/heroku  # macOS
   # or download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create expense-manager-api
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your_mongodb_atlas_uri"
   heroku config:set JWT_SECRET="your_jwt_secret"
   heroku config:set NODE_ENV="production"
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Verify**
   ```bash
   heroku logs --tail
   heroku open
   ```

### Option 2: Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**
   ```bash
   railway login
   ```

3. **Initialize Project**
   ```bash
   cd backend
   railway init
   ```

4. **Add Environment Variables**
   - Go to Railway dashboard
   - Add MONGODB_URI, JWT_SECRET
   - Set PORT (Railway provides this automatically)

5. **Deploy**
   ```bash
   railway up
   ```

### Option 3: Render

1. **Create Account** at [render.com](https://render.com)

2. **Create New Web Service**
   - Connect your GitHub repository
   - Select `backend` directory
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Add Environment Variables**
   - MONGODB_URI
   - JWT_SECRET
   - PORT (automatically set)

4. **Deploy** - Automatic on git push

### Option 4: DigitalOcean App Platform

1. **Create Account** at DigitalOcean

2. **Create New App**
   - Connect GitHub repository
   - Select backend directory
   - Set build and run commands

3. **Configure Environment**
   - Add environment variables
   - Set up managed database (optional)

4. **Deploy**

### Option 5: AWS Elastic Beanstalk

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize**
   ```bash
   cd backend
   eb init
   ```

3. **Create Environment**
   ```bash
   eb create expense-manager-env
   ```

4. **Set Environment Variables**
   ```bash
   eb setenv MONGODB_URI="your_uri" JWT_SECRET="your_secret"
   ```

5. **Deploy**
   ```bash
   eb deploy
   ```

---

## Frontend Deployment

### Building Standalone Apps

#### For iOS (requires macOS)

1. **Configure app.json**
   ```json
   {
     "expo": {
       "name": "Expense Manager",
       "slug": "expense-manager",
       "version": "1.0.0",
       "ios": {
         "bundleIdentifier": "com.yourcompany.expensemanager",
         "buildNumber": "1.0.0"
       }
     }
   }
   ```

2. **Build**
   ```bash
   cd frontend
   eas build --platform ios
   ```

3. **Submit to App Store**
   ```bash
   eas submit --platform ios
   ```

#### For Android

1. **Configure app.json**
   ```json
   {
     "expo": {
       "android": {
         "package": "com.yourcompany.expensemanager",
         "versionCode": 1
       }
     }
   }
   ```

2. **Build APK**
   ```bash
   cd frontend
   eas build --platform android
   ```

3. **Submit to Play Store**
   ```bash
   eas submit --platform android
   ```

### Using Expo Application Services (EAS)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login**
   ```bash
   eas login
   ```

3. **Configure**
   ```bash
   cd frontend
   eas build:configure
   ```

4. **Build for Both Platforms**
   ```bash
   eas build --platform all
   ```

5. **Update OTA (Over-The-Air)**
   ```bash
   eas update --branch production
   ```

---

## Database Setup

### MongoDB Atlas (Recommended)

1. **Create Account** at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to your users
   - Create cluster

3. **Create Database User**
   - Go to Database Access
   - Add new database user
   - Save username and password

4. **Configure Network Access**
   - Go to Network Access
   - Add IP Address: `0.0.0.0/0` (all IPs) for development
   - Restrict in production

5. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

   Example:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/expense-management?retryWrites=true&w=majority
   ```

### Local MongoDB (Development)

1. **Install MongoDB**
   ```bash
   # macOS
   brew install mongodb-community

   # Ubuntu
   sudo apt install mongodb

   # Windows
   # Download from mongodb.com
   ```

2. **Start MongoDB**
   ```bash
   mongod
   ```

3. **Connection String**
   ```
   mongodb://localhost:27017/expense-management
   ```

---

## Environment Configuration

### Backend Environment Variables

Create `.env` file in backend directory:

**Development:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/expense-management
JWT_SECRET=dev_secret_key_change_in_production
NODE_ENV=development
```

**Production:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/expense-management
JWT_SECRET=super_secure_random_string_here
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

### Frontend Environment Variables

Update API URL in `frontend/src/services/api.js`:

**Development:**
```javascript
const API_URL = 'http://localhost:5000/api';
```

**Production:**
```javascript
const API_URL = 'https://your-backend-domain.com/api';
```

Or use environment variables with Expo:
```javascript
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api';
```

---

## Production Checklist

### Backend
- [ ] Set strong JWT_SECRET
- [ ] Configure CORS for specific origins
- [ ] Enable rate limiting
- [ ] Set up logging (Winston, Morgan)
- [ ] Enable compression
- [ ] Use HTTPS
- [ ] Set up monitoring (New Relic, DataDog)
- [ ] Configure error reporting (Sentry)
- [ ] Set up backups for database
- [ ] Enable database authentication
- [ ] Restrict database network access

### Frontend
- [ ] Update API URL to production backend
- [ ] Remove console.log statements
- [ ] Optimize images
- [ ] Configure app.json properly
- [ ] Set up error tracking
- [ ] Test on multiple devices
- [ ] Prepare app store assets
- [ ] Write privacy policy
- [ ] Create terms of service

### Database
- [ ] Enable authentication
- [ ] Set up regular backups
- [ ] Configure proper indexes
- [ ] Restrict network access
- [ ] Monitor performance
- [ ] Set up alerts

---

## Continuous Deployment

### GitHub Actions (Backend)

Create `.github/workflows/deploy-backend.yml`:

```yaml
name: Deploy Backend

on:
  push:
    branches: [main]
    paths:
      - 'backend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your-app-name"
          heroku_email: "your-email@example.com"
          appdir: "backend"
```

### GitHub Actions (Frontend)

Create `.github/workflows/deploy-frontend.yml`:

```yaml
name: Deploy Frontend

on:
  push:
    branches: [main]
    paths:
      - 'frontend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: cd frontend && npm install
      
      - name: Run EAS Update
        run: |
          npm install -g eas-cli
          eas update --branch production
        env:
          EXPO_TOKEN: ${{secrets.EXPO_TOKEN}}
```

---

## Monitoring

### Backend Monitoring
- Use PM2 for process management
- Set up health check endpoint
- Monitor response times
- Track error rates
- Monitor database performance

### Frontend Monitoring
- Use Expo's built-in analytics
- Set up crash reporting
- Monitor app performance
- Track user engagement

---

## Troubleshooting

### Common Issues

**Backend won't start in production:**
- Check environment variables are set
- Verify MongoDB connection string
- Check logs for errors

**Frontend can't connect to backend:**
- Verify API URL is correct
- Check CORS configuration
- Ensure backend is running

**Database connection errors:**
- Verify connection string
- Check network access settings
- Confirm user credentials

---

## Support

For deployment issues:
1. Check application logs
2. Verify environment variables
3. Test API endpoints manually
4. Check platform-specific documentation

## Resources

- [Heroku Documentation](https://devcenter.heroku.com/)
- [Railway Documentation](https://docs.railway.app/)
- [Expo EAS Documentation](https://docs.expo.dev/eas/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
