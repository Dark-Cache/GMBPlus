import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import We from "../We/We";
import Serve from "../Serve/Serve";
import Why from "../Why/Why";
import Say from "../Say/Say";
import Talk from "../Talk/Talk";
import How from "../How/How";


const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Integrated Solutions for Industry, Technology & Real Estate.
            </h1>

            <p className="hero-subtitle">
              Helping businesses thrive with innovative digital strategies,
              creative solutions, and measurable outcomes.
            </p>

            <div className="hero-buttons">
                
                <Link to="/quote">
                  <button className="book-call-btn">Get a Quote</button>
                </Link>

                <Link to="/visit">
                  <button className="learn-more-btn">Request a Visit</button>
                </Link>

            </div>
          </div>
        </div>
      </section>

      <We />
      <How />
      <Serve />
      <Why />
      <Say />
      <Talk />
    </div>
  );
};

export default Home;
