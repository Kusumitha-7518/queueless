import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          Queue<span>Less</span>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#about">About</a></li>

          <li>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </li>
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;