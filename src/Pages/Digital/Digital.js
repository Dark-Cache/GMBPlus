import React, { useState, useEffect } from "react";
import "./Digital.css";

// Header images
import hero1 from "../../Assets/Digital1.jpg";
import hero2 from "../../Assets/Digital3.jpg";

// avatar
import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

// Skip icon
import fullIcon from "../../Assets/briefcase.gif"
import payIcon from "../../Assets/subscribe.gif"
import scaleIcon from "../../Assets/balance.gif"


// Hire icon
import contentIcon from "../../Assets/writing.gif"
import logoIcon from "../../Assets/logo-design.gif"
import socialIcon from "../../Assets/social-marketing.gif"
import webIcon from "../../Assets/responsive.gif"
import softIcon from "../../Assets/software.gif"
import hardIcon from "../../Assets/broken-monitor.gif"
import uiIcon from "../../Assets/responsive-design.gif"
import mobileIcon from "../../Assets/mobile-phone.gif"
import dataIcon from "../../Assets/analysis.gif"
import itIcon from "../../Assets/laptop.gif"
import supportIcon from "../../Assets/repair.gif"


// Modal cancel button
import { IoCloseSharp } from "react-icons/io5";


const services = [
  {
  icon: <img src={contentIcon} alt="icon" className="cus-icon" />,
  title: "Content Creation",
  desc: "Blog posts, product descriptions, email newsletters, and scripts written to convert.",
},
{
  icon: <img src={logoIcon} alt="icon" className="cus-icon" />,
  title: "Graphic Design",
  desc: "Logos, flyers, social media graphics, brand kits, and marketing materials.",
},
{
  icon: <img src={socialIcon} alt="icon" className="cus-icon" />,
  title: "Social Media Marketing",
  desc: "Full management of Instagram, Facebook, X, TikTok, and LinkedIn pages.",
},
{
  icon: <img src={webIcon} alt="icon" className="cus-icon" />,
  title: "Web Development",
  desc: "Responsive websites, landing pages, and web apps built for performance and growth.",
},
{
  icon: <img src={softIcon} alt="icon" className="cus-icon" />,
  title: "Software Solutions",
  desc: "Custom software systems to automate operations and improve business efficiency.",
},
{
  icon: <img src={hardIcon} alt="icon" className="cus-icon" />,
  title: "Hardware Solutions",
  desc: "Installation, setup, and maintenance of reliable hardware infrastructure.",
},
{
  icon: <img src={uiIcon} alt="icon" className="cus-icon" />,
  title: "UI/UX Design",
  desc: "Clean, intuitive designs that improve user experience and engagement.",
},
{
  icon: <img src={mobileIcon} alt="icon" className="cus-icon" />,
  title: "Mobile App Development",
  desc: "High-performance Android and iOS apps tailored to your users’ needs.",
},
{
  icon: <img src={dataIcon} alt="icon" className="cus-icon" />,
  title: "Data Analytics Solutions",
  desc: "Turn raw data into insights for smarter decisions and business growth.",
},
{
  icon: <img src={itIcon} alt="icon" className="cus-icon" />,
  title: "IT Consulting Services",
  desc: "Expert guidance to align your technology with your business goals.",
},
{
  icon: <img src={supportIcon} alt="icon" className="cus-icon" />,
  title: "IT Support & Maintenance",
  desc: "Ongoing support to keep your systems secure, updated, and running smoothly.",
}
];

const reviews = [
  {
    text: "This company delivers top-notch digital solutions, helping businesses streamline operations and scale efficiently with modern technology.",
    name: "Joy Olajide",
    role: "CTO, NovaTech Solutions",
    img: avatar1,
  },
  {
    text: "We relied on their digital expertise to modernize our systems, and the results were outstanding. Their solutions are innovative, scalable, and tailored to business needs.",
    name: "Emmanuel Okoro",
    role: "Founder & CEO, Finlytics",
    img: avatar2,
  },
  {
    text: "From web development to automation, their digital solutions significantly improved our business processes and online presence.",
    name: "Sofia Adeoye",
    role: "Operations Manager, BrightEdge",
    img: avatar1,
  },
];

const Digital = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const [entryType, setEntryType] = useState(""); // "service" or "plan"
  const [paymentType, setPaymentType] = useState("subscription");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [budget, setBudget] = useState("");

   // ✅ FIXED: handleSubmit OUTSIDE useEffect
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
        setIsSubmitted(true);
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
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

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
    <section className="digital">

      {/* TOP */}
      <div className="digital-top">
        <div className="digital-header">
          <h1>
            Powering Progress <br />
            Through Technology
          </h1>

          <div className="digital-right">
            <p>
              We provide innovative, secure, and scalable IT services that solve
              real problems and drive measurable results.
            </p>

            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="digital-grid">
        <div className="digital-img">
          <img src={hero1} alt="" />
        </div>

        <div className="digital-card">
          <p>Satisfied Customers</p>
          <h2>5k+</h2>

          <div className="avatars">
            <span><img src={avatar1} alt="" /></span>
            <span><img src={avatar2} alt="" /></span>
            <span><img src={avatar1} alt="" /></span>
            <span className="plus">+</span>
          </div>
        </div>

        <div className="digital-img">
          <img src={hero2} alt="" />
        </div>
      </div>

        {/* SUBSCRIPTION SECTION */}
<div className="digital-subscribe">
  <div className="digital-subscribe-header">
    <h2>
      Skip the Hiring Headache. Subscribe to a Full Digital Team.
    </h2>

    <p>
      Running a business in Nigeria is already demanding. You shouldn't have
      to juggle recruiting designers, developers, marketers, and IT staff
      just to stay competitive. We give you all of that on a flexible plan.
    </p>
  </div>

  <div className="digital-subscribe-grid">
    <div className="digital-subscribe-card">
      <div className="sub-icon"> 
            <img src={fullIcon} alt="icon" />
        </div>
      <h3>No Full-Time Staff Needed</h3>
      <p>
        Access specialists across six disciplines without salaries, pensions,
        or office space.
      </p>
    </div>

    <div className="digital-subscribe-card">
      <div className="sub-icon">
            <img src={payIcon} alt="icon" />
      </div>
      <h3>Subscribe or Pay-As-You-Go</h3>
      <p>
        Choose a monthly plan for ongoing support, or request one-time services
        when you need them.
      </p>
    </div>

    <div className="digital-subscribe-card">
      <div className="sub-icon">
            <img src={scaleIcon} alt="icon" />
      </div>
      <h3>Scales With Your Business</h3>
      <p>
        Upgrade, downgrade, or pause anytime. Built for SMEs, startups, and
        growing brands.
      </p>
    </div>
  </div>
</div>

      {/* SERVICES */}
      <div className="hire">
        <div className="hire-header">
          <h2>Comprehensive Solutions, All in One Place</h2>

          <p className="hire-desc">
            From cloud infrastructure to cybersecurity and software development.
          </p>
        </div>

        <div className="hire-grid">
          {services.map((item, index) => (
            <div className="hire-card" key={index}>
              <div className="hire-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div
  className="hire-read-more"
  onClick={() => {
    setSelectedService(item.title);
    setEntryType("service");

    setPaymentType("subscription");
    setSelectedPlan("");
    setBudget("");

    setIsModalOpen(true);
  }}
>
  <span>+</span>
  <p>Hire</p>
</div>
            </div>
          ))}
        </div>
      </div>


            {/* PLANS SECTION */}
<div className="digital-plans">

  {/* HEADER */}
  <div className="plans-header">
    <h2>Simple, Transparent Pricing</h2>
    <p>All prices in Nigerian Naira (₦). No hidden fees.</p>
  </div>

  <div className="plans-grid">

    {/* BASIC */}
    <div className="plan-card">
      <h4>BASIC PLAN</h4>

      <h2>₦50,000 <span>– ₦80,000/mo</span></h2>

      <p>
        Perfect for small businesses and solo founders starting out.
      </p>

      <ul>
        <li>✓ Up to 5 requests per month</li>
        <li>✓ Standard delivery (3–5 days)</li>
        <li>✓ Email support</li>
        <li>✓ Access to 2 service categories</li>
        <li>✓ 1 revision per task</li>
      </ul>

          <button
  onClick={() => {
    setEntryType("plan");
    setSelectedPlan("Basic Plan");
    setSelectedService("");

    setPaymentType("subscription");
    setBudget("");

    setIsModalOpen(true);
  }}
>
  Choose Basic
</button>
    </div>

    {/* STANDARD */}
    <div className="plan-card popular">
      <div className="popular-tag">MOST POPULAR</div>

      <h4>STANDARD PLAN</h4>

      <h2>₦100,000 <span>– ₦150,000/mo</span></h2>

      <p>
        For growing SMEs and brands that need consistent output.
      </p>

      <ul>
        <li>✓ Up to 15 requests per month</li>
        <li>✓ Faster delivery (1–3 days)</li>
        <li>✓ Priority WhatsApp & email support</li>
        <li>✓ Access to 4 service categories</li>
        <li>✓ 3 revisions per task</li>
        <li>✓ Monthly performance report</li>
      </ul>

      <button
  className="primary"
  onClick={() => {
    setEntryType("plan");
    setSelectedPlan("Standard Plan");
    setSelectedService("");

    setPaymentType("subscription");
    setBudget("");

    setIsModalOpen(true);
  }}
>
  Choose Standard
</button>
    </div>

    {/* PREMIUM */}
    <div className="plan-card">
      <h4>PREMIUM PLAN</h4>

      <h2>₦200,000+ <span>/mo</span></h2>

      <p>
        For established businesses needing a full outsourced team.
      </p>

      <ul>
        <li>✓ Unlimited / high-volume requests</li>
        <li>✓ Fastest delivery (24–48 hrs)</li>
        <li>✓ Dedicated account manager</li>
        <li>✓ All service categories</li>
        <li>✓ Unlimited revisions</li>
        <li>✓ Strategy calls & quarterly reviews</li>
      </ul>

      <button
  onClick={() => {
    setEntryType("plan");
    setSelectedPlan("Premium Plan");
    setSelectedService("");

    setPaymentType("subscription");
    setBudget("");

    setIsModalOpen(true);
  }}
>
  Choose Premium
</button>
    </div>

  </div>
</div>

            {/* PRICING SECTION */}
<div className="digital-pricing">
  <div className="digital-pricing-header">
    <h2>One-Off Service Pricing</h2>
    <p>Not ready for a subscription? Pay only for what you need.</p>
  </div>

  <div className="digital-pricing-table">
    <div className="pricing-row pricing-head">
      <span>Service</span>
      <span>Starting Price</span>
      <span>Typical Range</span>
    </div>

    <div className="pricing-row">
      <span>Content Creation (per article/piece)</span>
      <span>₦20,000</span>
      <span>₦20,000 – ₦60,000</span>
    </div>

    <div className="pricing-row">
      <span>Graphic Design (logo, flyer, brand kit)</span>
      <span>₦25,000</span>
      <span>₦25,000 – ₦100,000</span>
    </div>

    <div className="pricing-row">
      <span>Social Media Campaign (one-off)</span>
      <span>₦40,000</span>
      <span>₦40,000 – ₦120,000</span>
    </div>

    <div className="pricing-row">
      <span>Website Development</span>
      <span>₦80,000</span>
      <span>₦80,000 – ₦600,000+</span>
    </div>

    <div className="pricing-row">
      <span>Custom Software / App</span>
      <span>₦150,000</span>
      <span>₦150,000 – ₦1.5M+</span>
    </div>

    <div className="pricing-row">
      <span>Hardware Setup & Installation</span>
      <span>₦30,000</span>
      <span>₦30,000 – ₦500,000</span>
    </div>
  </div>
</div>

      {/* REVIEW */}
      <div className="review">
        <div className="review-header">
          <div>
            <h2>Reviews That Speak Volumes</h2>
          </div>

          <p>
            Hear how our technology solutions have transformed operations,
            improved efficiency, and driven growth.
          </p>
        </div>

        <div className="review-grid">
          {reviews.map((item, index) => (
            <div className="review-card" key={index}>
              <div className="stars">★★★★★</div>

              <p className="review-text">"{item.text}"</p>

              <div className="review-user">
                <img src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* MODAL */}
{isModalOpen && (
  <div
    className="digital-modal-overlay"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="digital-modal-content digital-form-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* ================= HEADER (STICKY) ================= */}
      <div className="digital-modal-header">
          <div>
  <h2>
    {entryType === "plan"
      ? "Hire Us"
      : selectedService}
  </h2>
</div>

        <button
          className="digital-modal-close"
          onClick={() => setIsModalOpen(false)}
        >
          <IoCloseSharp />
        </button>
      </div>

      {/* ================= BODY (SCROLLABLE) ================= */}
      <div className="digital-modal-body">

        

        {/* ================= PAYMENT SECTION ================= */}
        <div className="payment-section">

  {entryType === "plan" && (
  <div className="service-selection">
    <p className="service-label">Select Service</p>

    <div className="service-options">
      {services.map((item, index) => (
        <div
          key={index}
          className={`service-option ${
            selectedService === item.title ? "active" : ""
          }`}
          onClick={() => setSelectedService(item.title)}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
)}

          {/* PAYMENT TYPE */}
          <div className="payment-type">
            <p>Select Payment Type</p>

            <div className="payment-toggle">
              <div
                className={`toggle-option ${paymentType === "subscription" ? "active" : ""}`}
                onClick={() => {
                  setPaymentType("subscription");
                  setBudget("");
                }}
              >
                Subscription Plan
              </div>

              <div
                className={`toggle-option ${paymentType === "oneoff" ? "active" : ""}`}
                onClick={() => {
                  setPaymentType("Oneoff");
                  setSelectedPlan("");
                }}
              >
                One-Off Service
              </div>
            </div>
          </div>

          {/* SUBSCRIPTION PLANS */}
          {paymentType === "subscription" && (
            <div className="plan-options">

              <div
                className={`plan-option ${selectedPlan === "Basic Plan" ? "active" : ""}`}
                onClick={() => setSelectedPlan("Basic Plan")}
              >
                <h4>Basic Plan</h4>
                <p className="price">₦50k – ₦80k/mo</p>
                <ul>
                  <li>Up to 5 requests</li>
                  <li>Email support</li>
                </ul>
              </div>

              <div
                className={`plan-option ${selectedPlan === "Standard Plan" ? "active" : ""}`}
                onClick={() => setSelectedPlan("Standard Plan")}
              >
                <h4>Standard Plan</h4>
                <p className="price">₦100k – ₦150k/mo</p>
                <ul>
                  <li>Up to 15 requests</li>
                  <li>Priority support</li>
                </ul>
              </div>

              <div
                className={`plan-option ${selectedPlan === "Premium Plan" ? "active" : ""}`}
                onClick={() => setSelectedPlan("Premium Plan")}
              >
                <h4>Premium Plan</h4>
                <p className="price">₦200k+/mo</p>
                <ul>
                  <li>Unlimited requests</li>
                  <li>Dedicated manager</li>
                </ul>
              </div>

            </div>
          )}

          {/* ONE-OFF */}
          {paymentType === "oneoff" && (
            <div className="oneoff-section">
              <p className="budget-label">Enter Your Budget</p>

              <input
                type="text"
                placeholder="e.g ₦50,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          )}

           {/* SUCCESS MESSAGE */}
              {isSubmitted && (
                <p className="success-msg">
                  ✅ Message sent successfully!
                </p>
              )}


        </div>

        {/* ================= FORM ================= */}
        <form className="digital-modal-form" onSubmit={handleSubmit}>
        

          {/* Hidden Fields */}
          <input type="hidden" name="service" value={selectedService} required />
          <input type="hidden" name="paymentType" value={paymentType} required />
          <input type="hidden" name="plan" value={selectedPlan} required />
          <input type="hidden" name="budget" value={budget} />

          <input
                type="hidden"
                name="_subject"
                value={`New Request - ${selectedService || selectedPlan}`} />

              <input
                type="hidden"
                name="_replyto"
                value="" />

          <div className="digital-form-row">
            <div className="digital-form-group">
              <label>Company Name/Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Company Name/Full Name"
                required
              />
            </div>
          </div>

          <div className="digital-form-group">
            <label>Email</label>
            <input 
            type="email" 
            name="email"
            placeholder="Enter Email.." 
            required />
          </div>

          <div className="digital-form-group">
            <label>Phone Number</label>
            <input 
            type="text" 
            name="phone"
            placeholder="Enter Number.." 
            required
            />
          </div>

          <div className="digital-form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" 
                  className="digital-modal-submit"
                  disabled={isLoading}
                  >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </div>
  </div>
)}

{/* THANK YOU MODAL */}
{isThankYouOpen && (
  <div
    className="digital-modal-overlay"
    onClick={() => setIsThankYouOpen(false)}
  >
    <div
      className="digital-modal-content thank-you-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="digital-modal-close"
        onClick={() => setIsThankYouOpen(false)}
      >
        ✕
      </button>

      <div className="thank-you-icon">✓</div>

      <h2>Thank You!</h2>

      <p>
        Your request has been received successfully. We'll get back to you within 24 hours.
      </p>

      <button
        className="thank-you-btn"
        onClick={() => setIsThankYouOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Digital;