import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


import logo from "../../Assets/nobackwhitelogo.png";
import Talk from "../../Pages/Talk/Talk";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* TOP CTA */}
      {/* <div className="footer-cta-bar">
        <h2>Connect With GBMPlus. <br ></br> 
        Your Business Solutions.</h2>

         <Link to="/quote" className="footer-cta-btn">
           Get a Quote <span><FaPlus /></span>
          </Link>


      </div> */}

      <Talk />

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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/work">Work Done</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/chemical">Industrial Chemicals</Link></li>
              <li><Link to="/facility">Facilities Management</Link></li>
              <li><Link to="/digital">Digital Solutions</Link></li>
              <li><Link to="/property">Property Management</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <h5>Head Office:</h5>
              <li>Block 10, Suite 8, Odua International Market,
                Ikorodu Road, Ojota, Lagos, Nigeria.
              </li>
              <h5>Warehouse / Depot:</h5>
              <li> 398, Ikorodu Road, Ojota, Lagos. Nigeria.
              </li>
              <h5>Email:</h5>
              <li> info@gmbplus.com <br /> gmbplusng@outlook.com</li>
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
