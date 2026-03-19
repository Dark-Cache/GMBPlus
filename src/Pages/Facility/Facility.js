import React from "react";
import "./Facility.css";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaHandsHelping,
  FaBuilding,
} from "react-icons/fa";

import cleanHero from "../../Assets/Cleaner.png";

import service1 from "../../Assets/Officeclean.jpg";
import service2 from "../../Assets/EffHome.jpg";
import service3 from "../../Assets/Glassclean.jpg";
import service4 from "../../Assets/ExpertConst.jpg";

/* WORK PROCESS IMAGES */
import work1 from "../../Assets/Tech6.jpg";
import work2 from "../../Assets/Cleanhero.jpg";
import work3 from "../../Assets/Facility.jpg";
import work4 from "../../Assets/Its.jpg";

const Facility = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="facility">
        <div className="facility-content">
          <p className="facility-tagline">
            ✨ Spotless Spaces, Stress-Free Living
          </p>

          <h1>
            Bringing Shine <br />
            & Freshness to <br />
            Every Space
          </h1>

          <p className="facility-description">
            Whether it’s a one-time deep clean or regular upkeep, we're here to
            make your home feel brand new, every single visit.
          </p>

          <Link to="/contact">
            <button className="facility-btn">
              Book Our Cleaning Today
            </button>
          </Link>

          <div className="facility-rating">
            <div className="facility-rating-text">
              ⭐⭐⭐⭐⭐ <span>5.0</span>
              <p>Rated Best Over 15.7k Reviews</p>
            </div>
          </div>
        </div>

        <div className="facility-image">
          <img src={cleanHero} alt="Cleaning Professional" />
        </div>

        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="fac-about-section">
        <div className="fac-about-container">

          <div className="fac-about-header">
            <div>
              <p className="fac-about-tag">✨ About Us</p>
              <h2>
                At GMBPlus we believe a clean space <br />
                creates a happier and healthier life.
              </h2>
            </div>

            <Link to="/about">
              <button className="fac-about-btn">
                Learn More About Us
              </button>
            </Link>
          </div>

          <div className="fac-about-stats">

            <div className="fac-stat-box">
              <h3>10+</h3>
              <h4>Years of Experience</h4>
              <p>
                Over the years, we've earned the trust of hundreds homeowners
                businesses by delivering consistent, high-quality.
              </p>
            </div>

            <div className="fac-stat-box">
              <h3>99%</h3>
              <h4>Customer Satisfaction</h4>
              <p>
                Our experienced team takes pride in every job, using safe and
                eco-friendly products to create healthier, brighter.
              </p>
            </div>

            <div className="fac-stat-box">
              <h3>10K+</h3>
              <h4>Happy Clients</h4>
              <p>
                From on-time service to exceptional attention to details, our commitment
                to excellence is reflected in satisfaction.
              </p>
            </div>

          </div>

          <div className="fac-about-cards">

            <div className="fac-about-card">
              <FaShieldAlt className="fac-card-icon" />
              <h4>Built on Trust, Powered by Service</h4>
            </div>

            <div className="fac-about-card">
              <FaHandsHelping className="fac-card-icon" />
              <h4>Making Clean Spaces Our Promise</h4>
            </div>

            <div className="fac-about-card">
              <FaBuilding className="fac-card-icon" />
              <h4>Your Trusted Cleaning Experts</h4>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CLEAN SERVICES SECTION ================= */}
      <section className="clean-section">

        <div className="clean-header">
          <p>✨ Our Cleaning Services</p>
          <h2>Professional Cleaning Solutions</h2>
        </div>

        {[ 
          {title:"Commercial & Office Cleaning",img:service1},
          {title:"Move-In / Move-Out Cleaning",img:service2},
          {title:"Window & Glass Cleaning",img:service3},
          {title:"Post-Construction Cleaning",img:service4}
        ].map((item,index)=>(
          <div className="clean-row" key={index}>

            <div className="clean-left">
              <h3>{item.title}</h3>

              <p>
                Professional cleaning service designed to keep your
                environment spotless, hygienic, and welcoming.
              </p>

              <div className="clean-tags">
                <span>#OfficeCleaning</span>
                <span>#EcoFriendlyCleaning</span>
                <span>#QualityCleaning</span>
                <span>#CleanLifestyle</span>
              </div>

              <Link to="/contact">
                <button className="clean-btn">Request</button>
              </Link>

            </div>

            <div className="clean-image">
              <img src={item.img} alt="service" />
            </div>

          </div>
        ))}

      </section>

      {/* ================= WORK PROCESS SECTION ================= */}
      <section className="do-section">

        <div className="do-container">

          <p className="do-tag">⚡ How It Work</p>

          <div className="do-left">

            <h2>
              Our Cleaning Process <br />
              Simple Steps To A <br />
              Spotless Space
            </h2>

            <div className="do-steps">
              <span className="active">01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>

            <div className="do-right">

            <div className="do-card">
              <img src={work1} alt="" />
              <h4>Book Your Cleaning</h4>
              <p>
                Schedule your service online or by phone. Choose the time, date,
                and type of cleaning that suits your need 
              </p>
            </div>

            <div className="do-card">
              <img src={work2} alt="" />
              <h4>We Arrive & Inspect</h4>
              <p>
                Our professional team arrives on time. Inspect your space, and prepare
                all the required cleaning supplies. 
              </p>
            </div>

            <div className="do-card">
              <img src={work3} alt="" />
              <h4>Deep Cleaning Begins</h4>
              <p>
                We clean every corner with care. Dusting, vacuuming, mopping, and sanitizing 
                to ensure a spotless environment.
              </p>
            </div>

            <div className="do-card">
              <img src={work4} alt="" />
              <h4>Final Check & Satisfaction</h4>
              <p>
                We perform a final walkthrough to ensure everything meets your expectation.
                Your satisfaction is our priority.
              </p>
            </div>

          </div>
            

          </div>


        </div>

      </section>

    </>
  );
};

export default Facility;