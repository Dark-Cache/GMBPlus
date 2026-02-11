import React, { useEffect, useRef } from "react";
import "./We.css";

// import oracle from "../../Assets/oracle.png";
// import spotify from "../../Assets/spotify.png";
// import asics from "../../Assets/asics.png";
// import philips from "../../Assets/philips.png";
// import qatar from "../../Assets/qatar.png";
// import fernet from "../../Assets/fernet.png";

import AboutImg from "../../Assets/About1.jpg";

const We = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const elements = [headerRef.current, textRef.current, imageRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="logistics-section">
      <div className="logistics-container">

        {/* Top Clients */}
        <div className="clients-header slide-up" ref={headerRef}>
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
          <div className="logistics-text slide-up" ref={textRef}>
            <span className="about-badge">ABOUT US</span>

            <h2>
              Comprehensive Industrial <br /> & Technical Services
            </h2>

            <p>
              Our company provides integrated solutions across industrial chemicals,
              facilities management, IT services, and property management by planning,
              executing, and managing resources, operations, and service delivery from
              initial engagement to successful completion.
            </p>

            <a href="/about" className="about-badge-a">
              Read More
            </a>
          </div>

          {/* Right */}
          <div className="logistics-image slide-up" ref={imageRef}>
            <img src={AboutImg} alt="Industrial Operations" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default We;
