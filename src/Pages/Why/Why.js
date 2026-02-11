import React, { useEffect, useRef } from 'react'
import "./Why.css";
import work from "../../Assets/Why4.jpg";

const Why = () => {
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
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

    [imageRef, statsRef, contentRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [imageRef, statsRef, contentRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="why-section">
      <div className="why-container">

        {/* Left Image */}
        <div className="why-image" ref={imageRef}>
          <img src={work} alt="Professional Team" />
        </div>

        {/* Stats (Overlapping Card) */}
        <div className="why-stats" ref={statsRef}>
          <h3>Why Choosing Us?</h3>

          <div className="progress-item">
            <span>Production</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%" }} />
            </div>
            <span className="percent">75%</span>
          </div>

          <div className="progress-item">
            <span>Utilization Works</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }} />
            </div>
            <span className="percent">80%</span>
          </div>

          <div className="progress-item">
            <span>EPC Works</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "55%" }} />
            </div>
            <span className="percent">55%</span>
          </div>

          <div className="progress-item">
            <span>Customer Satisfaction</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "90%" }} />
            </div>
            <span className="percent">90%</span>
          </div>

          <div className="progress-item">
            <span>Avg Profit Increased</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "60%" }} />
            </div>
            <span className="percent">60%</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="why-content" ref={contentRef}>
          <div className="why-icon">🏭</div>
          <h3>We maintain a highly trained and experienced team.</h3>
          <p>
            Our workforce consists of skilled professionals with extensive
            experience across industrial services, facilities management,
            IT solutions, and property management.
          </p>
          <p>
            We focus on operational excellence, safety compliance, and
            continuous improvement to deliver reliable and efficient solutions
            to our clients.
          </p>


        </div>

      </div>
    </section>
  );
};

export default Why;
