import React from "react";
import "./Property.css";

import teamImg from "../../Assets/Team.jpg";

// NEW IMAGES (make sure you have these in Assets)
import img1 from "../../Assets/House1.jpg";
import img2 from "../../Assets/House2.jpg";
import img3 from "../../Assets/House3.jpg";
import img4 from "../../Assets/House4.jpg";
import img5 from "../../Assets/House5.jpg";


import bringimg from "../../Assets/Bring.jpg";
import bringimg1 from "../../Assets/Bring1.jpg";

import { IoEyeOutline } from "react-icons/io5";
import { TbFlag } from "react-icons/tb";


// House icons
import { BsHousesFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";


const Pro = () => {
  return (
    <>

      {/* HERO SECTION */}

      {/* HERO SECTION (NEW DESIGN) */}
<section className="pro">
  <div className="pro-container">

    {/* TOP TEXT */}
    <div className="pro-header">
      <h1>
        Elevate Your Property Experience, <br />
        Simplify Estate Management
      </h1>

      <p>
        Discover a seamless world of property management services,
        smart investments, and secure real estate transactions —
        all in one place.
      </p>
    </div>

    {/* FEATURES */}
    <div className="pro-features">

      <div className="pro-feature-card">
        <h4>Custom Property Solutions</h4>
        <img src={img1} alt="property" />
        <p>
          Tailored real estate services designed to match your lifestyle,
          whether you're buying, renting, or investing.
        </p>
      </div>

      <div className="pro-feature-card">
        <h4>Secure Transactions</h4>
        <img src={img2} alt="property" />
        <p>
          We ensure safe and transparent property deals with verified
          listings and trusted legal processes.
        </p>
      </div>

      <div className="pro-feature-card">
        <h4>Smart Property Management</h4>
        <img src={img3} alt="property" />
        <p>
          Manage tenants, rent collection, and maintenance efficiently
          with our expert-driven solutions.
        </p>
      </div>

      <div className="pro-feature-card">
        <h4>Seamless Communication</h4>
        <img src={img4} alt="property" />
        <p>
          Stay connected with agents, buyers, and tenants through a
          smooth and responsive communication system.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* WHO WE ARE SECTION */}
      <section className="who">
        <div className="who-container">

          <span className="who-tag"> 💪 Who We Are</span>

          <h2 className="who-title">
            We’re a trusted real estate agency helping people
            find their dream homes and investments.
            <span className="who-light">
              {" "}Helping you find home, effortlessly.
            </span>
          </h2>

        </div>
      </section>


      {/* THIRD SECTION */}
      <section className="abt">

        <div className="abt-container">

          {/* LEFT SIDE */}
          <div className="abt-left">

            <div className="abt-image">
              <img src={teamImg} alt="team" />
            </div>

            <div className="abt-info">

              <div className="abt-card">
                <h4> <IoEyeOutline className="abt-icon-e" /> Our Vision</h4>
                <p>
                  To redefine real estate by making property buying
                  and selling smooth, secure, and transparent.
                </p>
              </div>

              <div className="abt-card">
                <h4> <TbFlag className="abt-icon" /> Mission</h4>
                <p>
                  Deliver personalized real estate solutions with trust,
                  clarity, and expert market knowledge.
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="abt-right">

            <div className="abt-stat">
              <h3>1,200+</h3>
              <p>Project Complete</p>
            </div>

            <div className="abt-stat">
              <h3>250+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="abt-stat">
              <h3>$10M+</h3>
              <p>Project Value</p>
            </div>

            <div className="abt-stat">
              <h3>90%</h3>
              <p>Client Retention Rate</p>
            </div>

          </div>

        </div>

      </section>

      {/* 🔥 UPDATED IMAGE SHOWCASE SECTION */}
<section className="check">
  <div className="check-container">

    {/* TOP TEXT */}
    <h2 className="check-title">OUR PROPERTY REALTY</h2>

    <p className="check-desc">
      We connect families and investors with thoughtfully
      built homes and premium properties. Our commitment to clarity, quality,
      and exceptional service ensures a seamless real-estate experience
      no matter where you are in your journey.
    </p>

    {/* IMAGES */}
    <div className="check-images">
      <img src={img1} alt="property" />
      <img src={img2} alt="property" />
      <img src={img3} alt="property" />
      <img src={img4} alt="property" />
      <img src={img5} alt="property" />
    </div>

  </div>
</section>

{/* 🔥 WHERE SECTION */}
<section className="where">
  <div className="where-container">

    {/* LEFT SIDE */}
    <div className="where-left">
      <h2>
        WHERE IMAGINATION COMES <br />
        TO LIFE AND EVERY <span className="sign"> DESIGN </span> <br />
        SPEAKS ITS OWN STORY.
      </h2>

      <img src={bringimg} alt="main property" className="where-main-img" />
    </div>

    {/* RIGHT SIDE */}
    <div className="where-right">

      <p className="where-top-text">
        GMBPlus brings families and investors closer to
        refined properties crafted for comfort, exceptional
        value, and enduring quality
      </p>

      <div className="where-bottom-row">
        <img src={bringimg1} alt="small property" className="where-small-img" />
        <p className="where-bottom-text">
          At GMBPlus, we guide families and investors toward
          premium properties backed by insight, quality, and long-term
          potential. Each home is curated to offer comfort, value and
          confidence, ensuring your investment is built on a strong foundation.
        </p>
      </div>

      {/* <button className="where-btn">LEARN MORE</button> */}
      <button className="where-btn"> <BsFillHouseFill /> <BsHousesFill /> <GiFamilyHouse /> </button>

    </div>

  </div>
</section>

    </>
  );
};

export default Pro;