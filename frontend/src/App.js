import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Register() {
  return <h2>Register Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;