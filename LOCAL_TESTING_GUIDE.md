# How to Test Locally Before Deploying

## 1. Build Frontend
```bash
cd frontend
npm install
npm run build
```
Check if `frontend/build` folder was created with:
- index.html
- static/css/ folder
- static/js/ folder

## 2. Start Backend with Serve Frontend
```bash
cd backend
npm install
npm start
```

## 3. Open in Browser
Go to: `http://localhost:5000`

Expected:
- ✅ Full React UI with styles (not plain HTML)
- ✅ All buttons, forms, inputs are styled
- ✅ Can navigate pages without 404 errors
- ✅ Page refresh works (no 404)

## 4. Test API Directly
```bash
curl http://localhost:5000/api/v1/auth/login
# Should return API response, not HTML
```

## 5. Check Network Tab
Open DevTools (F12) → Network tab:
- ✅ index.html returns 200
- ✅ static/css/main.*.css returns 200 (not 404)
- ✅ static/js/main.*.js returns 200 (not 404)
- ✅ API calls to /api/v1/* return proper JSON

## Troubleshooting

**Q: Still showing plain HTML?**
- A: Frontend build failed. Check if `frontend/build` folder exists
- Run: `cd frontend && npm run build && ls build/`

**Q: CSS files returning 404?**
- A: Check buildPath in server.js points to correct location
- Verify: `frontend/build/static/css/` exists

**Q: API calls failing?**
- A: Check if backend routes are registered before wildcard route
- Order matters:
  1. CORS middleware
  2. JSON middleware
  3. API routes (/api/v1/*)
  4. Static files
  5. Wildcard route (last)

**Q: Getting "Cannot GET /" errors?**
- A: Wildcard route might not be executing
- Verify: `app.get("*", (req, res) => {...})` is after static middleware

## Ready to Deploy?
If all tests pass locally, you're ready:
```bash
git add .
git commit -m "Fix full-stack deployment - serve React from Express"
git push origin main
# Deploy on Render using render.yaml
```