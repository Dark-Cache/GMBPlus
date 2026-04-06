import React, { useState } from "react";
import "./Digital.css";

// Import your images
import hero1 from "../../Assets/Digital1.jpg";
import hero2 from "../../Assets/Digital3.jpg";

// avatar
import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

// icon
import { MdCloudySnowing } from "react-icons/md";
import { FaTableColumns } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdAppShortcut } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { MdCloudSync } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { GrHostMaintenance } from "react-icons/gr";

const services = [
  {
    icon: <MdCloudySnowing />,
    title: "IT Consulting Services",
    desc: "Proper guidance to align your technology stack with long-term business objectives.",
  },
  {
    icon: <FaTableColumns />,
    title: "Data Analytics Solutions",
    desc: "Transform raw data into actionable insights that drive smarter decisions.",
  },
  {
    icon: <FaCode />,
    title: "Website Development Service",
    desc: "Responsive, user-centric websites built with modern technologies.",
  },
  {
    icon: <MdAppShortcut />,
    title: "Mobile App Development",
    desc: "High-performance mobile applications for Android and iOS platforms.",
  },
  {
    icon: <FiGift />,
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces and seamless user experiences.",
  },
  {
    icon: <MdCloudSync />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure to optimize performance and cost.",
  },
  {
    icon: <MdOutlineSettingsSuggest />,
    title: "Cybersecurity Services",
    desc: "Protect your systems and data with advanced security solutions.",
  },
  {
    icon: <GrCloudSoftware />,
    title: "Software Development",
    desc: "Custom software tailored to your unique business needs.",
  },
  {
    icon: <GrHostMaintenance />,
    title: "IT Support & Maintenance",
    desc: "Reliable technical support to keep your systems running smoothly.",
  },
];

const reviews = [
  {
    text: "This company delivers top-notch digital solutions, helping businesses streamline operations and scale efficiently with modern technology.",
    name: "Emily Carter",
    role: "CTO, NovaTech Solutions",
    img: avatar1,
  },
  {
    text: "We relied on their digital expertise to modernize our systems, and the results were outstanding. Their solutions are innovative, scalable, and tailored to business needs.",
    name: "Rajesh Mehra",
    role: "Founder & CEO, Finlytics",
    img: avatar2,
  },
  {
    text: "From web development to automation, their digital solutions significantly improved our business processes and online presence.",
    name: "Sophia Nguyen",
    role: "Operations Manager, BrightEdge",
    img: avatar1,
  },
];

const Digital = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h2>{selectedService}</h2>

            <form className="modal-form">
              {/* Hidden service field (for Formspree) */}
              <input type="hidden" name="service" value={selectedService} />

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name/Full Name</label>
                  <input type="text" placeholder="Company Name/Full Name" required />
                </div>

                {/* <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" required />
                </div> */}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter Email.." required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Number.." />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="modal-submit">
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