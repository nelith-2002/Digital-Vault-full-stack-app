# API Testing Examples

## Using cURL

### Health Check
```bash
curl http://localhost:5000
```

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

Expected Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get All Expenses
```bash
# Replace YOUR_TOKEN with the token from login/register
curl -X GET http://localhost:5000/api/expenses \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Create Expense
```bash
curl -X POST http://localhost:5000/api/expenses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Grocery Shopping",
    "amount": 150.50,
    "category": "Food",
    "description": "Weekly groceries from supermarket",
    "date": "2024-01-15T10:00:00Z"
  }'
```

### Get Single Expense
```bash
# Replace EXPENSE_ID with actual expense ID
curl -X GET http://localhost:5000/api/expenses/EXPENSE_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Update Expense
```bash
curl -X PUT http://localhost:5000/api/expenses/EXPENSE_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Updated Grocery Shopping",
    "amount": 175.00,
    "category": "Food",
    "description": "Updated description"
  }'
```

### Delete Expense
```bash
curl -X DELETE http://localhost:5000/api/expenses/EXPENSE_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Using HTTPie (Alternative to cURL)

Install HTTPie:
```bash
brew install httpie  # macOS
apt install httpie   # Ubuntu/Debian
```

### Register
```bash
http POST http://localhost:5000/api/auth/register \
  name="John Doe" \
  email="john@example.com" \
  password="password123"
```

### Login
```bash
http POST http://localhost:5000/api/auth/login \
  email="john@example.com" \
  password="password123"
```

### Get Expenses
```bash
http GET http://localhost:5000/api/expenses \
  Authorization:"Bearer YOUR_TOKEN"
```

### Create Expense
```bash
http POST http://localhost:5000/api/expenses \
  Authorization:"Bearer YOUR_TOKEN" \
  title="Lunch" \
  amount:=25.50 \
  category="Food" \
  description="Business lunch"
```

## Postman Collection

Import this JSON into Postman:

```json
{
  "info": {
    "name": "Expense Management API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000",
      "type": "string"
    },
    {
      "key": "token",
      "value": "",
      "type": "string"
    }
  ],
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Register",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
            },
            "url": "{{baseUrl}}/api/auth/register"
          }
        },
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
            },
            "url": "{{baseUrl}}/api/auth/login"
          }
        }
      ]
    },
    {
      "name": "Expenses",
      "item": [
        {
          "name": "Get All Expenses",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "url": "{{baseUrl}}/api/expenses"
          }
        },
        {
          "name": "Create Expense",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"title\": \"Grocery Shopping\",\n  \"amount\": 150.50,\n  \"category\": \"Food\",\n  \"description\": \"Weekly groceries\"\n}"
            },
            "url": "{{baseUrl}}/api/expenses"
          }
        },
        {
          "name": "Get Single Expense",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "url": "{{baseUrl}}/api/expenses/:id"
          }
        },
        {
          "name": "Update Expense",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"title\": \"Updated Title\",\n  \"amount\": 200.00,\n  \"category\": \"Food\"\n}"
            },
            "url": "{{baseUrl}}/api/expenses/:id"
          }
        },
        {
          "name": "Delete Expense",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "url": "{{baseUrl}}/api/expenses/:id"
          }
        }
      ]
    }
  ]
}
```

## Testing Workflow

1. **Register a user** and save the token
2. **Use the token** for all subsequent requests
3. **Create expenses** with different categories
4. **Update and delete** to test all CRUD operations
5. **Test error cases** (invalid data, unauthorized access)

## Common Test Cases

### Test Invalid Registration
```bash
# Missing required fields
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### Test Duplicate Email
```bash
# Try registering with same email twice
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "existing@example.com",
    "password": "test123"
  }'
```

### Test Invalid Login
```bash
# Wrong password
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "wrongpassword"
  }'
```

### Test Unauthorized Access
```bash
# Try accessing expenses without token
curl -X GET http://localhost:5000/api/expenses
```

### Test Invalid Token
```bash
# Use invalid/expired token
curl -X GET http://localhost:5000/api/expenses \
  -H "Authorization: Bearer invalid_token_here"
```

## Expected Status Codes

- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (not owner of resource)
- `404` - Not Found
- `500` - Internal Server Error
