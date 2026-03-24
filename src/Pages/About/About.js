import React from "react";
import "./About.css";

// Images
import aboutImg from "../../Assets/Blogs.jpg";
import missionImg1 from "../../Assets/Deliver.jpg";

// Team Images (replace with yours)
import team1 from "../../Assets/NewCEO.jpeg";
import team2 from "../../Assets/Ade.jpeg";
import team3 from "../../Assets/Red.jpeg";
import team4 from "../../Assets/Red.jpeg";

import { TbBulb } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

import Journey from "../Journey/Journey"
import SayAbout from "../SayAbout/SayAbout";



const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about">
        <div className="about-container">

          <div className="about-text">
            <h1>
              Crafting Excellence <br /> Together
            </h1>

            <p className="about-desc">
              At GMBPlus we believe in the power of collaboration to achieve
              outstanding results. With a team of skilled professionals and a
              commitment to quality, we work hand-in-hand with our clients to
              bring their ideas to life. Together, we create spaces and solutions
              that stand the test of time.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="team" />

            <div className="about-badge">
              <div className="arrow-abt"><TbBulb /></div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="at">
        <div className="at-container">

          <p className="at-text">
            At GMBPlus we are committed to revolutionizing the Business
            industry with innovative, sustainable, and cost-effective solutions.
            With a proven track record of delivering exceptional projects, we
            combine state-of-the-art technology, <span>skilled expertise, and
            customer-centric approaches to bring visions to life.</span>
          </p>

          <div className="at-grid">
            <div className="at-box">
              <h2>150+</h2>
              <p>Complete Projects</p>
            </div>

            <div className="at-box">
              <h2>100+</h2>
              <p>Team Members</p>
            </div>

            <div className="at-box">
              <h2>200+</h2>
              <p>Client Reviews</p>
            </div>

            <div className="at-box">
              <h2>30</h2>
              <p>Winning Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="mission">
        <div className="mission-container">

          {/* LEFT IMAGES */}
          <div className="mission-images">
            <img src={missionImg1} alt="plan" className="mission-img1" />
          </div>

          {/* RIGHT TEXT */}
          <div className="mission-text">
            <h2>Our Mission</h2>

            <p>
              To provide exceptional services that exceed client expectations
              through innovation, quality craftsmanship, and a commitment to
              sustainability. We aim to build lasting relationships and create
              solutions that enhance communities.
            </p>

            <ul>
              <li><FaCheckCircle /> Fostering Sustainable Growth</li>
              <li><FaCheckCircle /> Innovating for the Future</li>
              <li><FaCheckCircle /> Customer-Centric Approach</li>
              <li><FaCheckCircle /> Building Stronger Communities</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
<section className="vision">
  <div className="vision-container">

    {/* LEFT TEXT */}
    <div className="vision-text">
      <h2>Our Vision</h2>

      <p>
        At GMBPlus, our vision is to redefine the future through innovation,
        sustainability, and excellence. We aim to create solutions that not only
        inspire but also contribute to the well-being of communities and the
        environment.
      </p>

      <ul>
        <li><FaCheckCircle /> Inspiring Modern Innovation</li>
        <li><FaCheckCircle /> Pioneering Sustainable Solutions</li>
        <li><FaCheckCircle /> Empowering Communities Through Technology</li>
        <li><FaCheckCircle /> Leading the Future of Business Solutions</li>
      </ul>
    </div>

    {/* RIGHT IMAGES */}
    <div className="vision-images">
      <img src={missionImg1} alt="vision1" className="vision-img1" />
    </div>

     </div>
    </section>

      <Journey />
    
     <section className="Exe">
        <div className="Exe-container">

          <div className="Exe-header">
            <div>
              <h2>Crafting Excellence as a <span>Team</span> </h2>
              <p>
                Our success is built on the dedication and expertise of our team,
                working together to deliver innovative ideas and excellence.
              </p>
            </div>

          </div>

          <div className="Exe-grid">

            <div className="Exe-card">
              <img src={team1} alt="" />
              <h3> Mr Olayinka Yusuf </h3>
              <p> Managing Director </p>
            </div>

            <div className="Exe-card">
              <img src={team2} alt="" />
              <h3> Mr Adeola Yusuf </h3>
              <p> Operational Data Manager </p>
            </div>

            <div className="Exe-card">
              <img src={team3} alt="" />
              <h3> Mrs. Adebukola Eichie </h3>
              <p> Account manager </p>
            </div>

            <div className="Exe-card">
              <img src={team4} alt="" />
              <h3>Mrs. Damilola </h3>
              <p> Director of Facility Management </p>
            </div>

          </div>

        </div>
      </section>

      <SayAbout />

    </>
  );
};

export default About;