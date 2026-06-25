import React, { useRef } from "react";
import "./Brochure.css";
// import { Link } from "react-router-dom";
import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";

import catalogPDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";
import facilityPDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";
import businessPDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";
import estatePDF from "../../Pdf/GMB PLUS GLOBAL CONCEPT LTD— COMPANY PROFILE 2026.pdf";

// Icon
import IndusBroIcon from "../../Assets/report.gif"
import FasBroIcon from "../../Assets/carpet-cleaning.gif"
import BusBroIcon from "../../Assets/reportbus.gif"
import ConBroIcon from "../../Assets/contractbro.gif"

const Brochure = () => {
  const brochureSectionRef = useRef(null);

  const scrollToBrochures = () => {
    brochureSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openBrochure = (pdf) => {
    window.open(pdf, "_blank");
  };

  const downloadBrochure = (pdf, fileName) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="brochure-wrapper">
      {/* HERO SECTION */}
      <section className="brochure-hero">
        <div className="brochure-hero-content">
          <h1>Our Company Brochures</h1>
          <p>
            Discover comprehensive solutions across industrial chemicals,
            facilities management, business & property solutions, and estate
            management services.
          </p>

          <button
            className="brochure-hero-btn"
            onClick={scrollToBrochures}
          >
            <FaFileAlt /> View Brochures
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
              <p>
                Learn about our mission, vision, expertise, and commitment to
                excellence.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🏢</div>
              <h3>Our Services</h3>
              <p>
                Explore our service divisions and tailored business solutions.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Product Catalog</h3>
              <p>
                Browse our industrial chemical offerings and specialized
                products.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✨</div>
              <h3>Why Choose Us</h3>
              <p>
                Discover the value, reliability, and expertise that set us
                apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BROCHURE SECTION */}
      <section
        className="brochure-viewer"
        ref={brochureSectionRef}
      >
        <div className="brochure-container">
          <div className="viewer-header">
            <h2>
              <FaFileAlt className="icon" />
              View Our Brochures
            </h2>

            <p>
              Access and download brochures for each of our service divisions.
            </p>
          </div>

          <div className="brochure-grid">
            {/* Industrial Chemical */}
            <div className="brochure-card">
              <div className="brochure-card-icon">
                <img src={IndusBroIcon} alt="Icon " />
              </div>

              <h3>Industrial Chemical</h3>

              <p>
                Explore our industrial chemical solutions, quality 
                products, and reliable procurement and supply services.
              </p>
              {/* <p>
                Explore our industrial chemical solutions, products,
                procurement services, and supply capabilities.
              </p> */}

              <div className="brochure-card-buttons">
                <button
                  className="view-btn"
                  onClick={() => openBrochure(catalogPDF)}
                >
                  View Brochure
                </button>

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadBrochure(
                      catalogPDF,
                      "Industrial-Chemical-Brochure.pdf"
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>

            {/* Facility Management */}
            <div className="brochure-card">
              <div className="brochure-card-icon">
                <img src={FasBroIcon} alt="Icon " />
              </div>

              <h3>Facility Management</h3>

              <p>
                Discover our facility management services,
                maintenance solutions, cleaning operations, and support
                services.
              </p>

              <div className="brochure-card-buttons">
                <button
                  className="view-btn"
                  onClick={() => openBrochure(facilityPDF)}
                >
                  View Brochure
                </button>

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadBrochure(
                      facilityPDF,
                      "Facility-Management-Brochure.pdf"
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>

            {/* Business & Property Solutions */}
            <div className="brochure-card">
              <div className="brochure-card-icon">
                <img src={BusBroIcon} alt="Icon " />
              </div>

              <h3>Business & Digital Solutions</h3>

              <p>
                Learn about our business support services, property consulting,
                project advisory, and strategic growth solutions.
              </p>

              <div className="brochure-card-buttons">
                <button
                  className="view-btn"
                  onClick={() => openBrochure(businessPDF)}
                >
                  View Brochure
                </button>

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadBrochure(
                      businessPDF,
                      "Business-Property-Solutions-Brochure.pdf"
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>

            {/* Estate & Property Management */}
            <div className="brochure-card">
              <div className="brochure-card-icon">
                <img src={ConBroIcon} alt="Icon " />
              </div>

              <h3>Estate & Property Management</h3>

              <p>
                Explore our estate administration, tenancy management,
                property supervision, and asset management expertise.
              </p>

              <div className="brochure-card-buttons">
                <button
                  className="view-btn"
                  onClick={() => openBrochure(estatePDF)}
                >
                  View Brochure
                </button>

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadBrochure(
                      estatePDF,
                      "Estate-Property-Management-Brochure.pdf"
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="brochure-benefits">
        <div className="brochure-container">
          <h2>Why Review Our Brochures?</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Comprehensive Overview</h4>
              <p>
                Get a complete understanding of our capabilities, services, and
                industry expertise.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Detailed Information</h4>
              <p>
                Access detailed descriptions, specifications, and service
                offerings.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Company Credentials</h4>
              <p>
                Learn about our experience, achievements, and commitment to
                quality delivery.
              </p>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <h4>Easy Reference</h4>
              <p>
                Download and keep brochures handy for future reference and team
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;