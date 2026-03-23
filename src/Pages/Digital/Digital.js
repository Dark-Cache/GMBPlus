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
  {icon: <GrHostMaintenance />,
    title: "IT Support & Maintenance",
    desc: "Reliable technical support to keep your systems running smoothly.",
  },
];

const Digital = () => {
  return (
    <section className="digital">
      {/* TOP TEXT */}
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

      {/* IMAGE GRID */}
      <div className="digital-grid">
        <div className="digital-img">
          <img src={hero1} alt="team" />
        </div>

        <div className="digital-card">
          <p>Satisfied Customers</p>
          <h2>200k+</h2>

          <div className="avatars">
            <span><img src={avatar1} alt="avatar" /></span>
            <span><img src={avatar2} alt="avatar" /></span>
            <span><img src={avatar1} alt="avatar" /></span>
            <span className="plus">+</span>
          </div>
        </div>

        <div className="digital-img">
          <img src={hero2} alt="meeting" />
        </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div className="hire">
        <div className="hire-header">
          <div>
            <h2>Comprehensive Solutions, All in One Place</h2>
          </div>

          <p className="hire-desc">
            From cloud infrastructure and cybersecurity to custom software and
            IT consulting. We deliver end-to-end technology services tailored to
            your business needs.
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
    </section>
  );
};

export default Digital;