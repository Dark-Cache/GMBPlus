import React from "react";
// import { Link } from "react-router-dom";
import "./Services.css";


import Work from "../Work/Work";
import Say from "../Say/Say";

const Services = () => {
  return (
    <section className="services-showcase">

      {/* HEADER */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Over the past 25 years, we have supported diverse industries by
          delivering reliable, innovative, and sustainable service solutions.
        </p>
      </div>

      <Work />
      {/* <Feedback /> */}
      <Say />
      

    </section>
  );
};

export default Services;
