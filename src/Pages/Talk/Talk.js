import React, { useEffect, useRef } from "react";
import "./Talk.css";

const Talk = () => {
  const tagRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // ✅ Store ref values (ESLint Fix)
    const tagEl = tagRef.current;
    const buttonsEl = buttonsRef.current;

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

    if (tagEl) observer.observe(tagEl);
    if (buttonsEl) observer.observe(buttonsEl);

    return () => {
      if (tagEl) observer.unobserve(tagEl);
      if (buttonsEl) observer.unobserve(buttonsEl);

      observer.disconnect(); // extra safe cleanup
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">

        <span className="cta-tag" ref={tagRef}>
          LET'S HAVE A TALK
        </span>

        <h1 className="cta-title">
          Everything Begins <br />
          with a <span>Friendly Conversation</span>
        </h1>

        <p className="cta-subtitle">
          <strong>Not in the mood to meet?</strong>
        </p>

        <p className="cta-text">
          We got it covered. We have all the tools to{" "}
          <strong>start our collaboration</strong> fast and effective.
          Swift execution is our modus operandi.
        </p>

        <div className="cta-buttons" ref={buttonsRef}>
          <a href="/contact" className="cta-btn primary">
            Book a Call
          </a>
          <a href="/get-started" className="cta-btn secondary">
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
};

export default Talk;
