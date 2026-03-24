import React from "react";
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
    text: "The team exceeded our expectations in every way. From cloud migration to custom software, they delivered fast and secure solutions.",
    name: "Emily Carter",
    role: "CTO, NovaTech Solutions",
    img: avatar1,
  },
  {
    text: "We partnered with them to build our SaaS analytics platform and it was the best decision. Truly professional and reliable.",
    name: "Rajesh Mehra",
    role: "Founder & CEO, Finlytics",
    img: avatar2,
  },
  {
    text: "They didn’t just build us a website—they transformed our entire digital experience and improved our operations.",
    name: "Sophia Nguyen",
    role: "Operations Manager, BrightEdge",
    img: avatar1,
  },
];

const Digital = () => {
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
          <h2>200k+</h2>

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

              <div className="hire-read-more">
                <span>+</span>
                <p>Hire</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REVIEW SECTION ================= */}
      <div className="Review">
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

    </section>
  );
};

export default Digital;