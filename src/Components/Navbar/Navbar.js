import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Icon
import { FaLongArrowAltDown } from "react-icons/fa";

// Logos
import darkLogo from "../../Assets/whitelogo.png"; // Dark mode logo
import lightLogo from "../../Assets/greenlogo.png"; // Light mode logo

const serviceLinks = [
  { label: "Industrial Chemical", path: "/chemical" },
  { label: "Facilities Management", path: "/facility" },
  { label: "Digital Solutions", path: "/it" },
  { label: "Property & Estate Management", path: "/property" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <li className="has-dropdown" ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className={`dropdown-arrow ${servicesOpen ? "up" : ""}`}>< FaLongArrowAltDown className="arrow" /></span>
            </button>
            {servicesOpen && (
              <ul className="dropdown open">
                {serviceLinks.map((s) => (
                  <li key={s.path}>
                    <Link
                      to={s.path}
                      onClick={() => { setServicesOpen(false); setMenuOpen(false); }}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work Done</Link></li>
          <li><Link to="/quote" onClick={() => setMenuOpen(false)}> Brochure</Link></li>
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
