import React from "react";
import "./Facility.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Header Image
import firstPic from "../../Assets/Cleanman.jpg";
import secondPic from "../../Assets/OfficeCleanNew.jpg";
import thirdPic from "../../Assets/Cleanerbend.jpg";

// Icon
import trustIcon from "../../Assets/shield.gif";
import fistIcon from "../../Assets/fist-bump.gif";
import proIcon from "../../Assets/protection.gif";

// 
import service1 from "../../Assets/Officeclean.jpg";
import service2 from "../../Assets/Movein.jpg";
import service3 from "../../Assets/GlassWash.jpg";
import service4 from "../../Assets/PostConst.jpg";
import service5 from "../../Assets/Fumigate.jpg";
import service6 from "../../Assets/JanSuply.jpg";
import service7 from "../../Assets/CarpetWash.jpg";

/* WORK PROCESS IMAGES */
import work1 from "../../Assets/Tech6.jpg";
import work2 from "../../Assets/Cleanhero.jpg";
import work3 from "../../Assets/Facility.jpg";
import work4 from "../../Assets/FinalCheck.jpg";

// REVIEWS
import review1 from "../../Assets/HC1.jpg";
import review2 from "../../Assets/HC2.jpg";
import review3 from "../../Assets/HC3.jpg";

const Facility = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ================= HERO SECTION ================= */}
<section className="facility">

  {/* TOP CONTENT */}
  <div className="facility-top">

    <div className="facility-left">
      <h1>
        Spotless Spaces <br />
        Sparkling Results
      </h1>
    </div>

    <div className="facility-right">
      <p>
        We deliver professional cleaning services designed to keep your home
        and workspace fresh, hygienic, and welcoming every day.
      </p>

      <Link to="/contact">
        <button className="facility-btn">
          Book Cleaning Now
        </button>
      </Link>
    </div>

  </div>

  {/* BOTTOM CARDS */}
  <div className="facility-cards">

    <div className="facility-card-a">
      <img src={firstPic} alt="Cleaning team" />
    </div>

    <div className="facility-card-b">
      <img src={secondPic} alt="Cleaning service" />
    </div>

    <div className="facility-card-c">
      <img src={thirdPic} alt="Cleaning service" />
    </div>

  </div>

</section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="fac-about-section">
        <div className="fac-about-container">

          <div className="fac-about-header">
            <div>
              {/* <p className="fac-about-tag">✨</p> */}
              <h2>
                We believe a clean space <br />
                creates a happier and healthier life.
              </h2>
            </div>
          </div>

          <div className="fac-about-cards">

            <div className="fac-about-card">
              <img className="fac-card-icon" src={trustIcon} alt="service" />
              <h4>Built on Trust, Powered by Service</h4>
            </div>

            <div className="fac-about-card">
              <img className="fac-card-icon" src={fistIcon} alt="service" />
              <h4>Making Clean Spaces Our Promise</h4>
            </div>

            <div className="fac-about-card">
              <img className="fac-card-icon" src={proIcon} alt="service" />
              <h4>Your Trusted Cleaning Experts</h4>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CLEAN SERVICES SECTION ================= */}
      <section className="clean-section">

  <div className="clean-header">
    <div className="clean-header-left">
      <p>✨ Our Cleaning Services</p>
      <h2>Professional Cleaning Solutions</h2>
    </div>
    <div className="clean-header-right">
      <p>From offices and homes to post-construction sites and pest control — we deliver expert cleaning solutions tailored to every need.</p>
    </div>
  </div>

  <div className="clean-list">
    {[
      { title: "Commercial & Office Cleaning", img: service1, slug: "commercial-office-cleaning", desc: "Tailored office cleaning solutions for businesses of all sizes — desks, floors, restrooms, and common areas handled on your schedule.", tags: ["Office", "Corporate", "Daily/Weekly"] },
      { title: "Move-In / Move-Out Cleaning", img: service2, slug: "move-in-move-out-cleaning", desc: "Deep cleaning for a spotless transition. Every room, cupboard, bathroom, and surface covered for handover or occupation.", tags: ["Residential", "Landlords", "Tenants"] },
      { title: "Window & Glass Cleaning", img: service3, slug: "window-glass-cleaning", desc: "Streak-free results for interior and exterior windows, glass partitions, shopfronts, and high-rise glazing.", tags: ["Commercial", "High-Rise", "Shopfronts"] },
      { title: "Post-Construction Cleaning", img: service4, slug: "post-construction-cleaning", desc: "We remove dust, debris, paint splatters, and construction residue — transforming sites into clean, move-in ready spaces.", tags: ["Construction", "Renovation", "Site Cleanup"] },
      { title: "Fumigation & Pest Control", img: service5, slug: "fumigation-pest-control", desc: "WHO-approved treatments for cockroaches, rodents, termites, bedbugs, and more. 30-day satisfaction guarantee.", tags: ["Residential", "Commercial", "Warehouses"] },
      { title: "Janitorial Supply", img: service6, slug: "janitorial-supply", desc: "Scheduled supply of cleaning chemicals, paper products, hygiene consumables, and equipment for your facility.", tags: ["Offices", "Hotels", "Hospitals"] },
      { title: "Carpet & Upholstery Cleaning", img: service7, slug: "carpet-upholstery-cleaning", desc: "Professional steam and dry cleaning for carpets, sofas, rugs, and curtains. Removes stains, odours, and allergens.", tags: ["Residential", "Hotels", "Event Centres"] },
    ].map((item, i) => (
      <div className="clean-list-item" key={i}>
        <div className="clean-list-num">{String(i + 1).padStart(2, "0")}</div>
        <div className="clean-list-img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="clean-list-text">
          <div className="clean-list-tags">
            {item.tags.map((tag, j) => <span key={j}>{tag}</span>)}
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
        <button className="clean-list-btn" onClick={() => navigate(`/facility/${item.slug}`)}> Book Now</button>
      </div>
    ))}
  </div>

</section>

      {/* ================= WORK PROCESS SECTION ================= */}
      <section className="do-section">

        <div className="do-container">

          <p className="do-tag">⚡ How It Work</p>

          <div className="do-left">

            <h2>
              Our Cleaning Process <br />
              Simple Steps To A <br />
              Spotless Space
            </h2>

            <div className="do-steps">
              <span className="active">01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>

            <div className="do-right">

            <div className="do-card">
              <img src={work1} alt="" />
              <h4>Book Your Cleaning</h4>
              <p>
                Schedule your service online or by phone. Choose the time, date,
                and type of cleaning that suits your need 
              </p>
            </div>

            <div className="do-card">
              <img src={work2} alt="" />
              <h4>We Arrive & Inspect</h4>
              <p>
                Our professional team arrives on time. Inspect your space, and prepare
                all the required cleaning supplies. 
              </p>
            </div>

            <div className="do-card">
              <img src={work3} alt="" />
              <h4>Deep Cleaning Begins</h4>
              <p>
                We clean every corner with care. Dusting, vacuuming, mopping, and sanitizing 
                to ensure a spotless environment.
              </p>
            </div>

            <div className="do-card">
              <img src={work4} alt="" />
              <h4>Final Check & Satisfaction</h4>
              <p>
                We perform a final walkthrough to ensure everything meets your expectation.
                Your satisfaction is our priority.
              </p>
            </div>

          </div>
            

          </div>


        </div>

      </section>

      {/* ================= FACILITY REVIEW ================= */}
<section className="facility-review">

  <p className="facility-review-tag">✨ Testimonials</p>
  <h2>What Our Clients Say</h2>

  <div className="facility-review-grid">

    <div className="facility-review-card">
      <div className="facility-stars">★★★★★</div>

      <p>
        "Hands down best cleaning service we've ever used! My home has never
        looked this immaculate. Professional, friendly, and efficient."
      </p>

      <div className="facility-user">
        <img src={review1} alt="" />
        <div>
          <h4> Jide Johnson </h4>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>

    <div className="facility-review-card">
      <div className="facility-stars">★★★★★</div>

      <p>
        "Our office has never felt more welcoming! The team is thorough,
        reliable, and detail-oriented. Highly recommended!"
      </p>

      <div className="facility-user">
        <img src={review2} alt="" />
        <div>
          <h4> Ayomide Bolaji </h4>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>

    <div className="facility-review-card">
      <div className="facility-stars">★★★★★</div>

      <p>
        "Moving out was stressful, but this cleaning crew made it effortless.
        Every nook and cranny was spotless."
      </p>

      <div className="facility-user">
        <img src={review3} alt="" />
        <div>
          <h4>Temitope Ojo</h4>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>

  </div>

</section>

    </>
  );
};

export default Facility;