import React from "react";
import "./About.css";

// About Images
import aboutOne from "../../Assets/HC1.jpg";
import aboutTwo from "../../Assets/HC2.jpg";
import aboutThree from "../../Assets/AboutGroup.jpg";

//Core Values Icons
import IntIcon from "../../Assets/puzzle-pieces.gif";
import InoIcon from "../../Assets/innovation.gif";
import ExeIcon from "../../Assets/trophy.gif";
import CollaIcon from "../../Assets/collaboration.gif";

const About = () => {
  return (
    <>
    <section className="about-hero">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-tag">ABOUT US</span>

          <h1>
            Where innovation meets
            <br />
            opportunity
          </h1>

          <p>
            We deliver integrated solutions across Industrial Chemicals,
            Facility Management, Business & Digital Solutions, and Property &
            Estate Management, helping organizations operate efficiently,
            grow sustainably, and achieve lasting success.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card large-card">
            <img src={aboutOne} alt="Team Member" />
          </div>

          <div className="about-card stat-card orange-card">
            <h2>4</h2>
            <p>Core Service Divisions</p>
          </div>

          <div className="about-card right-card">
            <img src={aboutTwo} alt="Business Professional" />
          </div>

          <div className="about-card middle-card">
            <img src={aboutThree} alt="Business Team" />
          </div>

          <div className="about-card stat-card dark-card">
            <h2>100%</h2>
            <p>Client-Focused Solutions</p>
          </div>
        </div>
      </div>
    </section>


    <section className="about-story">
  <div className="about-story-container">

    <div className="about-story-top">

      <div className="about-story-left">
        <h2>
          Delivering <span> excellence </span>
          <br />
          across multiple industries
        </h2>
      </div>

      <div className="about-story-right">
        <p>
          What began as a vision to provide dependable business support has
          evolved into a diversified company delivering solutions across
          Industrial Chemicals, Facility Management, Business & Digital
          Solutions, and Property & Estate Management.
        </p>

        <p>
          We are committed to helping organizations, property owners, and
          communities operate more efficiently through innovative services,
          professional expertise, and customer-focused solutions. Our mission
          is to create value, improve operational performance, and build
          lasting partnerships through excellence and integrity.
        </p>
      </div>

    </div>

    <div className="about-stats">

      <div className="about-stat-item">
        <h3>4</h3>
        <p>Core Service Divisions</p>
      </div>

      <div className="about-divider"></div>

      <div className="about-stat-item">
        <h3>100%</h3>
        <p>Client-Focused Solutions</p>
      </div>

      <div className="about-divider"></div>

      <div className="about-stat-item">
        <h3>24/7</h3>
        <p>Dedicated Support</p>
      </div>

      <div className="about-divider"></div>

      <div className="about-stat-item">
        <h3>5+</h3>
        <p>Years of Excellence</p>
      </div>

    </div>

  </div>
</section>


{/* ==========================
    CORE VALUES SECTION
========================== */}

<section className="core-values">
  <div className="core-values-container">

    <div className="core-values-header">
      <h2>Our core values</h2>

      <p>
        We are guided by principles that drive excellence,
        innovation, professionalism, and long-term relationships
        with our clients and partners.
      </p>
    </div>

    <div className="core-values-grid">

      <div className="value-card">
        <img src={IntIcon} alt="Team Member" />
        <h3>Integrity</h3>
        <p>
          We conduct business with honesty, transparency,
          and accountability in every project we undertake.
        </p>
      </div>

      <div className="value-card">
        <img src={InoIcon} alt="Team Member" />
        <h3>Innovation</h3>
        <p>
          We continuously seek smarter solutions that improve
          efficiency and create lasting value for our clients.
        </p>
      </div>

      <div className="value-card">
        <img src={ExeIcon} alt="Team Member" />
        <h3>Excellence</h3>
        <p>
          We are committed to delivering quality services that
          exceed expectations across all our divisions.
        </p>
      </div>

      <div className="value-card">
        <img src={CollaIcon} alt="Team Member" />
        <h3>Collaboration</h3>
        <p>
          We build strong partnerships through teamwork,
          trust, and mutual respect.
        </p>
      </div>

    </div>

  </div>
</section>

    </>
  );
};

export default About;