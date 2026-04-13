import React, { useState } from "react";
import "./Chemical.css";
import { FaCheckCircle } from "react-icons/fa";

// images (replace with your own)
import mainImg from "../../Assets/Chemical.jpg";
import sideImg from "../../Assets/Chemical2.jpg";
import labIcon from "../../Assets/researcher.gif";
import busIcon from "../../Assets/deal.gif";
import subImg from "../../Assets/Chemical3.jpg";

//PDF
import catalogPDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";

// icons
import waterIcon from "../../Assets/save-water.gif";
import specIcon from "../../Assets/molecular-science.gif";
import chemIcon from "../../Assets/crane.gif";

// Review
import SayChemical from "../SayChemical/SayChemical";

const Chemical = () => {

  const [showPDF, setShowPDF] = useState(false);

  return (
    <section className="chemical">
      <div className="chemical-container">

        {/* LEFT CONTENT */}
        <div className="chemical-left">
          <h1>
            Premium Industrial Chemicals for Your Business Needs
          </h1>

          <p>
            We provide high-quality industrial chemicals for manufacturing,
            cleaning, and production processes with safety and efficiency guaranteed.
          </p>

          <div className="chemical-points">
            <div>
              <FaCheckCircle className="icon" />
              <span>Certified and industry-compliant products</span>
            </div>
            <div>
              <FaCheckCircle className="icon" />
              <span>Reliable supply and fast distribution</span>
            </div>
            <div>
              <FaCheckCircle className="icon" />
              <span>Safety-first handling and delivery</span>
            </div>
          </div>
          

          <button className="chemical-btn">
            Request Supply →
          </button>

          <div className="chemical-clients">
            <img src={busIcon} alt="" />
            <span>10+ Businesses Served</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="chemical-right">

          <div className="chemical-main-img">
            <img src={mainImg} alt="Chemical Work" />
          </div>

          <div className="chemical-side-img">
            <img src={sideImg} alt="Chemical Expert" />
          </div>

          {/* Rating Badge */}
          <div className="chemical-rating">
            <h4>Quality Rating</h4>
            <span>4.8 ★★★★★</span>
          </div>

          {/* Expert Card */}
          <div className="chemical-expert">
            <img src={labIcon} alt="" />
            <div>
              <h5>Lab Specialist</h5>
              <span>Certified Expert</span>
            </div>
          </div>

        </div>
      </div>

      {/* ABOUT SECTION */}
<div className="chemical-about">

  {/* LEFT IMAGE */}
  <div className="chemical-about-left">
    <img src={subImg} alt="Industrial Plant" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="chemical-about-right">

    <span className="chemical-tag">
      From Local Supply to Global Distribution
    </span>

    <h2>
      Empowering Industries With Quality Chemical Solutions
    </h2>

    <p>
      Dedicated to enhancing industrial productivity, our company provides
      high-quality chemical products designed to improve efficiency and ensure
      safety across various sectors. With a strong commitment to sustainable
      practices, we deliver reliable and innovative solutions.
    </p>

    <p>
      Our expertise and advanced supply chain enable us to meet growing demands,
      ensuring consistent product availability and customer satisfaction across
      different industries.
    </p>

    {/* STATS */}
    <div className="chemical-stats">

      <div>
        <h3>+5</h3>
        <span>Years Experience</span>
      </div>

      <div>
        <h3>+8</h3>
        <span>Product Diversity</span>
      </div>

    </div>
  </div>
</div>



{/* PRODUCTS SECTION */}
<div className="chemical-products">

  {/* TOP HEADER */}
  <div className="chemical-products-top">

    <div className="chemical-products-left">
      <span>A Range Of Effective Chemicals For Growth And Productivity.</span>
      <h2>Enhance Your Productivity With Our Premium Chemicals.</h2>
    </div>
    

    <div className="chemical-products-right">
      {/* <p>
        Explore our diverse range of high-quality fertilizers tailored to enrich
        soil, boost crop health, and increase productivity for sustainable farming.
      </p> */}
      <p>
        Explore our wide range of high-quality chemical products developed to support 
        efficient production processes, enhance performance, and ensure consistent 
        results across various industrial applications.
      </p>
      <button onClick={() => setShowPDF(true)}>
            View Product Catalog
      </button>
    </div>


  </div>

  <div className="chemical-category-header">
      <h2>
          Explore by <span>category</span>
        </h2>
  </div>

  {/* CATEGORY CARDS */}
<div className="chemical-category">

  {/* CARD 1 */}
  <div className="chemical-card">
    <div className="chemical-icon">
        <img src={chemIcon} alt="icon" />
    </div>
    <h3>Construction Chemicals</h3>
    <p>
      High-quality cleaning agents designed for industrial and commercial use.
    </p>
    <span className="arrow">→</span>
    <button className="pro-view-btn">View Products</button>
    <button className="pro-view-btn">
            View Products
    </button>
  </div>

  {/* CARD 2 */}
  <div className="chemical-card">
    <div className="chemical-icon ">
      <img src={waterIcon} alt="icon" />
    </div>
    <h3>Water Treatment Chemicals</h3>
    <p>
      Effective solutions for water purification and treatment processes.
    </p>
    <span className="arrow">→</span>
    <button className="pro-view-btn">
            View Products
    </button> 
  </div>

  {/* CARD 3 */}
  <div className="chemical-card">
    <div className="chemical-icon">
      <img src={specIcon} alt="icon" />
    </div>
    <h3>Specialty & Surfactant Chemicals</h3>
    <p>
      Reliable solvents for manufacturing and production efficiency.
    </p>
    <span className="arrow">→</span>
    <button className="pro-view-btn">
            View Products
    </button>
  </div>

</div>
</div>
        {showPDF && (
  <div className="pdf-overlay">

    <div className="pdf-modal">

      <div className="pdf-header">
        <h3>Product Catalog</h3>
        <button onClick={() => setShowPDF(false)}>✖</button>
      </div>

      <iframe
        src={catalogPDF}
        title="Product Catalog"
        className="pdf-frame"
      ></iframe>
    </div>
  </div>
)}

  <SayChemical />

    </section>
    
    
  );
};

export default Chemical;