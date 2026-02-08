import React from "react";
import "./Contact.css";

import heroImg from "../../Assets/About4nobg.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
// import companyLogo from "../../Assets/whitelogo.png";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-card">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-image">
            <img src={heroImg} alt="Contact" />

            {/* COMPANY LOGO OVERLAY
            <div className="contact-logo">
              <img src={companyLogo} alt="Company logo" />
            </div> */}
          </div>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon"><HiOutlineMailOpen /></span>
              <div>
                <h4>Email</h4>
                <p>hi@untitledui.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><FaPhoneAlt /></span>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><ImOffice /></span>
              <div>
                <h4>Office</h4>
                <p>100 Smith Street Collingwood VIC 3066 AU</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Get in touch</h2>
          <p className="contact-subtitle">
            Our friendly team would love to hear from you.
          </p>

          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>

            <label>
              Phone number
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </label>

            <label>
              Message
              <textarea placeholder="Leave us a message..." />
            </label>

            {/* <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">
                I agree to the friendly <span>privacy policy</span>.
              </label>
            </div> */}

            <button type="submit" className="send-btn">
              Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
