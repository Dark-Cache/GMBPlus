import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./Footer.css";


import logo from "../../Assets/whitelogo.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* TOP CTA */}
      <div className="footer-cta-bar">
        <h2>Connect With GBMPlus. <br ></br> 
        Your Business Solutions.</h2>

         <Link to="/quote" className="footer-cta-btn">
           Get a Quote <span><FaPlus /></span>
          </Link>


      </div>

      <div className="footer-divider" />

      {/* MAIN FOOTER */}
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="GBMPlus Logo" />
          <p>
            We deliver integrated industrial, technical, and property solutions
            designed to support businesses, institutions, and estates with
            efficiency, safety, and innovation.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/chemical">Industrial Chemicals</Link></li>
              <li><Link to="/facility">Facilities Management</Link></li>
              <li><Link to="/it">IT Solutions</Link></li>
              <li><Link to="/property">Property Management</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Head Office</li>
              <li>Lagos, Nigeria</li>
              <li>info@gbmplus.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Dark_Cache. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
