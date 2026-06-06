import React from "react";
import "./Facility.css";


//Images
import mainImg from "../../Assets/Cleanhero.jpg";



// Header Icons
// import SupportIcon from "../../Assets/24-hour-service.gif"


// Plan Icons
import OneIcon from "../../Assets/hand-holding-flag.gif"
import ContractIcon from "../../Assets/contract-house.gif"
import PropertyIcon from "../../Assets/house.gif"

// Service Icons
import JanIcon from "../../Assets/cleaning-tools.gif"
import SecureIcon from "../../Assets/security-guard.gif"
import FixIcon from "../../Assets/hands-wrench.gif"
import AirIcon from "../../Assets/maintenance.gif"
import WasteIcon from "../../Assets/recycle.gif"
import LandIcon from "../../Assets/watering-can.gif"
import AntIcon from "../../Assets/cockroach.gif"
import DoIcon from "../../Assets/tools.gif"

// Client Icons
import OfficeIcon from "../../Assets/corporate-culture.gif"
import EstateIcon from "../../Assets/village.gif"
import HomesIcon from "../../Assets/houseIcon.gif"
import EduIcon from "../../Assets/education.gif"
import HosIcon from "../../Assets/hospital.gif"
import ShopIcon from "../../Assets/shop-store.gif"



const Facility = () => {
  return (
    <>

      {/* FACILITY SECTION */}

<section className="facility">
  <div className="facility-container">

    {/* LEFT CONTENT */}

    <div className="facility-content">

      <p className="facility-subtitle">
        {/* Welcome to Cleanora, */}
      </p>

      <h1 className="facility-title">
        Expert <span>Cleaning</span> for Your
        <br />
        Elevated Living
      </h1>

      <p className="facility-description">
        Professional facility management, janitorial services,
        security, maintenance, and property care solutions for
        homes, estates, offices, schools, hospitals and commercial
        properties across Nigeria.
      </p>

      <div className="facility-buttons">
        <button className="facility-primaryBtn" onClick={() => document.querySelector(".clean").scrollIntoView({ behavior: "smooth" })}>
          Search Your Service
        </button>

        {/* <button className="facility-secondaryBtn">
          Book Inspection
        </button> */}
      </div>

      <div className="facility-rating">

        <div className="facility-rating-text">
          <h4>4.1 ★★★★</h4>
          <p>3K Total Reviews</p>
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE */}

    <div className="facility-image">

      <div className="facility-support">
        👥24/7 Support From Our Team
      </div>

      <img src={mainImg} alt="Facility Management" />

      <div className="facility-certified">
        ✔ Certified Professional Team
      </div>

    </div>

    {/* RIGHT IMAGE MOBILE */}

  </div>
</section>

<div className="facility-image-mobile">

      <div className="facility-support-mobile">
        👥24/7 Support From Our Team
      </div>

      <img src={mainImg} alt="Facility Management" />

      <div className="facility-certified-mobile">
        ✔ Certified Professional Team
      </div>

    </div>



      {/* Facility Solutions Section */}

      <section className="facility-solutions">
        <div className="facility-solutions-container">

          <div className="facility-solutions-header">
            <h2>
              One Trusted Partner for Every Facility Need
            </h2>

            <p>
              From a burst pipe at midnight to full estate management,
              we give you the flexibility to choose exactly what works
              for your property and budget.
            </p>
          </div>

          <div className="facility-solutions-grid">

            <div className="facility-solution-card">
              <span>
                  <img src={OneIcon} alt="icon" className="cus-icon" />
                </span>

              <h3>One-Off Services</h3>

              <p>
                Pay per job for urgent repairs, deep cleaning, and
                emergency fixes. Fast response, no contracts.
              </p>
            </div>

            <div className="facility-solution-card">
              <span>
                  <img src={ContractIcon} alt="icon" className="cus-icon" />
                </span>

              <h3>Contract-Based Management</h3>

              <p>
                Monthly or annual agreements with a dedicated team
                and full SLA coverage.
              </p>
            </div>

            <div className="facility-solution-card">
              <span>
                  <img src={PropertyIcon} alt="icon" className="cus-icon" />
                </span>

              <h3>For Every Property Type</h3>

              <p>
                Offices, malls, residential estates, private homes,
                schools, and hospitals across Nigeria.
              </p>
            </div>

          </div>

        </div>
        <div className="clean" id="tryhire"></div>
      </section>


      {/* OUR SERVICES */}

<section className="facility-services">
  <div className="facility-services-container">

    <div className="facility-services-header">
      <h2>Our Services</h2>
      <p>Everything your property needs under one roof.</p>
    </div>

    <div className="facility-services-grid">

      <div className="facility-service-card">
        <img src={JanIcon} alt="Janitor" />
        <h3>Cleaning & Janitorial</h3>
        <p>
          Daily, deep, and post-construction cleaning for any space.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Healthier environment, better hygiene.
        </p>

        <span>Homes, Estates, Offices</span>
      </div>

      <div className="facility-service-card">
        <img src={SecureIcon} alt="Security" />
        <h3>Security Services</h3>
        <p>
          Trained guards, access control, patrol, and CCTV monitoring.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> 24/7 safety, fewer incidents.
        </p>

        <span>Estates, Offices, Malls</span>
      </div>

      <div className="facility-service-card">
        <img src={FixIcon} alt="Repairs" />
        <h3>Electrical & Plumbing</h3>
        <p>
          Installations, fault finding, and emergency repairs.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Safe systems, reduced downtime.
        </p>

        <span>Homes, Estates, Offices</span>
      </div>

      <div className="facility-service-card">
        <img src={AirIcon} alt="HVAC" />
        <h3>HVAC (Air Conditioning)</h3>
        <p>
          AC servicing, installation, repairs, and gas refills.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Longer AC life, lower bills.
        </p>

        <span>Homes, Offices, Retail</span>
      </div>

      <div className="facility-service-card">
        <img src={WasteIcon} alt="Waste Management" />
        <h3>Waste Management</h3>
        <p>
          Scheduled pickup, disposal, and recycling coordination.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Cleaner space, LAWMA compliance.
        </p>

        <span>Estates, Offices, Schools</span>
      </div>

      <div className="facility-service-card">
        <img src={LandIcon} alt="Landscaping" />
        <h3>Landscaping</h3>
        <p>
          Garden design, lawn care, tree trimming, and grounds keeping.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Better curb appeal, higher property value.
        </p>

        <span>Homes, Estates, Hotels</span>
      </div>

      <div className="facility-service-card">
        <img src={AntIcon} alt="Pest Control" />
        <h3>Pest Control</h3>
        <p>
          Fumigation, rodent control, and termite treatment.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> Healthier spaces, protected property.
        </p>

        <span>Homes, Offices, Restaurants</span>
      </div>

      <div className="facility-service-card">
        <img src={DoIcon} alt="Repair" />
        <h3>General Repairs</h3>
        <p>
          Carpentry, painting, tiling, roofing, and handyman work.
        </p>

        <p className="service-benefit">
          <strong>Benefits:</strong> One call fixes everything.
        </p>

        <span>Homes, Estates, Offices</span>
      </div>

    </div>

  </div>
</section>

{/* WORKING OPTIONS SECTION */}

<section className="facility-options">
  <div className="facility-options-container">

    <div className="facility-options-header">
      <h2>Choose How You Want to Work With Us</h2>
      <p>Two clear options. Pick what fits your property.</p>
    </div>

    <div className="facility-options-grid">

      {/* One-Off Services */}

      <div className="facility-option-card facility-option-left">

        <div className="facility-option-icon">⚡</div>

        <h3>One-Off Services</h3>

        <p className="facility-option-desc">
          Perfect when you just need something done, fast and reliable.
        </p>

        <h4>IDEAL FOR</h4>

        <ul>
          <li>✓ Repairs (plumbing, electrical, AC)</li>
          <li>✓ Deep cleaning before/after events</li>
          <li>✓ Emergency fixes</li>
          <li>✓ One-time fumigation or landscaping</li>
        </ul>

        <div className="facility-option-divider"></div>

        <div className="facility-option-benefits">
          <p>🚀 Fast response within 24 hours</p>
          <p>💵 Pay per job, no subscription</p>
          <p>📝 Fixed quote before any work starts</p>
        </div>

      </div>

      {/* Contract Services */}

      <div className="facility-option-card facility-option-right">

        <div className="facility-option-icon">📋</div>

        <h3>Contract-Based Services</h3>

        <p className="facility-option-desc">
          Full peace of mind with a dedicated team on standby.
        </p>

        <h4>IDEAL FOR</h4>

        <ul>
          <li>✓ Monthly or annual agreements</li>
          <li>✓ Ongoing cleaning, security, maintenance</li>
          <li>✓ Dedicated account manager & team</li>
          <li>✓ Full SLA-backed service delivery</li>
        </ul>

        <div className="facility-option-divider"></div>

        <div className="facility-option-benefits">
          <p>🛡️ Predictable monthly cost</p>
          <p>👥 Same trusted team every visit</p>
          <p>📊 Monthly reports & reviews</p>
        </div>

      </div>

    </div>

  </div>
</section>


{/* RESIDENTIAL & ESTATE SERVICES */}

<section className="residential-services">
  <div className="residential-services-container">

    <div className="residential-services-header">
      <h2>Residential & Estate Services</h2>
      <p>Making homes and estates easier to run.</p>
    </div>

    <div className="residential-services-grid">

      {/* Private Homes */}

      <div className="residential-service-card">
        <h3>🏠 Private Homes</h3>

        <ul>
          <li>Cleaning, repairs, and general maintenance</li>
          <li>On-demand or scheduled visits (weekly, monthly)</li>
          <li>AC servicing, plumbing, fumigation</li>
          <li>Landscaping and pool care</li>
        </ul>
      </div>

      {/* Residential Estates */}

      <div className="residential-service-card">
        <h3>🏘️ Residential Estates</h3>

        <ul>
          <li>Common area maintenance</li>
          <li>Waste management & recycling</li>
          <li>Landscaping & grounds keeping</li>
          <li>Security coordination & gate management</li>
        </ul>
      </div>

    </div>

  </div>
</section>


{/* WHY CHOOSE US BANNER */}

<section className="estate-benefits">
  <div className="estate-benefits-container">

    <h2>
      Why homeowners and estate managers choose us:
    </h2>

    <div className="estate-benefits-grid">

      <div className="estate-benefit-item">
        ✓ <strong>Convenience</strong> — one provider, one invoice
      </div>

      <div className="estate-benefit-item">
        ✓ <strong>Better living conditions</strong> — cleaner, safer spaces
      </div>

      <div className="estate-benefit-item">
        ✓ <strong>Less stress</strong> — no juggling multiple vendors
      </div>

    </div>

  </div>
</section>


{/* HOW IT WORKS */}

<section className="facility-process">
  <div className="facility-process-container">

    <div className="facility-process-header">
      <h2>How It Works</h2>
    </div>

    <div className="facility-process-grid">

      <div className="facility-process-card">
        <div className="process-number">1</div>

        <h3>Request Service</h3>

        <p>
          Call, WhatsApp, or book an inspection online.
        </p>
      </div>

      <div className="facility-process-card">
        <div className="process-number">2</div>

        <h3>Assessment & Quote</h3>

        <p>
          We inspect your property and send a clear Naira quote.
        </p>
      </div>

      <div className="facility-process-card">
        <div className="process-number">3</div>

        <h3>Service Delivery</h3>

        <p>
          Our trained team delivers the work, one-off or contract.
        </p>
      </div>

      <div className="facility-process-card">
        <div className="process-number">4</div>

        <h3>Ongoing Support</h3>

        <p>
          Contract clients enjoy continuous care and reporting.
        </p>
      </div>

    </div>

  </div>
</section>


{/* TRANSPARENT PRICING */}

<section className="facility-pricing">
  <div className="facility-pricing-container">

    <div className="facility-pricing-header">
      <h2>Transparent Pricing in Naira (₦)</h2>
      <p>
        Clear starting prices. Final quote depends on scope and inspection.
      </p>
    </div>

    <div className="facility-pricing-grid">

      {/* One-Off Pricing */}

      <div className="pricing-card pricing-card-left">

        <h3>
          ⚡ One-Off Services
        </h3>

        <p className="pricing-subtitle">
          Pay per job. No commitment.
        </p>

        <div className="pricing-list">

          <div className="pricing-row">
            <span>General repairs</span>
            <strong>₦20,000 – ₦150,000</strong>
          </div>

          <div className="pricing-row">
            <span>Deep cleaning</span>
            <strong>₦30,000 – ₦120,000</strong>
          </div>

          <div className="pricing-row">
            <span>AC servicing</span>
            <strong>₦15,000 – ₦50,000</strong>
          </div>

          <div className="pricing-row">
            <span>Fumigation & pest control</span>
            <strong>₦20,000 – ₦80,000</strong>
          </div>

          <div className="pricing-row pricing-row-last">
            <span>Plumbing/electrical fix</span>
            <strong>₦15,000 – ₦100,000</strong>
          </div>

        </div>

      </div>

      {/* Contract Pricing */}

      <div className="pricing-card pricing-card-right">

        <h3>
          📋 Contract-Based (Monthly)
        </h3>

        <p className="pricing-subtitle">
          Predictable monthly cost. SLA-backed.
        </p>

        <div className="pricing-list">

          <div className="pricing-row">
            <span>Private homes</span>
            <strong>₦80,000 – ₦250,000</strong>
          </div>

          <div className="pricing-row">
            <span>Residential estates</span>
            <strong>₦300,000 – ₦1,500,000+</strong>
          </div>

          <div className="pricing-row">
            <span>Commercial properties</span>
            <strong>₦150,000 – ₦1,000,000+</strong>
          </div>

          <div className="pricing-row">
            <span>Schools & hospitals</span>
            <strong>Custom quote</strong>
          </div>

          <div className="pricing-row pricing-row-last">
            <span>Retail & malls</span>
            <strong>Custom quote</strong>
          </div>

        </div>

      </div>

    </div>

    <p className="pricing-note">
      Final pricing depends on scope, property size, and inspection outcome.
    </p>

  </div>
</section>


{/* WHY CLIENTS CHOOSE US */}

<section className="facility-why">
  <div className="facility-why-container">

    <div className="facility-why-header">
      <h2>Why Clients Choose Us</h2>
    </div>

    <div className="facility-why-grid">

      <div className="facility-why-card">
        <div className="facility-why-icon">🔄</div>
        <h3>Flexible Options</h3>
        <p>One-off or contract, whichever suits your needs.</p>
      </div>

      <div className="facility-why-card">
        <div className="facility-why-icon">👷</div>
        <h3>Trained Professionals</h3>
        <p>Vetted, uniformed, and certified staff.</p>
      </div>

      <div className="facility-why-card">
        <div className="facility-why-icon">✅</div>
        <h3>Reliable & Accountable</h3>
        <p>We show up on time, every time.</p>
      </div>

      <div className="facility-why-card">
        <div className="facility-why-icon">💰</div>
        <h3>Cost-Effective</h3>
        <p>Cheaper than hiring in-house facility staff.</p>
      </div>

      <div className="facility-why-card">
        <div className="facility-why-icon">🏢</div>
        <h3>All-In-One Provider</h3>
        <p>Eight services under one roof, one invoice.</p>
      </div>

      <div className="facility-why-card">
        <div className="facility-why-icon">NG</div>
        <h3>Nigeria-Wide Coverage</h3>
        <p>Lagos, Abuja, Port Harcourt, and expanding.</p>
      </div>

    </div>

  </div>
</section>


{/* CLIENTS WE SERVE */}

<section className="facility-clients">
  <div className="facility-clients-container">

    <div className="facility-clients-header">
      <h2>Clients We Serve</h2>
      <p>Trusted across sectors and property types.</p>
    </div>

    <div className="facility-clients-grid">

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={OfficeIcon} alt="Office" />
        </div>
        <h3>Offices & Businesses</h3>
      </div>

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={EstateIcon} alt="Estate" />
        </div>
        <h3>Residential Estates</h3>
      </div>

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={HomesIcon} alt="Homes" />
        </div>
        <h3>Private Homes</h3>
      </div>

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={EduIcon} alt="Education" />
        </div>
        <h3>Schools</h3>
      </div>

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={HosIcon} alt="Hospital" />
        </div>
        <h3>Hospitals</h3>
      </div>

      <div className="facility-client-card">
        <div className="facility-client-icon">
          <img src={ShopIcon} alt="Retail" />
        </div>
        <h3>Retail Spaces</h3>
      </div>

    </div>

  </div>
</section>

    </>
  );
};

export default Facility;