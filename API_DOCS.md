# API Documentation

---

## 1. Register User

- Method: POST
- URL: /api/auth/register

### Body
{
  "name": "Aryan",
  "email": "aryan@test.com",
  "password": "1234567"
}

### Response
{
  "success": true,
  "message": "User registered successfully"
}

### Status Code
200 OK

### Status
Working fine

---

## 2. Login User

- Method: POST
- URL: /api/auth/login

### Body
{
  "email": "aryan@test.com",
  "password": "1234567"
}

### Response
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "69dce11829f0c042e70f34fa",
    "name": "Aryan",
    "email": "aryan@test.com",
    "role": "user"
  }
}

### Status Code
200 OK

### Status
Working, but not complete

### Issue
Login is successful, but token is not returned in the response.
Because of this, authenticated APIs cannot be tested properly.

---

## Issues Found

1. Login API does not return token
   - Expected: Token should be returned after successful login
   - Actual: Only user details are returned
   - Impact: Unable to test protected APIs


## 3. Get Products

- Method: GET
- URL: /api/products

### Response
[]

### Status Code
200 OK

### Status
Working fine

### Note
API is working correctly, but no products are available in the database.



## 4. Add Product

- Method: POST
- URL: /api/products/add

### Body
{
  "name": "Laptop",
  "quantity": 10,
  "price": 50000,
  "category": "Electronics"
}

### Response
Product saved to database

### Status Code
200 OK

### Status
Working fine


## 5. Update Product

- Method: PUT
- URL: /api/products/update/{id}

### Body
{
  "name": "Laptop Updated",
  "quantity": 5,
  "price": 45000,
  "category": "Electronics"
}

### Response
{
    "_id": "69dce6a429f0c042e70f34ff",
    "name": "Laptop Updated",
    "quantity": 5,
    "price": 45000,
    "category": "Electronics",
    "createdAt": "2026-04-13T12:50:44.196Z",
    "updatedAt": "2026-04-13T12:54:35.736Z",
    "__v": 0
}

### Status
Working fine

## 6. Delete Product

- Method: DELETE
- URL: /api/products/delete/{id}

### Response
Product deleted

### Status
Working fine

### Note
Used product ID: 69dce6a429f0c042e70f34ff