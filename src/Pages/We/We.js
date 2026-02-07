import React from "react";
import "./We.css";

// import oracle from "../../Assets/oracle.png";
// import spotify from "../../Assets/spotify.png";
// import asics from "../../Assets/asics.png";
// import philips from "../../Assets/philips.png";
// import qatar from "../../Assets/qatar.png";
// import fernet from "../../Assets/fernet.png";

import AboutImg from "../../Assets/About1.jpg";

const We = () => {
  return (
    <section className="logistics-section">
      <div className="logistics-container">

        {/* Top Clients */}
        <div className="clients-header">
          <p>
            Over <span>35,000 Clients</span> All Over The World
          </p>

          <div className="clients-logos">
            {/* <img src={oracle} alt="Oracle" />
            <img src={spotify} alt="Spotify" />
            <img src={asics} alt="Asics" />
            <img src={philips} alt="Philips" />
            <img src={qatar} alt="Qatar Airways" />
            <img src={fernet} alt="Fernet Branca" /> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="logistics-content">

          {/* Left */}
          <div className="logistics-text">
            <span className="about-badge">ABOUT US</span>

            <h2>Comprehensive Industrial <br /> & Technical Services</h2>

            <p>
              Our company provides integrated solutions across industrial chemicals, 
              facilities management, IT services, and property management by planning, 
              executing, and managing resources, operations, and service delivery from
               initial engagement to successful completion.
            </p>

            <a href="/about" className="about-badge-a">
              <span> Read More</span>
            </a>
          </div>

          {/* Right */}
          <div className="logistics-image">
            <img src={AboutImg} alt="Logistics Operations" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default We;
