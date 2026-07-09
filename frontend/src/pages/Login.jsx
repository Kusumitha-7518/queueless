import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    localStorage.setItem("loggedInUser", email);

    navigate("/select-role");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>

        <p>Login to continue using QueueLess</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="bottom-text">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;