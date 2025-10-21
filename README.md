# Expense Management Full-Stack App

A full-stack mobile application built using React Native (Expo) for the frontend and Node.js + Express for the backend. The project demonstrates end-to-end mobile app development, including API integration, state management, authentication, and CRUD operations.

## Features

- **User Authentication**: Register and login with secure JWT-based authentication
- **Expense Management**: Full CRUD operations (Create, Read, Update, Delete) for expenses
- **Category-based Organization**: Organize expenses by categories (Food, Transportation, Entertainment, etc.)
- **Real-time Updates**: Refresh to get the latest expenses
- **Responsive UI**: Clean and intuitive mobile interface built with React Native
- **State Management**: Context API for global state management
- **API Integration**: RESTful API integration between frontend and backend

## Tech Stack

### Frontend
- **React Native** with Expo
- **React Navigation** for navigation
- **Axios** for API calls
- **AsyncStorage** for local data persistence
- **Context API** for state management

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** enabled for cross-origin requests

## Project Structure

```
Expense-Management-Fullstack-app/
├── backend/
│   ├── models/
│   │   ├── User.js          # User model
│   │   └── Expense.js       # Expense model
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── expenses.js      # Expense CRUD routes
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── server.js            # Express server setup
│   ├── .env.example         # Environment variables template
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── screens/
    │   │   ├── LoginScreen.js
    │   │   ├── RegisterScreen.js
    │   │   ├── HomeScreen.js
    │   │   ├── AddExpenseScreen.js
    │   │   └── ExpenseDetailScreen.js
    │   ├── context/
    │   │   └── AuthContext.js    # Authentication context
    │   ├── services/
    │   │   ├── api.js            # Axios configuration
    │   │   └── expenseService.js # API service functions
    │   └── utils/
    │       └── config.js         # Configuration
    ├── App.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn
- Expo CLI (will be installed automatically)
- iOS Simulator / Android Emulator or Expo Go app on your phone

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables in `.env`:**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/expense-management
   JWT_SECRET=your_jwt_secret_key_here_change_in_production
   ```

   For MongoDB Atlas, use your connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-management
   ```

5. **Start MongoDB** (if using local installation):
   ```bash
   mongod
   ```

6. **Start the backend server:**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update API URL** (if needed):
   - Open `src/services/api.js`
   - Update the `API_URL` with your backend URL
   - For physical device testing, use your machine's IP address instead of localhost

4. **Start the Expo development server:**
   ```bash
   npm start
   ```

5. **Run the app:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your phone

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Expenses (Protected Routes)
- `GET /api/expenses` - Get all expenses for the logged-in user
- `GET /api/expenses/:id` - Get a single expense
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/:id` - Update an expense
- `DELETE /api/expenses/:id` - Delete an expense

## Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Add Expense**: Tap the "+" button to add a new expense
4. **View Expenses**: See all your expenses on the home screen with total amount
5. **Edit Expense**: Tap on an expense card and select "Edit"
6. **Delete Expense**: Tap on an expense card and select "Delete"
7. **Logout**: Tap the logout button in the header

## Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm start  # Starts Expo development server
```

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Expense Model
```javascript
{
  user: ObjectId (ref: User),
  title: String,
  amount: Number,
  category: String (enum),
  description: String,
  date: Date,
  createdAt: Date
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes with authentication middleware
- Secure password requirements (minimum 6 characters)

## Future Enhancements

- Data visualization with charts and graphs
- Budget tracking and alerts
- Export expenses to CSV/PDF
- Receipt image upload
- Category customization
- Multi-currency support
- Recurring expense tracking
- Dark mode support

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Nelith

## Acknowledgments

- React Native and Expo teams for excellent documentation
- MongoDB for the database solution
- Express.js for the backend framework