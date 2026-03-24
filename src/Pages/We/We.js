import React, { useEffect, useRef } from "react";
import "./We.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import school from "../../Assets/NLS.png";
import embassy from "../../Assets/IEB.png";
import poly from "../../Assets/LSP.png";
import model from "../../Assets/LMC.png";
import at from "../../Assets/AT.png";
import clinic from "../../Assets/SKC.png";
import viva from "../../Assets/VIVA.png";

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

  // ✅ Carousel responsiveness
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="logistics-section">
      <div className="logistics-container">

        {/* Top Clients */}
        <div className="clients-header slide-up" ref={headerRef}>
          <p>
            We have <span>several clients</span> all over the nation
          </p>

          <div className="clients-logos">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              arrows={false}
              showDots={false}
              swipeable={true}
              draggable={true}
              keyBoardControl={true}
            >
              <img src={school} alt="School" />
              <img src={embassy} alt="Embassy" />
              <img src={poly} alt="Poly" />
              <img src={model} alt="Model" />
              <img src={at} alt="AT" />
              <img src={clinic} alt="Clinic" />
              <img src={viva} alt="Viva" />
            </Carousel>
          </div>
        </div>

        {/* Main Content */}
        <div className="logistics-content">

          {/* Left */}
          <div className="logistics-text slide-up" ref={textRef}>
            <span className="abo-badge">ABOUT US</span>

            <h2>
              Comprehensive Industrial <br /> & Technical Services
            </h2>

            <p>
              Our company provides integrated solutions across industrial chemicals,
              facilities management, IT services, and property management by planning,
              executing, and managing resources, operations, and service delivery from
              initial engagement to successful completion.
            </p>

            <a href="/about" className="abo-badge-a">
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