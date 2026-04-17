# inventory-management-system

Inventory Management System for Small Businesses (MERN Stack Project)

Team Work Distribution (5 Members)
👨‍💻 1. Ashutosh (Project Lead + Core Backend + Deployment)

Why: You already understand the whole system structure.

Responsibilities:

Backend setup (server.js, .env)
Database connection → config/db.js
JWT handling → utils/generateToken.js
Middleware:
authMiddleware.js
errorMiddleware.js
roleMiddleware.js
Deployment:
Backend → Render
Frontend → Vercel
Final integration + debugging

👉 Basically: You own the backbone of the system

👨‍💻 2. Ashish (Authentication System - Full Stack)

Responsibilities:

Backend:
authController.js
authRoutes.js
User.js model
Frontend:
Login.js
Register.js
AuthContext.js
ProtectedRoute.js
Services:
authServices.js

👉 Handles:

Login / Register
JWT flow
Route protection

👨‍💻 3. Chandrashekhar (Product + Inventory Management)

Responsibilities:

Backend:
productController.js
productRoutes.js
Product.js
Frontend:
AddProduct.js
EditProduct.js
InventoryList.js
Services:
productServices.js

👉 Handles:

CRUD operations
Inventory display
Stock updates
