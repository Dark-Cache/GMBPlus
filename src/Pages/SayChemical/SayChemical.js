import React from "react";
import "./SayChemical.css";

// Sample images (replace with yours)
import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

const SayChemical = () => {
  return (
    <section className="say-section">
      {/* Header */}
      <div className="say-header">
        <h2>
          Results that speaks volume <br />
          <span>Read success stories</span>
        </h2>
        <p>
          Discover how our chemical solutions are improving efficiency,
          durability, and performance across industries.
        </p>
      </div>

      {/* Content */}
      <div className="say-container">
        
        {/* Left Big Card */}
        <div className="say-card big-card">
          <h1>4X</h1>
          <h4>Increase in construction durability</h4>
          <p className="quote">
            “We partnered with the team for high-performance construction
            chemicals, and the results were outstanding. Their admixtures and
            concrete solutions significantly improved strength, setting time,
            and long-term durability of our projects.”
          </p>

          <div className="profile-a">
            <img src={avatar1} alt="client" />
            <div>
              <h5>David Callahan</h5>
              <span>Project Manager, BuildCore Ltd.</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="say-right">

          {/* Top Card */}
          <div className="say-card">
            <h2>2X <span>Improvement in water treatment efficiency</span></h2>
            <p className="quote">
              “Their water treatment chemicals delivered exceptional purification
              results. We achieved higher efficiency in wastewater management
              while reducing operational costs and environmental impact.”
            </p>

            <div className="profile">
              <img src={avatar2} alt="client" />
              <div>
                <h5>Sarah Mitchel</h5>
                <span>Operations Lead, AquaPure Systems</span>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="say-bottom">
            
            <div className="say-card small">
              <p className="quote">
                “Their specialty and surfactant chemicals enhanced our product
                formulations significantly. The consistency, quality, and
                performance exceeded our expectations in every batch.”
              </p>

              <div className="profile">
                <img src={avatar1} alt="client" />
                <div>
                  <h5>Tom Becker</h5>
                  <span>Head of Production, ChemPro Industries</span>
                </div>
              </div>
            </div>

            <div className="say-card dark small">
              <p className="quote">
                “From consultation to delivery, their expertise in industrial
                chemicals helped us optimize processes and improve overall
                efficiency. Highly reliable and professional team.”
              </p>

              <div className="profile">
                <img src={avatar2} alt="client" />
                <div>
                  <h5>Sarah Mitchel</h5>
                  <span>Technical Director, PrimeChem Solutions</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SayChemical;