import React, { useEffect, useRef } from "react";
import "./WeAbout.css";


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

          </div>
        </div>

        {/* Main Content */}
        <div className="logistics-content">

          {/* Left */}
          <div className="logistics-image-about slide-up" ref={imageRef}>
            <img src={AboutImg} alt="Industrial Operations" />
          </div>

          {/* Right */}
          <div className="logistics-text slide-up" ref={textRef}>
            <span className="about-badge">ABOUT US</span>

            <h2>
              {/* Comprehensive Industrial <br /> & Technical Services */}
              Who We Are
            </h2>

            <p>
            We are a diversified business company delivering high-quality
            industrial chemicals, facilities management services, IT solutions,
            and property & estate management. Our operations are built on
            efficiency, safety, and long-term partnerships.
            </p>

          </div>

        </div>
      </div>
    </section>
    
  );
};

export default We;
