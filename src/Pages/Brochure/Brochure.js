import React from "react";
import "./Brochure.css";
import { Link } from "react-router-dom";
import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";

import catalogPDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";

const Brochure = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = catalogPDF;
    link.download = "GMB-PLUS-BROCHURE-2026.pdf";
    link.click();
  };

  return (
    <div className="brochure-wrapper">
      {/* HERO SECTION */}
      <section className="brochure-hero">
        <div className="brochure-hero-content">
          <h1>Our Company Brochure</h1>
          <p>
            Discover comprehensive solutions across industrial chemicals,
            facilities management, digital services, and property management.
          </p>
          <button className="brochure-hero-btn" onClick={handleDownloadPDF}>
            <FaDownload /> Download PDF
          </button>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="brochure-highlights">
        <div className="brochure-container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">📋</div>
              <h3>Complete Profile</h3>
              <p>Learn about our mission, vision, and core values.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🏢</div>
              <h3>Our Services</h3>
              <p>Explore all service offerings in detail.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Product Catalog</h3>
              <p>View our industrial chemicals and product range.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✨</div>
              <h3>Why Choose Us</h3>
              <p>Discover our unique value proposition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF VIEWER SECTION */}
      <section className="brochure-viewer">
        <div className="brochure-container">
          <div className="viewer-header">
            <h2>
              <FaFileAlt className="icon" /> View Our Brochure
            </h2>
            <p>Scroll through our comprehensive company profile below</p>
          </div>

          <div className="pdf-viewer-wrapper">
            <iframe
              src={catalogPDF}
              title="Company Brochure PDF"
              className="pdf-iframe"
            />
          </div>

          <div className="viewer-footer">
            <button className="download-btn-alt" onClick={handleDownloadPDF}>
              <FaDownload /> Download Full PDF
            </button>
            <Link to="/contact" className="contact-btn">
              Get More Information
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="brochure-benefits">
        <div className="brochure-container">
          <h2>Why Review Our Brochure?</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Comprehensive Overview</h4>
              <p>
                Get a complete understanding of our capabilities and services.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Product Details</h4>
              <p>
                Detailed specifications and information about all our offerings.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Company Credentials</h4>
              <p>
                Learn about our experience, certifications, and achievements.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Easy Reference</h4>
              <p>
                Keep the PDF handy for future reference and sharing with teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;
