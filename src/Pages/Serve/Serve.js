import React, { useEffect, useRef } from "react";
import "./Serve.css";

import chemical from "../../Assets/Chemical.jpg";
import facility from "../../Assets/Facility.jpg";
import estate from "../../Assets/Estatenew.png";
import repair from "../../Assets/Why.jpg";

const Serve = () => {
  const headerRef = useRef(null);
  const cardsRefs = useRef([]);

  useEffect(() => {
    // ✅ Store ref values in variables (ESLint Fix)
    const headerEl = headerRef.current;
    const cardsEls = cardsRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerEl) observer.observe(headerEl);

    if (cardsEls.length) {
      cardsEls.forEach((el) => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (headerEl) observer.unobserve(headerEl);

      if (cardsEls.length) {
        cardsEls.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }

      observer.disconnect(); // extra safe cleanup
    };
  }, []);

  return (
    <section className="market-section">
      <div className="market-container">

        {/* Header */}
        <div className="market-header" ref={headerRef}>
          <h2>We offer several Services for you</h2>
          <span className="market-divider"></span>
          <p>
            Over the past 25 years, we have supported diverse industries by
            delivering reliable, innovative, and sustainable service solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="market-grid">

          {/* Card 1 */}
          <div
            className="market-card"
            ref={(el) => (cardsRefs.current[0] = el)}
          >
            <img src={facility} alt="Facility" />
            <h3>Facilities Management</h3>
            <p>
              Reliable solutions for infrastructure, facilities operations,
              equipment support, and technology services.
            </p>
            <a href="/services" className="read-more">
              READ MORE →
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="market-card"
            ref={(el) => (cardsRefs.current[1] = el)}
          >
            <img src={chemical} alt="Industrial Sector" />
            <h3>Industrial Chemicals</h3>
            <p>
              Supporting industrial operations through chemical supply,
              facilities management, and operational services.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="market-card"
            ref={(el) => (cardsRefs.current[2] = el)}
          >
            <img src={estate} alt="Property" />
            <h3>Properties & Estates Management</h3>
            <p>
              Property, estate, and facilities management solutions tailored
              to agricultural and commercial environments.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="market-card"
            ref={(el) => (cardsRefs.current[3] = el)}
          >
            <img src={repair} alt="IT" />
            <h3>IT Solutions</h3>
            <p>
              We provide reliable IT solutions through the supply of quality
              software and hardware, system deployment, and technical
              support services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Serve;
