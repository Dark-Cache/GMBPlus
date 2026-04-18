import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import "./FacilityService.css";

import service1 from "../../Assets/Officeclean.jpg";
import service2 from "../../Assets/Movein.jpg";
import service3 from "../../Assets/Glassclean.jpg";
import service4 from "../../Assets/PostConst.jpg";
import service5 from "../../Assets/Repair.jpg";
import service6 from "../../Assets/Supply.jpg";
import service7 from "../../Assets/Clean2.jpg";

const serviceData = {
  "commercial-office-cleaning": {
    title: "Commercial & Office Cleaning",
    tagline: "A clean workspace is a productive workspace.",
    image: service1,
    description: [
      "Your office environment directly impacts the productivity, morale, and health of your team. A dirty, cluttered, or unhygienic workspace sends the wrong message to clients and staff alike. At GMB Plus, our Commercial & Office Cleaning service is designed to keep your business premises spotless, sanitised, and welcoming every single day.",
      "We provide scheduled cleaning services for offices, corporate headquarters, open-plan workspaces, meeting rooms, reception areas, restrooms, and common areas. Our trained cleaning professionals use industry-grade equipment and eco-friendly cleaning products that are safe for your staff and environment.",
      "Whether you need daily, weekly, or monthly cleaning, we build a customised cleaning plan around your business hours and specific requirements — ensuring minimal disruption to your operations while delivering maximum cleanliness.",
    ],
    features: [
      "Daily, weekly & monthly cleaning schedules",
      "Desk, floor & surface sanitisation",
      "Restroom deep cleaning & restocking",
      "Reception & common area cleaning",
      "Waste bin emptying & disposal",
      "Kitchen & pantry cleaning",
    ],
    steps: [
      { num: "01", title: "Book & Brief", desc: "You tell us your space size, schedule, and specific needs." },
      { num: "02", title: "Site Visit", desc: "We visit your premises to assess and plan the cleaning scope." },
      { num: "03", title: "Clean", desc: "Our team arrives on schedule and cleans every area thoroughly." },
      { num: "04", title: "Review", desc: "We do a final walkthrough and address any concerns immediately." },
    ],
    faqs: [
      { q: "Do you clean outside business hours?", a: "Yes, we offer early morning, evening, and weekend slots to avoid disrupting your operations." },
      { q: "Do you supply your own cleaning products?", a: "Yes, we bring all equipment and cleaning products. You don't need to provide anything." },
      { q: "Can we get a dedicated cleaning team?", a: "Yes, we can assign a dedicated team to your premises for consistency." },
      { q: "Is there a minimum contract period?", a: "We offer flexible plans — one-off, monthly, and long-term contracts are all available." },
    ],
    testimonial: { text: "Our office has never looked this good. The team is punctual, thorough, and professional. We've renewed our contract twice already.", name: "Adaeze Okonkwo", role: "Office Manager, PrimeCorp Lagos" },
    related: ["window-glass-cleaning", "post-construction-cleaning", "janitorial-supply"],
  },
  "move-in-move-out-cleaning": {
    title: "Move-In / Move-Out Cleaning",
    tagline: "Leave it spotless. Start fresh.",
    image: service2,
    description: [
      "Moving is stressful enough without having to worry about the state of the property you're leaving or entering. Whether you're a tenant handing back keys, a landlord preparing for new occupants, or a homeowner moving into a new space, our Move-In / Move-Out Cleaning service ensures the property is left in immaculate condition.",
      "We perform a comprehensive deep clean of every room — scrubbing walls, cleaning inside cupboards and wardrobes, descaling bathrooms, degreasing kitchens, cleaning windows, and removing all traces of the previous occupants. We leave the property looking and smelling brand new.",
      "Our service is trusted by property managers, real estate agents, landlords, and tenants across Lagos. We work quickly and efficiently to meet your handover deadlines without compromising on quality.",
    ],
    features: [
      "Full property deep clean",
      "Inside cupboard & wardrobe cleaning",
      "Kitchen degreasing & appliance cleaning",
      "Bathroom descaling & sanitisation",
      "Wall spot cleaning & window washing",
      "Floor scrubbing, mopping & polishing",
    ],
    steps: [
      { num: "01", title: "Book", desc: "Schedule your move-in or move-out clean with your preferred date." },
      { num: "02", title: "Assess", desc: "We assess the property size and condition to plan the clean." },
      { num: "03", title: "Deep Clean", desc: "Our team performs a thorough top-to-bottom clean of the entire property." },
      { num: "04", title: "Handover", desc: "We hand over a spotless property ready for inspection or occupation." },
    ],
    faqs: [
      { q: "How long does a move-out clean take?", a: "Depending on property size, between 3–8 hours. We'll give you an estimate after assessment." },
      { q: "Do you clean furnished or unfurnished properties?", a: "Both. We clean around furniture or do a full empty-property deep clean." },
      { q: "Can you clean on short notice?", a: "Yes, we offer same-day and next-day bookings subject to availability." },
      { q: "Do you offer a satisfaction guarantee?", a: "Yes. If anything is missed, we return within 24 hours to fix it at no extra charge." },
    ],
    testimonial: { text: "They cleaned our 4-bedroom flat before handover and the landlord was impressed. Got our full deposit back. Highly recommend!", name: "Tunde Balogun", role: "Tenant, Lekki Phase 1" },
    related: ["commercial-office-cleaning", "carpet-upholstery-cleaning", "post-construction-cleaning"],
  },
  "window-glass-cleaning": {
    title: "Window & Glass Cleaning",
    tagline: "Crystal clear views, every time.",
    image: service3,
    description: [
      "Dirty windows and glass surfaces don't just look unprofessional — they reduce natural light, create a poor impression on visitors, and can deteriorate over time if not properly maintained. Our Window & Glass Cleaning service delivers streak-free, sparkling results for commercial and residential properties of all sizes.",
      "We clean interior and exterior windows, glass partitions, glass doors, shopfronts, curtain walls, and high-rise glazing using professional equipment including water-fed poles, squeegees, and safe access platforms for elevated surfaces. Our cleaning solutions remove dirt, grime, water stains, and mineral deposits without scratching or damaging the glass.",
      "Regular window cleaning is especially important for commercial properties where first impressions matter. We offer scheduled maintenance contracts so your windows always look their best without you having to think about it.",
    ],
    features: [
      "Interior & exterior window cleaning",
      "Glass partition & door cleaning",
      "Shopfront & curtain wall cleaning",
      "High-rise & elevated glass cleaning",
      "Streak-free finish guaranteed",
      "Scheduled maintenance contracts",
    ],
    steps: [
      { num: "01", title: "Survey", desc: "We assess the number, size, and accessibility of all glass surfaces." },
      { num: "02", title: "Prepare", desc: "We set up equipment and protect surrounding areas before cleaning." },
      { num: "03", title: "Clean", desc: "We clean all glass surfaces using professional streak-free techniques." },
      { num: "04", title: "Inspect", desc: "Final inspection to ensure every pane is spotless before we leave." },
    ],
    faqs: [
      { q: "Do you clean high-rise windows?", a: "Yes, we have trained operatives and equipment for elevated and high-rise glass cleaning." },
      { q: "How often should windows be cleaned?", a: "For commercial properties, monthly or quarterly. Residential, every 1–3 months depending on location." },
      { q: "What if it rains after cleaning?", a: "Light rain rarely affects our results. We use solutions that repel water spots." },
      { q: "Do you clean glass partitions inside offices?", a: "Yes, interior glass partitions and doors are part of our standard service." },
    ],
    testimonial: { text: "Our building's glass facade looks brand new after every visit. Professional team, great results, and always on time.", name: "Emeka Eze", role: "Facilities Manager, Marina Towers" },
    related: ["commercial-office-cleaning", "post-construction-cleaning", "janitorial-supply"],
  },
  "post-construction-cleaning": {
    title: "Post-Construction Cleaning",
    tagline: "From construction site to move-in ready.",
    image: service4,
    description: [
      "After construction or renovation work, properties are left with dust, debris, paint splatters, cement residue, silicone smears, and general construction mess that standard cleaning cannot handle. Our Post-Construction Cleaning service transforms your newly built or renovated space into a clean, safe, and ready-to-use environment.",
      "We work on residential buildings, commercial properties, office fit-outs, retail spaces, and industrial facilities. Our team is trained to handle the specific challenges of post-construction cleaning — removing fine construction dust from every surface, cleaning windows of paint and adhesive residue, scrubbing floors, and disposing of construction waste responsibly.",
      "We understand that time is critical after construction — you want to move in or open for business as quickly as possible. Our team works efficiently and thoroughly to meet your handover timeline without cutting corners.",
    ],
    features: [
      "Construction dust & debris removal",
      "Paint splatter & cement residue cleaning",
      "Window & glass cleaning post-construction",
      "Floor scrubbing, polishing & sealing",
      "Fixture & fitting cleaning",
      "Waste removal & site clearance",
    ],
    steps: [
      { num: "01", title: "Assessment", desc: "We assess the site condition and scope of cleaning required." },
      { num: "02", title: "Rough Clean", desc: "We remove all large debris, dust, and construction waste." },
      { num: "03", title: "Detail Clean", desc: "We deep clean all surfaces, fixtures, windows, and floors." },
      { num: "04", title: "Final Polish", desc: "Final touches to ensure the space is move-in or open-for-business ready." },
    ],
    faqs: [
      { q: "How soon after construction can you start?", a: "We can mobilise within 24–48 hours of your request." },
      { q: "Do you handle large commercial sites?", a: "Yes, we have the team and equipment to handle sites of any size." },
      { q: "Do you remove construction waste?", a: "Yes, waste removal and responsible disposal is included in our service." },
      { q: "How long does post-construction cleaning take?", a: "Depending on site size, between 1–5 days. We'll give a timeline after site assessment." },
    ],
    testimonial: { text: "They cleaned our newly built office complex in 2 days. Every surface was spotless and we moved in right on schedule.", name: "Biodun Adeyemi", role: "Project Manager, BuildRight Nigeria" },
    related: ["commercial-office-cleaning", "window-glass-cleaning", "carpet-upholstery-cleaning"],
  },
  "fumigation-pest-control": {
    title: "Fumigation & Pest Control",
    tagline: "Protect your space from unwanted guests.",
    image: service5,
    description: [
      "Pests are more than a nuisance — they pose serious health risks, damage property, contaminate food, and can destroy a business's reputation overnight. Whether you're dealing with cockroaches, rodents, termites, bedbugs, mosquitoes, or flies, our Fumigation & Pest Control service provides effective, lasting solutions for homes, offices, warehouses, and commercial facilities.",
      "We use WHO-approved, NAFDAC-registered pesticides and fumigation chemicals that are effective against a wide range of pests while being safe for humans and pets when applied correctly. Our certified pest control technicians conduct a thorough inspection before treatment, identify the pest species and infestation level, and apply the most appropriate treatment method.",
      "We offer one-off treatments as well as ongoing pest management contracts with scheduled inspections and preventive treatments — ensuring your property stays pest-free year-round.",
    ],
    features: [
      "Cockroach & rodent control",
      "Termite & wood borer treatment",
      "Bedbug fumigation & treatment",
      "Mosquito & fly control",
      "Warehouse & storage fumigation",
      "Ongoing pest management contracts",
    ],
    steps: [
      { num: "01", title: "Inspection", desc: "We inspect your property to identify pest species and infestation level." },
      { num: "02", title: "Treatment Plan", desc: "We recommend the most effective treatment method for your situation." },
      { num: "03", title: "Fumigation", desc: "Our certified technicians apply treatment safely and thoroughly." },
      { num: "04", title: "Follow-Up", desc: "We schedule a follow-up visit to confirm the treatment was effective." },
    ],
    faqs: [
      { q: "Is the fumigation safe for children and pets?", a: "Yes, we use approved chemicals and advise on safe re-entry times after treatment." },
      { q: "How long does fumigation take?", a: "A standard treatment takes 1–3 hours depending on property size." },
      { q: "How soon will pests be eliminated?", a: "Most treatments show results within 24–72 hours. Some treatments require 2 visits." },
      { q: "Do you offer a guarantee?", a: "Yes, we offer a 30-day guarantee. If pests return within 30 days, we re-treat at no cost." },
    ],
    testimonial: { text: "We had a serious cockroach problem in our restaurant. GMB Plus sorted it out completely in one visit. Haven't seen one since.", name: "Chidinma Obi", role: "Restaurant Owner, Victoria Island" },
    related: ["commercial-office-cleaning", "janitorial-supply", "post-construction-cleaning"],
  },
  "janitorial-supply": {
    title: "Janitorial Supply",
    tagline: "Everything you need to keep your space clean.",
    image: service6,
    description: [
      "Maintaining a clean facility requires more than just a cleaning team — it requires a consistent, reliable supply of quality cleaning products, consumables, and janitorial equipment. Running out of hand soap, toilet paper, bin liners, or cleaning chemicals disrupts operations and creates a poor experience for staff and visitors.",
      "GMB Plus provides a comprehensive janitorial supply service for offices, hotels, hospitals, schools, shopping malls, and industrial facilities. We supply a wide range of cleaning chemicals, paper products, hygiene consumables, cleaning equipment, and personal protective equipment (PPE) — all sourced from trusted manufacturers and delivered directly to your facility on a scheduled basis.",
      "We can manage your entire janitorial supply chain — assessing your consumption, setting up a delivery schedule, and ensuring you never run out of essential supplies. Our supply service can be bundled with our cleaning services for a complete facility management solution.",
    ],
    features: [
      "Cleaning chemicals & detergents",
      "Paper products (tissue, hand towels, napkins)",
      "Hygiene consumables (soap, sanitiser, air freshener)",
      "Cleaning equipment (mops, buckets, brooms)",
      "Bin liners & waste management supplies",
      "PPE & safety consumables",
    ],
    steps: [
      { num: "01", title: "Assessment", desc: "We assess your facility's size and monthly consumption needs." },
      { num: "02", title: "Product List", desc: "We recommend the right products and quantities for your facility." },
      { num: "03", title: "Schedule", desc: "We set up a regular delivery schedule that keeps you fully stocked." },
      { num: "04", title: "Manage", desc: "We monitor usage and adjust supply quantities as your needs change." },
    ],
    faqs: [
      { q: "Do you supply to small offices?", a: "Yes, we supply to facilities of all sizes — from small offices to large commercial complexes." },
      { q: "Can we order on demand?", a: "Yes, we accept both scheduled and on-demand orders." },
      { q: "Do you offer bulk discounts?", a: "Yes, bulk orders and long-term supply contracts attract discounted pricing." },
      { q: "How quickly can you deliver?", a: "Standard delivery is within 24–48 hours. Express delivery is available for urgent orders." },
    ],
    testimonial: { text: "They've been supplying our hotel with cleaning products for over a year. Always on time, great quality, and competitive pricing.", name: "Folake Adewale", role: "Housekeeping Manager, Eko Hotels" },
    related: ["commercial-office-cleaning", "fumigation-pest-control", "carpet-upholstery-cleaning"],
  },
  "carpet-upholstery-cleaning": {
    title: "Carpet & Upholstery Cleaning",
    tagline: "Deep clean for a fresh, healthy interior.",
    image: service7,
    description: [
      "Carpets and upholstered furniture are among the most used — and most neglected — surfaces in any home or office. Over time, they accumulate dust, allergens, bacteria, food particles, pet dander, and stains that regular vacuuming simply cannot remove. Dirty carpets and furniture don't just look bad — they affect indoor air quality and can trigger allergies and respiratory issues.",
      "Our Carpet & Upholstery Cleaning service uses professional hot water extraction (steam cleaning) and dry cleaning methods to deep clean carpets, rugs, sofas, chairs, curtains, and other fabric surfaces. We remove embedded dirt, stubborn stains, odours, and allergens — restoring your carpets and furniture to a fresh, clean condition.",
      "We serve homes, offices, hotels, cinemas, event centres, and any facility with carpeted floors or upholstered furniture. Our cleaning solutions are safe for all fabric types and leave no harmful residues.",
    ],
    features: [
      "Hot water extraction (steam cleaning)",
      "Dry carpet cleaning",
      "Sofa & chair upholstery cleaning",
      "Rug & mat deep cleaning",
      "Curtain & drape cleaning",
      "Stain & odour removal treatment",
    ],
    steps: [
      { num: "01", title: "Inspect", desc: "We inspect fabric type, stain levels, and choose the right cleaning method." },
      { num: "02", title: "Pre-treat", desc: "We apply pre-treatment solution to stains and heavily soiled areas." },
      { num: "03", title: "Deep Clean", desc: "We perform hot water extraction or dry cleaning as appropriate." },
      { num: "04", title: "Dry & Review", desc: "We speed up drying and do a final review to ensure full satisfaction." },
    ],
    faqs: [
      { q: "How long does carpet cleaning take to dry?", a: "Steam-cleaned carpets dry in 2–6 hours. Dry cleaning methods allow immediate use." },
      { q: "Can you remove old stains?", a: "We can remove most stains. Very old or set-in stains may be reduced but not always fully removed." },
      { q: "Is the cleaning solution safe for children and pets?", a: "Yes, we use non-toxic, eco-friendly cleaning solutions safe for all occupants." },
      { q: "How often should carpets be professionally cleaned?", a: "Every 6–12 months for homes, every 3–6 months for high-traffic commercial spaces." },
    ],
    testimonial: { text: "Our office carpets looked brand new after their deep clean. Stains we thought were permanent are completely gone. Amazing service.", name: "Rotimi Ogunleye", role: "Admin Director, Sterling House" },
    related: ["commercial-office-cleaning", "move-in-move-out-cleaning", "fumigation-pest-control"],
  },
};

const allServices = [
  { slug: "commercial-office-cleaning", title: "Commercial & Office Cleaning" },
  { slug: "move-in-move-out-cleaning", title: "Move-In / Move-Out Cleaning" },
  { slug: "window-glass-cleaning", title: "Window & Glass Cleaning" },
  { slug: "post-construction-cleaning", title: "Post-Construction Cleaning" },
  { slug: "fumigation-pest-control", title: "Fumigation & Pest Control" },
  { slug: "janitorial-supply", title: "Janitorial Supply" },
  { slug: "carpet-upholstery-cleaning", title: "Carpet & Upholstery Cleaning" },
];

const FacilityService = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const w = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${w}px`;
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
      const res = await fetch("https://formspree.io/f/mpqkqplv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
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
      <div className="fs-not-found">
        <h2>Service not found.</h2>
        <Link to="/facility">← Back to Facility Management</Link>
      </div>
    );
  }

  const relatedServices = allServices.filter((s) => service.related.includes(s.slug));

  return (
    <section className="fs">

      {/* BACK */}
      <div className="fs-back">
        <Link to="/facility">← Back to Facility Management</Link>
      </div>

      {/* HERO */}
      <div className="fs-hero">
        <div className="fs-hero-text">
          <h1>{service.title}</h1>
          <p className="fs-tagline">{service.tagline}</p>
          <button className="fs-cta" onClick={() => setIsModalOpen(true)}>Book This Service</button>
        </div>
        <div className="fs-hero-img">
          <img src={service.image} alt={service.title} />
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="fs-overview">
        <div className="fs-desc">
          <h2>Overview</h2>
          {service.description.map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className="fs-features">
          <h2>What's Included</h2>
          <ul>
            {service.features.map((f, i) => <li key={i}>✓ {f}</li>)}
          </ul>
          <button className="fs-cta" onClick={() => setIsModalOpen(true)}>Book Now</button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="fs-how">
        <h2>How It Works</h2>
        <div className="fs-steps">
          {service.steps.map((step, i) => (
            <div className="fs-step" key={i}>
              <div className="fs-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="fs-proof">
        <h2>What Our Clients Say</h2>
        <div className="fs-testimonial">
          <div className="fs-stars">★★★★★</div>
          <p className="fs-testimonial-text">"{service.testimonial.text}"</p>
          <div className="fs-testimonial-author">
            <div className="fs-avatar">{service.testimonial.name.charAt(0)}</div>
            <div>
              <h4>{service.testimonial.name}</h4>
              <span>{service.testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="fs-faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="fs-faq-list">
          {service.faqs.map((faq, i) => (
            <div className={`fs-faq-item ${openFaq === i ? "open" : ""}`} key={i}>
              <button className="fs-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="fs-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* RELATED */}
      <div className="fs-related">
        <h2>Related Services</h2>
        <div className="fs-related-grid">
          {relatedServices.map((s) => (
            <Link to={`/facility/${s.slug}`} className="fs-related-card" key={s.slug}>
              <h3>{s.title}</h3>
              <span>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* BOOKING MODAL */}
      {isModalOpen && (
        <div className="fs-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="fs-modal" onClick={(e) => e.stopPropagation()}>
            <div className="fs-modal-header">
              <div>
                <h2>Book a Service</h2>
                <p>{service.title}</p>
              </div>
              <button className="fs-modal-close" onClick={() => setIsModalOpen(false)}><IoCloseSharp /></button>
            </div>
            <div className="fs-modal-body">
              <form className="fs-form" onSubmit={handleSubmit}>
                <input type="hidden" name="service" value={service.title} />
                <input type="hidden" name="_subject" value={`New Booking — ${service.title}`} />

                <div className="fs-form-group">
                  <label>Full Name / Company Name</label>
                  <input type="text" name="fullName" placeholder="Your name or company" required />
                </div>
                <div className="fs-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter email address" required />
                </div>
                <div className="fs-form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" placeholder="Enter phone number" required />
                </div>
                <div className="fs-form-group">
                  <label>Location / Address</label>
                  <input type="text" name="location" placeholder="Service location" required />
                </div>
                <div className="fs-form-group">
                  <label>Preferred Date</label>
                  <input type="date" name="date" required />
                </div>
                <div className="fs-form-group">
                  <label>Additional Message (optional)</label>
                  <textarea name="message" placeholder="Any special requirements..." rows="3"></textarea>
                </div>
                <button type="submit" className="fs-submit-btn" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Submit Booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* THANK YOU */}
      {isThankYouOpen && (
        <div className="fs-modal-overlay" onClick={() => setIsThankYouOpen(false)}>
          <div className="fs-thankyou" onClick={(e) => e.stopPropagation()}>
            <button className="fs-modal-close fs-thankyou-close" onClick={() => setIsThankYouOpen(false)}>✕</button>
            <div className="fs-thankyou-icon">✓</div>
            <h2>Booking Received!</h2>
            <p>Thank you! Our team will contact you within 24 hours to confirm your booking.</p>
            <button className="fs-thankyou-btn" onClick={() => setIsThankYouOpen(false)}>Close</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default FacilityService;
