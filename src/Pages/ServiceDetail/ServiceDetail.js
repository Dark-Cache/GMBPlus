import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import "./ServiceDetail.css";

import contentIcon from "../../Assets/writing.gif";
import logoIcon from "../../Assets/logo-design.gif";
import socialIcon from "../../Assets/social-marketing.gif";
import webIcon from "../../Assets/responsive.gif";
import softIcon from "../../Assets/software.gif";
import hardIcon from "../../Assets/broken-monitor.gif";
import uiIcon from "../../Assets/responsive-design.gif";
import mobileIcon from "../../Assets/mobile-phone.gif";
import dataIcon from "../../Assets/analysis.gif";
import itIcon from "../../Assets/laptop.gif";
import supportIcon from "../../Assets/repair.gif";

const allServices = [
  { slug: "content-creation", title: "Content Creation", icon: contentIcon },
  { slug: "graphic-design", title: "Graphic Design", icon: logoIcon },
  { slug: "social-media-marketing", title: "Social Media Marketing", icon: socialIcon },
  { slug: "web-development", title: "Web Development", icon: webIcon },
  { slug: "software-solutions", title: "Software Solutions", icon: softIcon },
  { slug: "hardware-solutions", title: "Hardware Solutions", icon: hardIcon },
  { slug: "ui-ux-design", title: "UI/UX Design", icon: uiIcon },
  { slug: "mobile-app-development", title: "Mobile App Development", icon: mobileIcon },
  { slug: "business-solutions", title: "Business Solutions", icon: dataIcon },
  { slug: "data-analytics-solutions", title: "Data Analytics Solutions", icon: dataIcon },
  { slug: "it-consulting-services", title: "IT Consulting Services", icon: itIcon },
  { slug: "it-support-maintenance", title: "IT Support & Maintenance", icon: supportIcon },
];

const serviceData = {
  "content-creation": {
    icon: contentIcon,
    title: "Content Creation",
    tagline: "Words that convert, stories that stick.",
    description: "We craft compelling blog posts, product descriptions, email newsletters, and video scripts tailored to your brand voice. Every piece is written to engage your audience and drive measurable results.",
    features: ["SEO-optimised blog articles", "Product & service descriptions", "Email newsletter campaigns", "Video & podcast scripts", "Social media captions"],
    price: "From ₦20,000 per piece",
    steps: [
      { num: "01", title: "Brief", desc: "You share your brand, audience, and goals." },
      { num: "02", title: "Research", desc: "We research your topic, competitors, and keywords." },
      { num: "03", title: "Draft", desc: "We write and send the first draft for your review." },
      { num: "04", title: "Deliver", desc: "We apply feedback and deliver the final piece." },
    ],
    testimonial: { text: "Their content team completely transformed our blog. Traffic doubled in 3 months and our leads improved significantly.", name: "Tunde Adeyemi", role: "Marketing Director, BrandPulse" },
    faqs: [
      { q: "How long does each piece take?", a: "Standard articles take 2–3 business days. Longer pieces or campaigns may take up to 5 days." },
      { q: "Do you handle SEO?", a: "Yes, all blog content is optimised for search engines with proper keyword research and structure." },
      { q: "Can I request revisions?", a: "Absolutely. We offer up to 2 revisions per piece to ensure you're fully satisfied." },
      { q: "Do you write for any industry?", a: "Yes, we have writers across tech, finance, health, real estate, and more." },
    ],
    related: ["graphic-design", "social-media-marketing", "web-development"],
  },
  "graphic-design": {
    icon: logoIcon,
    title: "Graphic Design",
    tagline: "Visuals that make your brand unforgettable.",
    description: "From logos to full brand kits, our designers create stunning visuals that communicate your identity across every touchpoint — print, digital, and beyond.",
    features: ["Logo & brand identity design", "Flyers, banners & posters", "Social media graphics", "Pitch deck & presentation design", "Packaging & merchandise design"],
    price: "From ₦25,000",
    steps: [
      { num: "01", title: "Discovery", desc: "We learn your brand, style preferences, and goals." },
      { num: "02", title: "Concept", desc: "We create 2–3 initial design concepts for you to choose from." },
      { num: "03", title: "Refine", desc: "We refine your chosen concept based on your feedback." },
      { num: "04", title: "Deliver", desc: "Final files delivered in all required formats." },
    ],
    testimonial: { text: "The logo they designed for us perfectly captured our brand identity. We've received so many compliments from clients.", name: "Amaka Obi", role: "CEO, Luminary Brands" },
    faqs: [
      { q: "What file formats will I receive?", a: "You'll receive PNG, JPG, SVG, and PDF formats — ready for both print and digital use." },
      { q: "How many concepts do I get?", a: "We provide 2–3 initial concepts, then refine your preferred direction." },
      { q: "Do you offer brand guidelines?", a: "Yes, full brand kits include a guidelines document covering colours, fonts, and usage rules." },
      { q: "How long does a logo take?", a: "Typically 3–5 business days from brief to final delivery." },
    ],
    related: ["content-creation", "social-media-marketing", "ui-ux-design"],
  },
  "social-media-marketing": {
    icon: socialIcon,
    title: "Social Media Marketing",
    tagline: "Grow your audience, build your brand.",
    description: "We manage your Instagram, Facebook, X (Twitter), TikTok, and LinkedIn pages end-to-end — from strategy and content creation to scheduling, engagement, and analytics.",
    features: ["Full page management", "Content calendar & scheduling", "Paid ad campaigns", "Community engagement", "Monthly performance reports"],
    price: "From ₦40,000 per campaign",
    steps: [
      { num: "01", title: "Audit", desc: "We review your current social presence and competitors." },
      { num: "02", title: "Strategy", desc: "We build a content and growth strategy tailored to your brand." },
      { num: "03", title: "Execute", desc: "We create, schedule, and post content consistently." },
      { num: "04", title: "Report", desc: "Monthly reports with insights and next steps." },
    ],
    testimonial: { text: "Our Instagram following grew by 4,000 in two months. The content quality and consistency has been outstanding.", name: "Chisom Eze", role: "Founder, GlowUp Beauty" },
    faqs: [
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, X (Twitter), TikTok, and LinkedIn." },
      { q: "Do you run paid ads?", a: "Yes, paid ad campaigns are available as an add-on or within select plans." },
      { q: "How many posts per week?", a: "Depending on your plan, between 3–7 posts per week per platform." },
      { q: "Will I approve content before it goes live?", a: "Yes, we share a content calendar for your approval before scheduling." },
    ],
    related: ["content-creation", "graphic-design", "business-solutions"],
  },
  "web-development": {
    icon: webIcon,
    title: "Web Development",
    tagline: "Fast, responsive websites built to grow.",
    description: "We build modern, mobile-first websites and web applications that are optimised for speed, SEO, and conversions — whether it's a landing page or a full-scale web platform.",
    features: ["Business & portfolio websites", "E-commerce stores", "Landing pages", "Web app development", "CMS integration (WordPress, etc.)"],
    price: "From ₦80,000",
    steps: [
      { num: "01", title: "Discovery", desc: "We understand your goals, audience, and requirements." },
      { num: "02", title: "Design", desc: "We create wireframes and visual designs for your approval." },
      { num: "03", title: "Build", desc: "We develop the site with clean, performant code." },
      { num: "04", title: "Launch", desc: "We test, optimise, and deploy your site live." },
    ],
    testimonial: { text: "They built our e-commerce site in under 3 weeks. It's fast, beautiful, and our sales have increased by 60% since launch.", name: "Emeka Nwosu", role: "Owner, ShopNaija" },
    faqs: [
      { q: "How long does a website take?", a: "A standard business website takes 1–3 weeks. Complex web apps may take longer." },
      { q: "Do you handle hosting and domain?", a: "We can assist with setup, though hosting costs are separate and billed to you directly." },
      { q: "Will my site be mobile-friendly?", a: "Yes, all our websites are fully responsive across all screen sizes." },
      { q: "Can I update the site myself?", a: "Yes, we can integrate a CMS so you can manage content without coding." },
    ],
    related: ["ui-ux-design", "software-solutions", "mobile-app-development"],
  },
  "software-solutions": {
    icon: softIcon,
    title: "Software Solutions",
    tagline: "Custom software that works the way you do.",
    description: "We design and develop bespoke software systems to automate your operations, reduce manual work, and improve overall business efficiency — built specifically for your workflows.",
    features: ["Business process automation", "ERP & CRM systems", "Inventory management software", "Custom dashboards & portals", "API integrations"],
    price: "From ₦150,000",
    steps: [
      { num: "01", title: "Requirements", desc: "We document your workflows and software needs in detail." },
      { num: "02", title: "Architecture", desc: "We design the system structure and get your sign-off." },
      { num: "03", title: "Development", desc: "We build in sprints with regular progress updates." },
      { num: "04", title: "Deploy & Train", desc: "We deploy, test, and train your team on the system." },
    ],
    testimonial: { text: "The inventory system they built saved us hours of manual work every day. It paid for itself within the first month.", name: "Bola Fashola", role: "Operations Manager, StockPro Nigeria" },
    faqs: [
      { q: "How long does custom software take?", a: "Depending on complexity, between 4–16 weeks from requirements to delivery." },
      { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance and support packages post-launch." },
      { q: "Can you integrate with our existing tools?", a: "Yes, we build API integrations with most third-party platforms." },
      { q: "Is the source code ours?", a: "Yes, upon full payment you own all source code and assets." },
    ],
    related: ["web-development", "data-analytics-solutions", "it-consulting-services"],
  },
  "hardware-solutions": {
    icon: hardIcon,
    title: "Hardware Solutions",
    tagline: "Reliable infrastructure, expertly installed.",
    description: "We supply, install, configure, and maintain hardware infrastructure for businesses — from workstations and servers to networking equipment and CCTV systems.",
    features: ["Workstation & server setup", "Network infrastructure", "CCTV & access control", "Hardware procurement", "Preventive maintenance"],
    price: "From ₦30,000",
    steps: [
      { num: "01", title: "Assessment", desc: "We visit your site and assess your hardware needs." },
      { num: "02", title: "Procurement", desc: "We source quality hardware at competitive prices." },
      { num: "03", title: "Installation", desc: "Our engineers install and configure all equipment." },
      { num: "04", title: "Handover", desc: "We test everything and hand over with full documentation." },
    ],
    testimonial: { text: "They set up our entire office network and CCTV system in one day. Professional, fast, and everything works perfectly.", name: "Ngozi Okafor", role: "Admin Manager, PrimeCorp" },
    faqs: [
      { q: "Do you supply the hardware or do we?", a: "We can procure on your behalf or work with hardware you've already purchased." },
      { q: "Do you offer maintenance contracts?", a: "Yes, we offer monthly and annual maintenance plans for all installed systems." },
      { q: "What areas do you cover?", a: "We currently cover Lagos and Abuja, with remote support available nationwide." },
      { q: "How quickly can you respond to hardware failures?", a: "We offer same-day or next-day on-site response for maintenance contract clients." },
    ],
    related: ["it-support-maintenance", "it-consulting-services", "software-solutions"],
  },
  "ui-ux-design": {
    icon: uiIcon,
    title: "UI/UX Design",
    tagline: "Designs users love to interact with.",
    description: "We create clean, intuitive interfaces backed by user research and testing — ensuring every product we design is both beautiful and easy to use.",
    features: ["User research & personas", "Wireframing & prototyping", "Mobile & web UI design", "Usability testing", "Design system creation"],
    price: "From ₦60,000",
    steps: [
      { num: "01", title: "Research", desc: "We study your users, competitors, and product goals." },
      { num: "02", title: "Wireframe", desc: "We map out the structure and user flows." },
      { num: "03", title: "Design", desc: "We create high-fidelity visual designs for your review." },
      { num: "04", title: "Handoff", desc: "We deliver design files ready for development." },
    ],
    testimonial: { text: "Our app's user retention improved by 40% after their UX redesign. They truly understand how users think.", name: "Seun Alade", role: "Product Lead, FinTrack App" },
    faqs: [
      { q: "What tools do you design in?", a: "We primarily use Figma, with deliverables compatible with all major dev handoff tools." },
      { q: "Do you do user testing?", a: "Yes, usability testing is included in our full UX packages." },
      { q: "Can you work with an existing design system?", a: "Absolutely, we can extend or improve your existing design system." },
      { q: "Do you work with developers?", a: "Yes, we collaborate closely with dev teams to ensure accurate implementation." },
    ],
    related: ["web-development", "mobile-app-development", "graphic-design"],
  },
  "mobile-app-development": {
    icon: mobileIcon,
    title: "Mobile App Development",
    tagline: "Apps your users will actually use.",
    description: "We build high-performance Android and iOS applications tailored to your users' needs — from MVPs to full-featured consumer and enterprise apps.",
    features: ["Android & iOS development", "Cross-platform apps (React Native)", "App Store & Play Store deployment", "Push notifications & analytics", "Ongoing maintenance & updates"],
    price: "From ₦200,000",
    steps: [
      { num: "01", title: "Discovery", desc: "We define your app's features, users, and technical scope." },
      { num: "02", title: "Design", desc: "We design the UI/UX and get your approval." },
      { num: "03", title: "Build", desc: "We develop the app with regular demo sessions." },
      { num: "04", title: "Launch", desc: "We submit to app stores and support your go-live." },
    ],
    testimonial: { text: "They delivered our MVP in 6 weeks. The app is smooth, well-designed, and our users love it.", name: "Dayo Martins", role: "Co-founder, RideEasy" },
    faqs: [
      { q: "Do you build for both Android and iOS?", a: "Yes, we build native and cross-platform apps for both platforms." },
      { q: "How long does an app take to build?", a: "An MVP typically takes 6–10 weeks. Full-featured apps may take 3–6 months." },
      { q: "Do you handle App Store submission?", a: "Yes, we manage the full submission process for both Google Play and Apple App Store." },
      { q: "What happens after launch?", a: "We offer post-launch maintenance and update packages to keep your app running smoothly." },
    ],
    related: ["ui-ux-design", "web-development", "software-solutions"],
  },
  "business-solutions": {
    icon: dataIcon,
    title: "Business Solutions",
    tagline: "Smarter decisions, powered by data.",
    description: "We help businesses streamline operations, identify growth opportunities, and make data-driven decisions through tailored business process and strategy solutions.",
    features: ["Business process optimisation", "Workflow automation", "Reporting & KPI dashboards", "Market & competitor analysis", "Growth strategy consulting"],
    price: "From ₦80,000",
    steps: [
      { num: "01", title: "Audit", desc: "We assess your current processes and identify inefficiencies." },
      { num: "02", title: "Strategy", desc: "We design an optimised workflow and growth plan." },
      { num: "03", title: "Implement", desc: "We help you execute the strategy with the right tools." },
      { num: "04", title: "Review", desc: "We track results and refine the approach over time." },
    ],
    testimonial: { text: "They helped us cut operational costs by 30% in just two months by streamlining our workflows. Incredible value.", name: "Funmi Adebayo", role: "COO, LogiFlow Nigeria" },
    faqs: [
      { q: "Is this consulting or implementation?", a: "Both — we advise and also help you implement the recommended changes." },
      { q: "How long does an engagement last?", a: "Engagements typically run 4–12 weeks depending on scope." },
      { q: "Do you work with small businesses?", a: "Yes, our solutions are designed to be practical and affordable for SMEs." },
      { q: "What industries do you serve?", a: "We work across retail, logistics, finance, healthcare, and more." },
    ],
    related: ["data-analytics-solutions", "software-solutions", "it-consulting-services"],
  },
  "data-analytics-solutions": {
    icon: dataIcon,
    title: "Data Analytics Solutions",
    tagline: "Turn raw data into real insights.",
    description: "We transform your raw business data into clear, actionable insights using modern analytics tools — helping you understand your customers, operations, and market better.",
    features: ["Data collection & cleaning", "Custom analytics dashboards", "Sales & revenue analysis", "Customer behaviour insights", "Predictive analytics"],
    price: "From ₦100,000",
    steps: [
      { num: "01", title: "Data Audit", desc: "We assess your existing data sources and quality." },
      { num: "02", title: "Pipeline", desc: "We set up data collection and cleaning processes." },
      { num: "03", title: "Analysis", desc: "We analyse the data and extract key insights." },
      { num: "04", title: "Dashboard", desc: "We deliver interactive dashboards you can use daily." },
    ],
    testimonial: { text: "The sales dashboard they built gave us visibility we never had before. We now make decisions based on real data.", name: "Kola Adewale", role: "Sales Director, RetailMax" },
    faqs: [
      { q: "What data sources can you work with?", a: "We work with spreadsheets, databases, CRMs, e-commerce platforms, and more." },
      { q: "What tools do you use?", a: "We use Power BI, Google Looker Studio, Python, and SQL depending on your needs." },
      { q: "Do I need a data team to use the dashboards?", a: "No, we build dashboards that are easy for non-technical users to navigate." },
      { q: "Is my data secure?", a: "Yes, we follow strict data handling protocols and sign NDAs on request." },
    ],
    related: ["business-solutions", "software-solutions", "it-consulting-services"],
  },
  "it-consulting-services": {
    icon: itIcon,
    title: "IT Consulting Services",
    tagline: "Technology aligned with your business goals.",
    description: "Our IT consultants work closely with your team to assess your current technology landscape, identify gaps, and recommend scalable solutions that support your long-term objectives.",
    features: ["IT strategy & roadmap", "Technology audits", "Cloud migration planning", "Vendor selection & management", "Digital transformation advisory"],
    price: "From ₦50,000",
    steps: [
      { num: "01", title: "Discovery", desc: "We meet your team and review your current IT setup." },
      { num: "02", title: "Audit", desc: "We identify gaps, risks, and opportunities." },
      { num: "03", title: "Roadmap", desc: "We deliver a clear, prioritised technology roadmap." },
      { num: "04", title: "Support", desc: "We guide implementation and vendor management." },
    ],
    testimonial: { text: "Their IT roadmap gave us a clear path forward. We've saved money on the wrong tools and invested in what actually works.", name: "Rotimi Bankole", role: "CEO, Nexus Group" },
    faqs: [
      { q: "Is this a one-time or ongoing service?", a: "We offer both one-time audits and ongoing advisory retainers." },
      { q: "Do you work with startups?", a: "Yes, we help startups build the right tech foundation from day one." },
      { q: "Can you help us move to the cloud?", a: "Yes, cloud migration planning and execution is one of our core offerings." },
      { q: "Do you recommend specific vendors?", a: "Yes, we provide unbiased vendor recommendations based on your needs and budget." },
    ],
    related: ["software-solutions", "hardware-solutions", "it-support-maintenance"],
  },
  "it-support-maintenance": {
    icon: supportIcon,
    title: "IT Support & Maintenance",
    tagline: "Keep your systems running, always.",
    description: "We provide ongoing IT support to keep your systems secure, updated, and performing at their best — with fast response times and proactive monitoring.",
    features: ["Remote & on-site support", "System monitoring & alerts", "Software updates & patches", "Data backup & recovery", "Help desk services"],
    price: "From ₦30,000/mo",
    steps: [
      { num: "01", title: "Onboarding", desc: "We document your systems and set up monitoring tools." },
      { num: "02", title: "Monitor", desc: "We proactively watch for issues before they affect you." },
      { num: "03", title: "Respond", desc: "We resolve issues remotely or on-site, fast." },
      { num: "04", title: "Report", desc: "Monthly reports on system health and actions taken." },
    ],
    testimonial: { text: "Since signing up for their support plan, we've had zero downtime. They fix issues before we even notice them.", name: "Yemi Ogundimu", role: "IT Manager, Apex Finance" },
    faqs: [
      { q: "What's your response time?", a: "Critical issues are responded to within 1 hour. Standard issues within 4 hours." },
      { q: "Do you offer remote support?", a: "Yes, most issues are resolved remotely. On-site visits are available when needed." },
      { q: "What's included in the monthly plan?", a: "Monitoring, updates, help desk access, and a monthly health report." },
      { q: "Can we cancel anytime?", a: "Yes, our plans are month-to-month with no long-term lock-in." },
    ],
    related: ["hardware-solutions", "it-consulting-services", "software-solutions"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("subscription");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [budget, setBudget] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    } catch {
      alert("Network error.");
    }
    setIsLoading(false);
  };

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Service not found.</h2>
        <Link to="/digital">← Back to Digital Services</Link>
      </div>
    );
  }

  const relatedServices = allServices.filter((s) => service.related.includes(s.slug));

  return (
    <section className="sd">
      <div className="sd-back">
        <Link to="/digital">← Back to Digital Services</Link>
      </div>

      {/* HERO */}
      <div className="sd-hero">
        <img src={service.icon} alt={service.title} className="sd-icon" />
        <div>
          <h1>{service.title}</h1>
          <p className="sd-tagline">{service.tagline}</p>
        </div>
      </div>

      {/* OVERVIEW + FEATURES */}
      <div className="sd-body">
        <div className="sd-desc">
          <h2>Overview</h2>
          <p>{service.description}</p>
        </div>

        <div className="sd-features">
          <h2>What's Included</h2>
          <ul>
            {service.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>
          <p className="sd-price">{service.price}</p>
          <button className="sd-cta" onClick={() => setIsModalOpen(true)}>Get Started</button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="sd-how">
        <h2>How It Works</h2>
        <div className="sd-steps">
          {service.steps.map((step, i) => (
            <div className="sd-step" key={i}>
              <div className="sd-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="sd-proof">
        <h2>What Our Clients Say</h2>
        <div className="sd-testimonial">
          <div className="sd-stars">★★★★★</div>
          <p className="sd-testimonial-text">"{service.testimonial.text}"</p>
          <div className="sd-testimonial-author">
            <div className="sd-author-avatar">{service.testimonial.name.charAt(0)}</div>
            <div>
              <h4>{service.testimonial.name}</h4>
              <span>{service.testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="sd-faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="sd-faq-list">
          {service.faqs.map((faq, i) => (
            <div className={`sd-faq-item ${openFaq === i ? "open" : ""}`} key={i}>
              <button className="sd-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="sd-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* RELATED SERVICES */}
      <div className="sd-related">
        <h2>Related Services</h2>
        <div className="sd-related-grid">
          {relatedServices.map((s) => (
            <Link to={`/digital/${s.slug}`} className="sd-related-card" key={s.slug}>
              <img src={s.icon} alt={s.title} />
              <h3>{s.title}</h3>
              <span>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* HIRE MODAL */}
      {isModalOpen && (
        <div className="digital-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="digital-modal-content digital-form-modal" onClick={(e) => e.stopPropagation()}>

            <div className="digital-modal-header">
              <h2>{service.title}</h2>
              <button className="digital-modal-close" onClick={() => setIsModalOpen(false)}>
                <IoCloseSharp />
              </button>
            </div>

            <div className="digital-modal-body">
              <div className="payment-section">

                {/* PAYMENT TYPE */}
                <div className="payment-type">
                  <p>Select Payment Type</p>
                  <div className="payment-toggle">
                    <div
                      className={`toggle-option ${paymentType === "subscription" ? "active" : ""}`}
                      onClick={() => { setPaymentType("subscription"); setBudget(""); }}
                    >
                      Subscription Plan
                    </div>
                    <div
                      className={`toggle-option ${paymentType === "oneoff" ? "active" : ""}`}
                      onClick={() => { setPaymentType("oneoff"); setSelectedPlan(""); }}
                    >
                      One-Off Service
                    </div>
                  </div>
                </div>

                {/* SUBSCRIPTION PLANS */}
                {paymentType === "subscription" && (
                  <div className="plan-options">
                    {[{name:"Basic Plan",price:"₦50k – ₦80k/mo",features:["Up to 5 requests","Email support"]},{name:"Standard Plan",price:"₦100k – ₦150k/mo",features:["Up to 15 requests","Priority support"]},{name:"Premium Plan",price:"₦200k+/mo",features:["Unlimited requests","Dedicated manager"]}].map((plan) => (
                      <div
                        key={plan.name}
                        className={`plan-option ${selectedPlan === plan.name ? "active" : ""}`}
                        onClick={() => setSelectedPlan(plan.name)}
                      >
                        <h4>{plan.name}</h4>
                        <p className="price">{plan.price}</p>
                        <ul>{plan.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                      </div>
                    ))}
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
              </div>

              {/* FORM */}
              <form className="digital-modal-form" onSubmit={handleSubmit}>
                <input type="hidden" name="service" value={service.title} />
                <input type="hidden" name="paymentType" value={paymentType} />
                <input type="hidden" name="plan" value={selectedPlan} />
                <input type="hidden" name="budget" value={budget} />
                <input type="hidden" name="_subject" value={`New Request - ${service.title}`} />

                <div className="digital-form-group">
                  <label>Company Name / Full Name</label>
                  <input type="text" name="fullName" placeholder="Company Name / Full Name" required />
                </div>

                <div className="digital-form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Enter Email.." required />
                </div>

                <div className="digital-form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" placeholder="Enter Number.." required />
                </div>

                <div className="digital-form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Type your message..." rows="4"></textarea>
                </div>

                <button type="submit" className="digital-modal-submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* THANK YOU MODAL */}
      {isThankYouOpen && (
        <div className="digital-modal-overlay" onClick={() => setIsThankYouOpen(false)}>
          <div className="digital-modal-content thank-you-modal" onClick={(e) => e.stopPropagation()}>
            <button className="digital-modal-close" onClick={() => setIsThankYouOpen(false)}>✕</button>
            <div className="thank-you-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your request has been received. We'll get back to you within 24 hours.</p>
            <button className="thank-you-btn" onClick={() => setIsThankYouOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetail;
