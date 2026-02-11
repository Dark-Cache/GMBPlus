import React from "react";
import "./About.css";


import Team from "../Team/Team";
import Journey from "../Journey/Journey";

const AboutCompany = () => {
  return (
    

    <section className="about-company">

      {/* <Journey /> */}

      {/* HERO */}
      <div className="about-hero">
        <h1>Delivering Industrial, Technical & Property Solutions</h1>
      </div>

      {/* INTRO */}
      <div className="about-intro">
        <h2>Who We Are</h2>
        <p>
          We are a diversified business company delivering high-quality
          industrial chemicals, facilities management services, IT solutions,
          and property & estate management. Our operations are built on
          efficiency, safety, and long-term partnerships.
        </p>
      </div>

      {/* STORY SECTIONS */}
      <Journey />
      <Team />

    </section>
  );
};

export default AboutCompany;
