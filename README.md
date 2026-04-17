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

👨‍💻 4. Aryan (Sales + Reports Module)

Responsibilities:

Backend:
salesController.js
reportController.js
salesRoutes.js
reportRoutes.js
Sale.js
Frontend:
Sales.js
Reports.js
Services:
salesServices.js
reportServices.js

👉 Handles:

Sales entry
Analytics / reports
Business logic
👨‍💻 5. Chaman (Frontend UI/UX + Layout + Alerts)

Responsibilities:

Components:
Navbar.js
Sidebar.js
Layout.js
LowStockAlert.js
Styling:
styles/Dashboard.css
index.css
App Structure:
App.js
Routing setup

👉 Handles:

UI design
Responsiveness
User experience
🧠 Smart Collaboration Plan
🔁 Integration Flow
Ashutosh sets backend base
Ashish connects auth frontend ↔ backend
Chandrashekhar builds inventory module
Aryan adds analytics
Chaman makes everything look clean
