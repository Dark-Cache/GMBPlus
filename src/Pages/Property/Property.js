import React from "react";
import "./Property.css";


// Images
import mainHouse from "../../Assets/Manage2.jpg";
import smallHouse from "../../Assets/Manage1.jpg";

//Header Icon
// import LeftIcon from "../../Assets/Cl2.png"; 
// import MiddleIcon from "../../Assets/Cl1.png";
// import RightIcon from "../../Assets/Cl2.png";

// Solution Icons
import ManageIcon from "../../Assets/management-consulting.gif";
import MaintainIcon from "../../Assets/maintenancesol.gif";
import EnhanceIcon from "../../Assets/protectionsol.gif";




const Property = () => {
  return (
    <>
    <section className="property-section">
      <div className="property-header">
        <h2>
          Complete <span>Property & Estate
          <br /> 
          Management </span> Solutions
        </h2>

        <div className="property-top-badge">

            <p>
              We manage, maintain, let, and modernize your property. 
              From full estate operations to smart security and access control.
            </p>
        </div>
      </div>

      <div className="property-grid">
        {/* Left Card */}
        <div className="property-main-card">
          <img src={mainHouse} alt="Luxury Home" />
        </div>

        {/* Middle Card */}
        <div className="property-content-card">
          <h3>
            Big things can
            happen in small
            spaces.
          </h3>

          <p>
            With thoughtful design and smart
            organization, you can maximize every
            inch, making room for creativity.
          </p>
        
        </div>

        {/* Right Card */}
        <div className="property-side-card">
          <img src={smallHouse} alt="Modern Property" />

          <h4>Pricing Start at your budget</h4>

          <button onClick={() => document.querySelector(".prop").scrollIntoView({ behavior: "smooth" })}>
            Explore Our Services →
          </button>
        </div>

        <div className="property-bottom">
          <p>
            Whether it's creating a cozy corner for
            relaxation or transforming a small area
            into a workspace.
          </p>
        </div>
      </div>
    </section>

    <section className="property-solutions">
  <div className="property-solutions-header">
    <h2>
      Property Solutions, Powered by Technology
    </h2>

    <p>
      We combine traditional property management expertise with modern
      technology to manage, maintain, and enhance properties across
      Nigeria. 
    </p>
  </div>

  <div className="property-solutions-grid">
    <div className="property-solution-card">
      <div className="property-solution-icon">
        <img src={ManageIcon} alt="Manage Icon" />
      </div>

      <h5>Manage</h5>

      <p>
        Full operational control of your property or estate,
        handled by professionals.
      </p>
    </div>

    <div className="property-solution-card">
      <div className="property-solution-icon">
        <img src={MaintainIcon} alt="Maintain Icon" />
      </div>

      <h5>Maintain</h5>

      <p>
        Proactive upkeep that prevents costly repairs and
        extends asset life.
      </p>
    </div>

    <div className="property-solution-card">
      <div className="property-solution-icon">
        <img src={EnhanceIcon} alt="Enhance Icon" />
      </div>

      <h5>Enhance</h5>

      <p>
        Modern upgrades, smart systems, and strategic advice
        that grow value.
      </p>
    </div>
  </div>
</section>

<div className="prop"></div>
<section className="property-pillars">
  <div className="property-pillars-header">
    <h2>Five Pillars of Complete Property Care</h2>
  </div>

  <div className="property-pillars-grid">
    {/* Property Management */}
    <div className="property-pillar-card">
      <div className="property-pillar-icon">🏠</div>

      <h3>Property Management</h3>

      <ul>
        <li>Tenant management & relations</li>
        <li>Rent collection support</li>
        <li>Regular property inspections</li>
        <li>Maintenance coordination</li>
      </ul>
    </div>

    {/* Estate Management */}
    <div className="property-pillar-card">
      <div className="property-pillar-icon">🏙️</div>

      <h3>Estate Management</h3>

      <ul>
        <li>Day-to-day estate operations</li>
        <li>Vendor & staff supervision</li>
        <li>Common area maintenance</li>
        <li>Security coordination</li>
      </ul>
    </div>

    {/* Letting */}
    <div className="property-pillar-card">
      <div className="property-pillar-icon">🔑</div>

      <h3>Self Service Smart Home</h3>

      <ul>
        <li>Smart lighting automation</li>
        <li>Smart access & security control</li>
        <li>Remote device monitoring & control</li>
        <li>Voice & app-based home management</li>
      </ul>
    </div>

    {/* Smart Technology */}
    <div className="property-pillar-card">
      <div className="property-pillar-icon">🤖</div>

      <h3>Smart Property Technology</h3>

      <ul>
        <li>Smart doors & automated gates</li>
        <li>Alexa & Google Home integration</li>
        <li>CCTV & AI-powered monitoring</li>
        <li>Full smart home automation</li>
      </ul>
    </div>

    {/* Administrative */}
    <div className="property-pillar-card">
      <div className="property-pillar-icon">📋</div>

      <h3>Administrative Services</h3>

      <ul>
        <li>Resident communication</li>
        <li>Complaint resolution</li>
        <li>Documentation & reporting</li>
        <li>Operational coordination</li>
      </ul>
    </div>

    {/* CTA Card */}
    <div className="property-pillar-cta">
      <h3>One Provider. Every Need.</h3>

      <p>
        Stop juggling multiple vendors. We unify every
        property function into one accountable team with
        one point of contact.
      </p>

      <a href="/contact">
        Talk to our team →
      </a>
    </div>
  </div>
</section>


<section className="property-tech-benefits">
  <div className="property-tech-benefits-container">
    <h2>Why Smart Property Technology Matters</h2>

    <div className="property-tech-benefits-grid">
      <div className="property-tech-benefit-item">
        <div className="property-tech-benefit-icon">🛡️</div>

        <h3>Improved Security</h3>

        <p>
          Fewer incidents, faster response.
        </p>
      </div>

      <div className="property-tech-benefit-item">
        <div className="property-tech-benefit-icon">✨</div>

        <h3>Everyday Convenience</h3>

        <p>
          Seamless entry for residents and owners.
        </p>
      </div>

      <div className="property-tech-benefit-item">
        <div className="property-tech-benefit-icon">💎</div>

        <h3>Premium Experience</h3>

        <p>
          Modern amenities that attract tenants.
        </p>
      </div>

      <div className="property-tech-benefit-item">
        <div className="property-tech-benefit-icon">📊</div>

        <h3>Higher Property Value</h3>

        <p>
          Smart features boost market worth.
        </p>
      </div>
    </div>
  </div>
</section>



<section className="property-engagement">
  <div className="property-engagement-header">
    <h2>Work With Us the Way That Suits You</h2>
  </div>

  <div className="property-engagement-grid">

    {/* Contract Card */}
    <div className="property-engagement-card contract-card">

      <div className="property-engagement-badge">
        CORE OFFERING
      </div>

      <h3>Contract-Based Services</h3>

      <p>
        Our primary model. A dedicated team managing your
        property long-term.
      </p>

      <ul>
        <li>Monthly or annual agreements</li>
        <li>Dedicated management team</li>
        <li>SLA-driven service delivery</li>
        <li>Continuous monitoring & reporting</li>
        <li>Quarterly strategy reviews</li>
      </ul>
    </div>

    {/* One-Off Card */}
    <div className="property-engagement-card oneoff-card">

      <h3>One-Off Services</h3>

      <p>
        Specific projects delivered on demand,
        no long-term commitment.
      </p>

      <ul>
        <li>Letting & property sales</li>
        <li>Technology installation & upgrades</li>
        <li>Repairs & maintenance projects</li>
        <li>Short-term management support</li>
        <li>Property assessments & advisory</li>
      </ul>
    </div>

  </div>
</section>


<section className="property-process">
  <div className="property-process-header">
    <h2>From First Call to Ongoing Care</h2>
  </div>

  <div className="property-process-grid">

    <div className="property-process-card">
      <div className="property-process-number">1</div>

      <h3>Assessment</h3>

      <p>
        We inspect your property or estate.
      </p>
    </div>

    <div className="property-process-card">
      <div className="property-process-number">2</div>

      <h3>Consultation</h3>

      <p>
        We analyse your needs and goals.
      </p>
    </div>

    <div className="property-process-card">
      <div className="property-process-number">3</div>

      <h3>Custom Proposal</h3>

      <p>
        Tailored service plan delivered.
      </p>
    </div>

    <div className="property-process-card">
      <div className="property-process-number">4</div>

      <h3>Agreement</h3>

      <p>
        Contract signed, team onboarded.
      </p>
    </div>

    <div className="property-process-card">
      <div className="property-process-number">5</div>

      <h3>Ongoing Support</h3>

      <p>
        We manage, report, and improve.
      </p>
    </div>

  </div>
</section>


<section className="property-partners">
  <div className="property-partners-header">
    <h2>Partners Across Nigeria's Property Sector</h2>
  </div>

  <div className="property-partners-grid">

    <div className="property-partner-card">
      <div className="property-partner-icon">🏠</div>
      <h3>Property Owners</h3>
    </div>

    <div className="property-partner-card">
      <div className="property-partner-icon">💼</div>
      <h3>Real Estate Investors</h3>
    </div>

    <div className="property-partner-card">
      <div className="property-partner-icon">🏗️</div>
      <h3>Estate Developers</h3>
    </div>

    <div className="property-partner-card">
      <div className="property-partner-icon">🏘️</div>
      <h3>Resident Associations</h3>
    </div>

    <div className="property-partner-card">
      <div className="property-partner-icon">🏢</div>
      <h3>Corporate Organisations</h3>
    </div>

  </div>
</section>



  </>
  );
};

export default Property;
