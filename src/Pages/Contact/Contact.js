import React, { useState } from "react";
import "./Contact.css";

import heroImg from "../../Assets/About4nobg.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";

const Contact = () => {
  /* =========================
     FORM STATE
  ========================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =========================
     HANDLE CHANGE
  ========================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     VALIDATION
  ========================= */
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.message;

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleNewMessage = () => {
    setSubmitted(false);
  };

  return (
    <section className="contact-page">
      <div className="contact-card">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-image">
            <img src={heroImg} alt="Contact" />
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

          {submitted ? (
            <div className="success-message">
                  Thank you! Your message has been sent successfully.
              <button onClick={handleNewMessage} className="new-message-btn">
                New Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            {/* NEW SELECT OPTION */}
            <label>
              Service Needed
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option> Request a Visit </option>
                <option> Order for Chemicals </option>
                <option> Office Cleaning </option>
                <option> Home Cleaning </option>
                <option> Deep Cleaning </option>
                <option> Facility Management </option>
                <option> Staffing </option>
                <option> Property Supervision </option>
                <option> Rental service </option>
                <option> Hardware/ Software supply </option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="send-btn"
              disabled={!isFormValid}
            >
              Send message
            </button>
          </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
