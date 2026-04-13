import React, { useState } from "react";
import "./Contact.css";

import heroImg from "../../Assets/contactimage.jpg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.subject &&
    formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Get in Touch with Us</h1>
        <p>
          Have questions about our services or looking to plan your next project?
          We’re here to help! Reach out for inquiries, support, or consultation.
        </p>
      </div>

      {/* MAIN */}
      <div className="contact-wrapper">

        {/* LEFT FORM */}
        <div className="contact-form-card">
          <h2>Have Questions? We're Just a Message Away!</h2>
          <p>
            Fill out the form below, and one of our team members will get back to you shortly.
          </p>

          {submitted ? (
            <div className="success-message">
              Message sent successfully!
              <button onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Full Name/Company Name"
                  value={formData.firstName}
                  onChange={handleChange} />
              </div>

              <input
                type="email"
                name="email"
                placeholder="you@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="+234..."
                value={formData.phone}
                onChange={handleChange}
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Choose message subject</option>
                <option>Request a Visit</option>
                <option>Order for Chemicals</option>
                <option>Cleaning Services</option>
                <option>Request for Staffs</option>
                <option>Rental Services</option>
                <option>Facility Management</option>
                <option>Property Management</option>
              </select>

              <textarea
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
              />

              <button className="send-btn" disabled={!isFormValid}>
                Send Message →
              </button>

            </form>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* TOP CARD */}
          <div className="contact-hero">
            <img src={heroImg} alt="support" />
            <div className="overlay-text">
              Our experts will always help you
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="info-card">
            <HiOutlineMailOpen />
            <div>
              <h4>Email</h4>
              <p>info@gmbplus.com</p>
              <p>gmbplusng@outlook.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Call</h4>
              <p>+234 802 345 4074</p>
              <p> +234 810 370 0485 </p>
            </div>
          </div>

          <div className="info-card">
            <ImOffice />
            <div>
              <h4>Address</h4>
              <p> Block 10, Suite 8, Odua International Market, 
                <br /> Ikorodu Road, Ojota, Lagos, Nigeria. </p>
            </div>
          </div>

          <div className="info-card">
            <FaWarehouse />
            <div>
              <h4>Warehouse / Depot</h4>
              <p>398, Ikorodu Road, Ojota, Lagos. Nigeria.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;