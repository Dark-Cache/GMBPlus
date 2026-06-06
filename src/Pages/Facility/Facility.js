import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
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

const facilityServices = [
  {
    icon: JanIcon,
    title: "Cleaning & Janitorial",
    desc: "Daily, deep, and post-construction cleaning for any space.",
    benefit: "Healthier environment, better hygiene.",
    tag: "Homes, Estates, Offices",
  },
  {
    icon: SecureIcon,
    title: "Security Services",
    desc: "Trained guards, access control, patrol, and CCTV monitoring.",
    benefit: "24/7 safety, fewer incidents.",
    tag: "Estates, Offices, Malls",
  },
  {
    icon: FixIcon,
    title: "Electrical & Plumbing",
    desc: "Installations, fault finding, and emergency repairs.",
    benefit: "Safe systems, reduced downtime.",
    tag: "Homes, Estates, Offices",
  },
  {
    icon: AirIcon,
    title: "HVAC (Air Conditioning)",
    desc: "AC servicing, installation, repairs, and gas refills.",
    benefit: "Longer AC life, lower bills.",
    tag: "Homes, Offices, Retail",
  },
  {
    icon: WasteIcon,
    title: "Waste Management",
    desc: "Scheduled pickup, disposal, and recycling coordination.",
    benefit: "Cleaner space, LAWMA compliance.",
    tag: "Estates, Offices, Schools",
  },
  {
    icon: LandIcon,
    title: "Landscaping",
    desc: "Garden design, lawn care, tree trimming, and grounds keeping.",
    benefit: "Better curb appeal, higher property value.",
    tag: "Homes, Estates, Hotels",
  },
  {
    icon: AntIcon,
    title: "Pest Control",
    desc: "Fumigation, rodent control, and termite treatment.",
    benefit: "Healthier spaces, protected property.",
    tag: "Homes, Offices, Restaurants",
  },
  {
    icon: DoIcon,
    title: "General Repairs",
    desc: "Carpentry, painting, tiling, roofing, and handyman work.",
    benefit: "One call fixes everything.",
    tag: "Homes, Estates, Offices",
  },
];

const propertyTypes = [
  "Private Homes",
  "Residential Estates",
  "Offices & Businesses",
  "Schools & Hospitals",
  "Retail & Malls",
  "Other",
];

const Facility = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [paymentType, setPaymentType] = useState("contract");
  const [selectedPlan, setSelectedPlan] = useState("Contract-Based Service");
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [schedule, setSchedule] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setPaymentType("contract");
    setSelectedPlan("Contract-Based Service");
    setBudget("");
    setPropertyType(propertyTypes[0]);
    setSchedule("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mpqkqplv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        setIsModalOpen(false);
        setIsThankYouOpen(true);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Network error.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  return (
    <>

      {/* FACILITY SECTION */}

<section className="facility">
  <div className="facility-container">

    {/* LEFT CONTENT */}

    <div className="facility-content">

      <p className="facility-subtitle">
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
          Request A Service
        </button>

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
                  <img src={OneIcon} alt="icon" />
                </span>

              <h3>One-Off Services</h3>

              <p>
                Pay per job for urgent repairs, deep cleaning, and
                emergency fixes. Fast response, no contracts.
              </p>
            </div>

            <div className="facility-solution-card">
              <span>
                  <img src={ContractIcon} alt="icon"/>
                </span>

              <h3>Contract-Based Management</h3>

              <p>
                Monthly or annual agreements with a dedicated team
                and full SLA coverage.
              </p>
            </div>

            <div className="facility-solution-card">
              <span>
                  <img src={PropertyIcon} alt="icon" />
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
      {facilityServices.map((item, index) => (
        <div key={index} className="facility-service-card">
          <img src={item.icon} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>

          <p className="service-benefit">
            <strong>Benefits:</strong> {item.benefit}
          </p>

          <span>{item.tag}</span>

          <button
            className="facility-hire-btn"
            onClick={() => openModal(item.title)}
          >
            Hire Service
          </button>
        </div>
      ))}
    </div>

  </div>
</section>

{isModalOpen && (
  <div className="facility-modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="facility-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="facility-modal-header">
        <div>
          <h2>Hire {selectedService}</h2>
          <p className="facility-modal-subtitle">
            Choose a service type, property type, and let us know your preferred schedule.
          </p>
        </div>
        <button className="facility-modal-close" onClick={() => setIsModalOpen(false)}>
          <IoCloseSharp />
        </button>
      </div>

      <div className="facility-modal-body">
        <div className="facility-form-group facility-select-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="facility-form-group facility-select-group">
          <label>Service Option</label>
          <div className="facility-toggle-row">
            <button
              type="button"
              className={paymentType === "contract" ? "facility-toggle active" : "facility-toggle"}
              onClick={() => {
                setPaymentType("contract");
                setBudget("");
                setSelectedPlan("Contract-Based Service");
              }}
            >
              Contract-Based
            </button>
            <button
              type="button"
              className={paymentType === "oneoff" ? "facility-toggle active" : "facility-toggle"}
              onClick={() => {
                setPaymentType("oneoff");
                setSelectedPlan("One-Off Service");
              }}
            >
              One-Off
            </button>
          </div>
        </div>

        {paymentType === "contract" ? (
          <div className="facility-plan-summary">
            <p><strong>Plan:</strong> Dedicated team, regular inspections, and ongoing support.</p>
          </div>
        ) : (
          <div className="facility-plan-summary">
            <p><strong>One-off request:</strong> Fixed-scope service with a clear job quote.</p>
          </div>
        )}

        <form className="facility-modal-form" onSubmit={handleSubmit}>
          <input type="hidden" name="service" value={selectedService} required />
          <input type="hidden" name="paymentType" value={paymentType} required />
          <input type="hidden" name="plan" value={selectedPlan} required />
          <input type="hidden" name="_subject" value={`New Facility Request - ${selectedService}`} />

          <div className="facility-form-group">
            <label>Company Name / Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Company Name / Full Name"
              required
            />
          </div>

          <div className="facility-form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email.." required />
          </div>

          <div className="facility-form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter Phone Number.." required />
          </div>

          <div className="facility-form-row">
            <div className="facility-form-group">
              <label>Preferred Schedule</label>
              <input
                type="text"
                name="schedule"
                placeholder="e.g. next week, 14th June, ASAP"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                required
              />
            </div>

            <div className="facility-form-group">
              <label>Budget</label>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₦50,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>

          <div className="facility-form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us more about your property and needs."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="facility-modal-submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>
  </div>
)}

{isThankYouOpen && (
  <div className="facility-modal-overlay" onClick={() => setIsThankYouOpen(false)}>
    <div className="facility-modal-content facility-thank-you" onClick={(e) => e.stopPropagation()}>
      <button className="facility-modal-close" onClick={() => setIsThankYouOpen(false)}>
        ✕
      </button>
      <div className="facility-thank-you-icon">✓</div>
      <h2>Thank You!</h2>
      <p>Your request has been received successfully. We'll get back to you within 24 hours.</p>
      <button className="facility-thank-you-btn" onClick={() => setIsThankYouOpen(false)}>
        Close
      </button>
    </div>
  </div>
)}

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