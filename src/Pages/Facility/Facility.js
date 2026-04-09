import React from "react";
import "./Facility.css";
import { Link } from "react-router-dom";

// Header Image
import firstPic from "../../Assets/Cleanman.jpg";
import thirdPic from "../../Assets/Cleanerbend.jpg";

// Icon
import trustIcon from "../../Assets/shield.gif";
import fistIcon from "../../Assets/fist-bump.gif";
import proIcon from "../../Assets/protection.gif";

// 
import service1 from "../../Assets/Officeclean.jpg";
import service2 from "../../Assets/EffHome.jpg";
import service3 from "../../Assets/Glassclean.jpg";
import service4 from "../../Assets/ExpertConst.jpg";

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
      <img src={service2} alt="Cleaning service" />
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
    <p>✨ Our Cleaning Services</p>
    <h2>Professional Cleaning Solutions</h2>
  </div>

  {[
    {
      title: "Commercial & Office Cleaning",
      img: service1,
      description:
        "Keep your workspace clean, organized, and productive with our tailored office cleaning solutions designed for businesses of all sizes.",
      tags: ["#OfficeCleaning", "#WorkplaceHygiene", "#ProductiveSpace"]
    },
    {
      title: "Move-In / Move-Out Cleaning",
      img: service2,
      description:
        "Enjoy a fresh start or leave a lasting impression with our detailed move-in and move-out cleaning services for a spotless transition.",
      tags: ["#MoveInCleaning", "#MoveOutCleaning", "#FreshStart"]
    },
    {
      title: "Window & Glass Cleaning",
      img: service3,
      description:
        "Achieve crystal-clear views with our streak-free window and glass cleaning that removes dirt, smudges, and buildup.",
      tags: ["#GlassCleaning", "#StreakFree", "#ClearView"]
    },
    {
      title: "Post-Construction Cleaning",
      img: service4,
      description:
        "We transform construction sites into clean, safe, and ready-to-use spaces by removing dust, debris, and residues.",
      tags: ["#PostConstruction", "#DeepCleaning", "#SiteCleanup"]
    }
  ].map((item, index) => (
    <div className="clean-row" key={index}>

      <div className="clean-left">
        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="clean-tags">
          {item.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <Link to="/contact">
          <button className="clean-btn">Request</button>
        </Link>
      </div>

      <div className="clean-image">
        <img src={item.img} alt={item.title} />
      </div>

    </div>
  ))}

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