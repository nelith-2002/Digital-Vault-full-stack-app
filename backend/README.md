# Backend Documentation

## Overview
The backend is built with Node.js, Express, and MongoDB, providing RESTful APIs for user authentication and expense management.

## Architecture

### Models
- **User Model** (`models/User.js`): Handles user data with authentication
- **Expense Model** (`models/Expense.js`): Manages expense records

### Routes
- **Auth Routes** (`routes/auth.js`): User registration and login
- **Expense Routes** (`routes/expenses.js`): CRUD operations for expenses

### Middleware
- **Auth Middleware** (`middleware/auth.js`): JWT token verification

## API Reference

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Expense Endpoints

All expense endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer your_jwt_token_here
```

#### Get All Expenses
```
GET /api/expenses
Authorization: Bearer {token}

Response:
{
  "success": true,
  "count": 2,
  "expenses": [...]
}
```

#### Get Single Expense
```
GET /api/expenses/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "expense": {...}
}
```

#### Create Expense
```
POST /api/expenses
Authorization: Bearer {token}
Content-Type: application/json

Body:
{
  "title": "Grocery Shopping",
  "amount": 150.50,
  "category": "Food",
  "description": "Weekly groceries",
  "date": "2024-01-15T10:00:00Z"
}

Response:
{
  "success": true,
  "expense": {...}
}
```

#### Update Expense
```
PUT /api/expenses/:id
Authorization: Bearer {token}
Content-Type: application/json

Body:
{
  "title": "Updated title",
  "amount": 200.00,
  "category": "Food",
  "description": "Updated description"
}

Response:
{
  "success": true,
  "expense": {...}
}
```

#### Delete Expense
```
DELETE /api/expenses/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Expense deleted successfully"
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation error)
- `401`: Unauthorized (missing or invalid token)
- `403`: Forbidden (not authorized to access resource)
- `404`: Not Found
- `500`: Internal Server Error

Error response format:
```json
{
  "message": "Error message here",
  "error": "Detailed error (in development)"
}
```

## Environment Variables

Required environment variables:
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing

## Running Tests

Currently, no tests are implemented. To add tests, consider using:
- Jest for unit testing
- Supertest for API testing
- MongoDB Memory Server for test database

## Deployment

### Deploy to Heroku
1. Create a Heroku app
2. Add MongoDB Atlas connection string
3. Set environment variables
4. Deploy with Git

### Deploy to Other Platforms
- Railway
- Render
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Security Considerations

1. **Password Security**: Passwords are hashed using bcryptjs with salt rounds
2. **JWT Tokens**: Tokens expire after 30 days
3. **CORS**: Configure CORS for production to allow only trusted origins
4. **Environment Variables**: Never commit `.env` file to version control
5. **Input Validation**: Always validate and sanitize user input
6. **Rate Limiting**: Consider adding rate limiting for production

## Performance Tips

1. **Database Indexing**: Add indexes on frequently queried fields
2. **Caching**: Implement Redis for caching frequently accessed data
3. **Pagination**: Add pagination for large datasets
4. **Compression**: Use compression middleware for responses
5. **Logging**: Implement proper logging with Winston or Morgan
