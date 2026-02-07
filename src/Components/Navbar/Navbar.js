import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Logos
import darkLogo from "../../Assets/whitelogo.png"; // Dark mode logo
import lightLogo from "../../Assets/greenlogo.png"; // Light mode logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load saved theme or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={theme === "light" ? lightLogo : darkLogo}
            alt="logo"
          />
        </Link>
      </div>

      {/* NAV LINKS */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work Done</Link></li>
          <li><Link to="/quote" onClick={() => setMenuOpen(false)}>Get A Quote</Link></li>
          <li className="mobile-contact">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* RIGHT ACTIONS */}
      <div className="nav-actions">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Desktop Contact */}
        <div className="nav-contact">
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
