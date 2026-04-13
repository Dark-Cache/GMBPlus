import React, { useState, useEffect } from "react";
import "./Digital.css";

// Import your images
import hero1 from "../../Assets/Digital1.jpg";
import hero2 from "../../Assets/Digital3.jpg";

// avatar
import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

// icon
import itIcon from "../../Assets/laptop.gif"
import dataIcon from "../../Assets/analysis.gif"
import cloudIcon from "../../Assets/cloud.gif"
import uiIcon from "../../Assets/responsive-design.gif"
import supportIcon from "../../Assets/repair.gif"
import mobileIcon from "../../Assets/mobile-phone.gif"
import cyberIcon from "../../Assets/data-safety.gif"
import webIcon from "../../Assets/responsive.gif"
import softIcon from "../../Assets/software.gif"


const services = [
  {
    icon: <img src={itIcon} alt="icon" className="cus-icon" />,
    title: "IT Consulting Services",
    desc: "Proper guidance to align your technology stack with long-term business objectives.",
  },
  {
    icon: <img src={dataIcon} alt="icon" className="cus-icon" />,
    title: "Data Analytics Solutions",
    desc: "Transform raw data into actionable insights that drive smarter decisions.",
  },
  {
    icon: <img src={webIcon} alt="icon" className="cus-icon" />,
    title: "Website Development Service",
    desc: "Responsive, user-centric websites built with modern technologies.",
  },
  {
    icon: <img src={mobileIcon} alt="icon" className="cus-icon" />,
    title: "Mobile App Development",
    desc: "High-performance mobile applications for Android and iOS platforms.",
  },
  {
    icon: <img src={uiIcon} alt="icon" className="cus-icon" />,
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces and seamless user experiences.",
  },
  {
    icon: <img src={cloudIcon} alt="icon" className="cus-icon" />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure to optimize performance and cost.",
  },
  {
    icon: <img src={cyberIcon} alt="icon" className="cus-icon" />,
    title: "Cybersecurity Services",
    desc: "Protect your systems and data with advanced security solutions.",
  },
  {
    icon: <img src={softIcon} alt="icon" className="cus-icon" />,
    title: "Software Development",
    desc: "Custom software tailored to your unique business needs.",
  },
  {
    icon: <img src={supportIcon} alt="icon" className="cus-icon" />,
    title: "IT Support & Maintenance",
    desc: "Reliable technical support to keep your systems running smoothly.",
  },
];

const reviews = [
  {
    text: "This company delivers top-notch digital solutions, helping businesses streamline operations and scale efficiently with modern technology.",
    name: "Joy Olajide",
    role: "CTO, NovaTech Solutions",
    img: avatar1,
  },
  {
    text: "We relied on their digital expertise to modernize our systems, and the results were outstanding. Their solutions are innovative, scalable, and tailored to business needs.",
    name: "Emmanuel Okoro",
    role: "Founder & CEO, Finlytics",
    img: avatar2,
  },
  {
    text: "From web development to automation, their digital solutions significantly improved our business processes and online presence.",
    name: "Sofia Adeoye",
    role: "Operations Manager, BrightEdge",
    img: avatar1,
  },
];

const Digital = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
  if (isModalOpen) {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }

  return () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };
}, [isModalOpen]);

  return (
    <section className="digital">

      {/* TOP */}
      <div className="digital-top">
        <div className="digital-header">
          <h1>
            Powering Progress <br />
            Through Technology
          </h1>

          <div className="digital-right">
            <p>
              We provide innovative, secure, and scalable IT services that solve
              real problems and drive measurable results.
            </p>

            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="digital-grid">
        <div className="digital-img">
          <img src={hero1} alt="" />
        </div>

        <div className="digital-card">
          <p>Satisfied Customers</p>
          <h2>5k+</h2>

          <div className="avatars">
            <span><img src={avatar1} alt="" /></span>
            <span><img src={avatar2} alt="" /></span>
            <span><img src={avatar1} alt="" /></span>
            <span className="plus">+</span>
          </div>
        </div>

        <div className="digital-img">
          <img src={hero2} alt="" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="hire">
        <div className="hire-header">
          <h2>Comprehensive Solutions, All in One Place</h2>

          <p className="hire-desc">
            From cloud infrastructure to cybersecurity and software development.
          </p>
        </div>

        <div className="hire-grid">
          {services.map((item, index) => (
            <div className="hire-card" key={index}>
              <div className="hire-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div
                className="hire-read-more"
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedService(item.title);
                }}
              >
                <span>+</span>
                <p>Hire</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEW */}
      <div className="review">
        <div className="review-header">
          <div>
            <h2>Reviews That Speak Volumes</h2>
          </div>

          <p>
            Hear how our technology solutions have transformed operations,
            improved efficiency, and driven growth.
          </p>
        </div>

        <div className="review-grid">
          {reviews.map((item, index) => (
            <div className="review-card" key={index}>
              <div className="stars">★★★★★</div>

              <p className="review-text">"{item.text}"</p>

              <div className="review-user">
                <img src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
{isModalOpen && (
  <div
    className="digital-modal-overlay"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="digital-modal-content digital-form-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="digital-modal-close"
        onClick={() => setIsModalOpen(false)}
      >
        ✕
      </button>

      <h2>{selectedService}</h2>

      <form className="digital-modal-form">
        {/* Hidden service field */}
        <input type="hidden" name="service" value={selectedService} />

        <div className="digital-form-row">
          <div className="digital-form-group">
            <label>Company Name/Full Name</label>
            <input
              type="text"
              placeholder="Company Name/Full Name"
              required
            />
          </div>
        </div>

        <div className="digital-form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email.." required />
        </div>

        <div className="digital-form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Number.." />
        </div>

        <div className="digital-form-group">
          <label>Message</label>
          <textarea
            placeholder="Type your message..."
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="digital-modal-submit">
          Send Message
        </button>
      </form>
    </div>
  </div>
)}

    </section>
  );
};

export default Digital;